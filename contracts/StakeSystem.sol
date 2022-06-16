// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "./SetData.sol";
import "./SaleJolaman.sol";
import "./GST_Token.sol";


contract StakingSystem is Ownable, ERC721Holder, JolamanToken {


    address public Contractowner;
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
        Contractowner = msg.sender;
    }


    mapping(address => Staker) public stakers;
    mapping(uint256 => address) public tokenOwner;


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
        bool boolean = true;
        require(
            randomJolaman.ownerOf(setdata.gettypeToId(_JolamanType)) == _user,
            "user must be the owner of the token"
        );
        require(setdata.getSellingJolTypeToBool(_JolamanType) == false, "This token already Sale");
        Staker storage staker = stakers[_user];

        setdata.setDeleteExceptSellOwnedJolamanType(_user, _JolamanType);
        staker.JolamanType.push(_JolamanType);
        staker.tokenStakingCoolDown[_JolamanType] = block.timestamp;
        tokenOwner[_JolamanType] = _user;
        setdata.setStakedJolamanType(_JolamanType, boolean);
        randomJolaman.safeTransferFrom(_user, address(this), setdata.gettypeToId(_JolamanType));

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

    // 스테이킹 해제 세부 로직
    function _unstake(address _user, uint256 _JolamanType) internal {
        bool boolean = false;
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
        setdata.setExceptSellOwnedJolamanType(_user, _JolamanType);
        setdata.setStakedJolamanType(_JolamanType, boolean);
        randomJolaman.safeTransferFrom(address(this), _user, setdata.gettypeToId(_JolamanType));

        // emit Unstaked(_user, _JolamanType);
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
    function updateReward(address _user) public view returns(uint) {
        uint reward;
        Staker storage staker = stakers[_user];
        uint256[] storage ids = staker.JolamanType;
        for (uint256 i = 0; i < ids.length; i++) {
            if (
                staker.tokenStakingCoolDown[ids[i]] <
                block.timestamp + stakingTime &&
                staker.tokenStakingCoolDown[ids[i]] > 0
            ) {
            
                uint256 stakedDays = ((block.timestamp - uint(staker.tokenStakingCoolDown[ids[i]]))) / stakingTime;
                reward += stakedDays * token;
            }
        }
        return reward;
    }

    // 보상 청구 함수
    function claimReward(address _user) public {

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
            }
        }

        stakers[_user].rewardsReleased += stakers[_user].balance;
        _grantRole(MINTER_ROLE, msg.sender);
        mint(_user, stakers[_user].balance);
        _revokeRole(MINTER_ROLE, msg.sender);
        stakers[_user].balance = 0;
    }

    // account별 스테이킹된 졸라맨타입 반환함수
    function getOwnedStakedJolamanType(address _user) public view returns(uint[] memory) {
        Staker storage staker = stakers[_user];
        return staker.JolamanType;
    }

    function KlayToToken() public payable{
        _grantRole(MINTER_ROLE, msg.sender);
        mint(msg.sender, msg.value);
        _revokeRole(MINTER_ROLE, msg.sender);
    }

    function TokenToKlay(uint amount) public {
        payable(msg.sender).transfer(amount * 10 ** 18);
         _grantRole(BURNER_ROLE, msg.sender);
        burn(msg.sender, amount * 10 ** 18);
        _revokeRole(BURNER_ROLE, msg.sender);
    }

    function AddressBalance() public view returns(uint){
        return address(this).balance;
    }
}