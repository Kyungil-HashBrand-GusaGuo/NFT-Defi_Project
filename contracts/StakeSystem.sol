// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "hardhat/console.sol";
import "./SetData.sol";
import "./SaleJolaman.sol";
import "./GST_Token.sol";


contract StakingSystem is Ownable, ERC721Holder, JolamanToken {

    IERC721 public randomJolaman;
    SetData public setdata;
    uint256 public stakedTotal;
    uint256 public stakingStartTime;
    uint256 constant stakingTime = 10 seconds;
    uint256 constant token = 10e18;
    
    struct Staker {
        uint256[] JolamanType;
        mapping(uint256 => uint256) tokenStakingCoolDown;
        uint256 balance;
        uint256 rewardsReleased;
    }

    constructor(IERC721 _randomJolaman, SetData _setdata) {
        randomJolaman = _randomJolaman;
        setdata = _setdata;
    }


    mapping(address => Staker) public stakers;
    mapping(uint256 => address) public tokenOwner;
    bool public tokensClaimable;
    bool initialised;


    event Staked(address owner, uint256 amount);

    event Unstaked(address owner, uint256 amount);

    event RewardPaid(address indexed user, uint256 reward);

    event ClaimableStatusUpdated(bool status);

    event EmergencyUnstake(address indexed user, uint256 tokenId);

    // 스테이킹 시작 관리자만 가능 initstaking을 해야만 staking을 할 수 있음
    function initStaking() public onlyOwner {
        require(!initialised, "Already initialised");
        stakingStartTime = block.timestamp;
        initialised = true;
    }

    // 토큰 보상 청구권 기능 실행 관리자만 가능 이 기능 실행 해야만 모든 유저가 토큰 보상 청구 가능
    function setTokensClaimable(bool _enabled) public onlyOwner {
        tokensClaimable = _enabled;
        emit ClaimableStatusUpdated(_enabled);
    }

    // 유저별 스테이킹한 졸라맨 타입 조회 함수
    function getStakedTokens(address _user)
        public
        view
        returns (uint256[] memory JolamanType)
    {
        return stakers[_user].JolamanType;
    }

    // 스테이킹 
    function stake(uint256 _JolamanType) public {
        _stake(msg.sender, _JolamanType);
    }

    // 입력한 모든 NFT 스테이킹 
    function stakeBatch(uint256[] memory JolamanType) public {
        for (uint256 i = 0; i < JolamanType.length; i++) {
            _stake(msg.sender, JolamanType[i]);
        }
    }

    // 스테이킹 세부 로직
    function _stake(address _user, uint256 _JolamanType) internal {
        require(initialised, "Staking System: the staking has not started");
        require(
            randomJolaman.ownerOf(setdata.gettypeToId(_JolamanType)) == _user,
            "user must be the owner of the token"
        );
        Staker storage staker = stakers[_user];

        staker.JolamanType.push(_JolamanType);
        staker.tokenStakingCoolDown[_JolamanType] = block.timestamp;
        tokenOwner[_JolamanType] = _user;

        randomJolaman.safeTransferFrom(_user, address(this), setdata.gettypeToId(_JolamanType));

        emit Staked(_user, _JolamanType);
        stakedTotal++;
    }

    // 스테이킹 해제
    function unstake(uint256 _JolamanType) public {
        claimReward(msg.sender);
        _unstake(msg.sender, _JolamanType);
    }

    // 졸라맨타입 입력시 입력한 모든 NFT 스테이킹 해제
    function unstakeBatch(uint256[] memory JolamanType) public {
        claimReward(msg.sender);
        for (uint256 i = 0; i < JolamanType.length; i++) {
            if (tokenOwner[JolamanType[i]] == msg.sender) {
                _unstake(msg.sender, JolamanType[i]);
            }
        }
    }

    // 긴급상황 스테이킹 해제 
    function emergencyUnstake(uint256 _JolamanType) public {
        require(
            tokenOwner[_JolamanType] == msg.sender,
            "nft._unstake: Sender must have staked tokenID"
        );
        _unstake(msg.sender, _JolamanType);
        emit EmergencyUnstake(msg.sender, _JolamanType);
    }


    // 스테이킹 해제 세부 로직
    function _unstake(address _user, uint256 _JolamanType) internal {
        require(
            tokenOwner[_JolamanType] == _user,
            "Nft Staking System: user must be the owner of the staked nft"
        );
        Staker storage staker = stakers[_user];


        
        if (staker.JolamanType.length > 0) {
            removeByValue(_JolamanType, staker.JolamanType);
        }
        staker.tokenStakingCoolDown[_JolamanType] = 0;
        delete tokenOwner[_JolamanType];

        randomJolaman.safeTransferFrom(address(this), _user, setdata.gettypeToId(_JolamanType));

        emit Unstaked(_user, _JolamanType);
        stakedTotal--;
    }

    function find(uint value, uint[] storage JolamanType) private view returns(uint)  {
        uint i = 0;
        while (JolamanType[i] != value) {
            i++;
        }
        return i;
    }

    function removeByValue(uint value, uint[] storage JolamanType) private{
        uint i = find(value, JolamanType);
        removeByIndex(i, JolamanType);
    }

    function removeByIndex(uint i, uint[] storage JolamanType) private{
        while (i<JolamanType.length-1) {
            JolamanType[i] = JolamanType[i+1];
            i++;
        }
        JolamanType.pop();
    }


    // 쌓인 보상 조회 함수
    function updateReward(address _user) public {
        
        Staker storage staker = stakers[_user];
        uint256[] storage ids = staker.JolamanType;
        for (uint256 i = 0; i < ids.length; i++) {
            if (
                staker.tokenStakingCoolDown[ids[i]] <
                block.timestamp + stakingTime &&
                staker.tokenStakingCoolDown[ids[i]] > 0
            ) {
            
                uint256 stakedDays = ((block.timestamp - uint(staker.tokenStakingCoolDown[ids[i]]))) / stakingTime;
                uint256 partialTime = ((block.timestamp - uint(staker.tokenStakingCoolDown[ids[i]]))) % stakingTime;
                
                staker.balance +=  token * stakedDays;

                staker.tokenStakingCoolDown[ids[i]] = block.timestamp - partialTime;

                console.logUint(staker.tokenStakingCoolDown[ids[i]]);
                console.logUint(staker.balance);
            }
        }
    }

    // 보상 청구 함수
    function claimReward(address _user) public {
        require(tokensClaimable == true, "Tokens cannnot be claimed yet");
        require(stakers[_user].balance > 0 , "0 rewards yet");


        stakers[_user].rewardsReleased += stakers[_user].balance;
        _grantRole(MINTER_ROLE, msg.sender);
        mint(_user, stakers[_user].balance);
        _revokeRole(MINTER_ROLE, msg.sender);
        stakers[_user].balance = 0;

        emit RewardPaid(_user, stakers[_user].balance);
    }
}