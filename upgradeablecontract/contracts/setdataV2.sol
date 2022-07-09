// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "hardhat/console.sol";

contract setDataUpgradeV2 is Initializable, OwnableUpgradeable {

    address public _owner;
    bool private initialized;

    function initialize() initializer public {
        initialized = true;
        OwnableUpgradeable.__Ownable_init();
        _owner = msg.sender;
    }

    // tokenid 넣으면 그에 맞는 address 출력
    mapping(uint => address) public tokenOwner;
    mapping(address => uint[]) public totalOwnedTokens;

    uint[] public totalJolamanData;

    mapping(uint => address) public jolamanTokenTypeOfOwner;
    mapping(uint => uint) public typeToId;


    // saleJolaman.sol
    mapping(uint => bool) public SellingJol;
 
    

    // StakingSystem.sol
    mapping(uint => bool) public StakedJolamanType;
    mapping(address => uint[]) public exceptSellOwnedJolamanType;

    // contract Owner Address 조회 함수

    function getOwner() public view returns(address) {
        return _owner;
    }

    function setTokenOwner(uint _TokenId, address _to) external {
        tokenOwner[_TokenId] = _to;
    } 

    // TokenId 별 TokenOwner 조회 함수 
    function getTokenOwner(uint _TokenId) public view returns(address) {
        return tokenOwner[_TokenId];
    } 

    function setTotalOwnedTokens(address _tokenOwner, uint _JolType) external {
        totalOwnedTokens[_tokenOwner].push(_JolType);
    }

    // 보유 토큰 판매시 토큰 보유 배열에서 삭제
    function SellOwnedToken(address sellOwnerAddress, uint _JolamanType) external {
        for(uint i = 0; i < totalOwnedTokens[sellOwnerAddress].length; i++) {
            if(totalOwnedTokens[sellOwnerAddress][i] == _JolamanType) {
            totalOwnedTokens[sellOwnerAddress][i] = totalOwnedTokens[sellOwnerAddress][totalOwnedTokens[sellOwnerAddress].length - 1];
            totalOwnedTokens[sellOwnerAddress].pop();
            }
        }
    }

    // ownerAddress별 가지고있는 jolamanToken타입 조회 함수
    function getTotalOwnedTokens(address _ownerAddress) public view returns (uint[] memory) {
        return totalOwnedTokens[_ownerAddress];
    }

    function setTotalJolamanData(uint _JolType) external {
        require(_JolType < 500 , "So big number");
        totalJolamanData.push(_JolType);
    }

    // 발행된 모든 졸라맨 타입 데이터 조회 함수
    function getTotalJolamanData() public view returns(uint[] memory) {
        return totalJolamanData;
    }

    // 마지막 발행된 졸라맨 타입 데이터 조회 함수
    function getLatestJolamanData() public view returns (uint) {
        return totalJolamanData[totalJolamanData.length - 1];
    }

    function setJolamanTokenTypeOfOwner(uint _JolType, address _tokenOwner) external {
        jolamanTokenTypeOfOwner[_JolType] = _tokenOwner;
    }

    // 졸라맨 타입 => 그 토큰의 주인 계좌 조회 함수
    function getJolamanTokenTypeOfOnwer(uint _JolType) public view returns(address) {
        return jolamanTokenTypeOfOwner[_JolType];
    }

    function setTypeToId(uint _joldata, uint _tokenId) external {
            typeToId[_joldata] = _tokenId;
    }

    // 졸라맨 타입별 TokenId값 조회 함수
    function gettypeToId(uint joldata) public view returns(uint) {
        return typeToId[joldata];
    }

    // SaleJolaman.sol
    
    function setSellingJolTypeToBool(uint _JolamanType, bool boolean) external {
        SellingJol[_JolamanType] = boolean;
    }

    
    // 졸라맨 타입 입력 판매 중 여부 확인 매핑 조회 함수

    function getSellingJolTypeToBool(uint _JolamanType) public view returns(bool) {
        return SellingJol[_JolamanType];
    }

    // StakingSystem.sol

    function setStakedJolamanType(uint _JolamanType, bool boolean) external {
        StakedJolamanType[_JolamanType] = boolean;
    }

    // 졸라맨 타입 입력시 스테이킹 여부 확인 매핑 조회 함수

    function getStakedJolamanType(uint _JolamanType) public view returns(bool) {
        return StakedJolamanType[_JolamanType];
    }

    function setExceptSellOwnedJolamanType(address _tokenOwner, uint _JolType) external {
        exceptSellOwnedJolamanType[_tokenOwner].push(_JolType);
    }

    function setDeleteExceptSellOwnedJolamanType(address _tokenOwner, uint _JolType) external {
        for(uint i = 0; i < exceptSellOwnedJolamanType[_tokenOwner].length; i++) {
            if(exceptSellOwnedJolamanType[_tokenOwner][i] == _JolType) {
                exceptSellOwnedJolamanType[_tokenOwner][i] = exceptSellOwnedJolamanType[_tokenOwner][exceptSellOwnedJolamanType[_tokenOwner].length - 1];
                exceptSellOwnedJolamanType[_tokenOwner].pop();
            }
        }
    }

    // 판매등록 되어있지 않고 스테이킹 되어있지 않는 계좌별 졸라맨타입 배열
    function getExceptSellOwnedJolamanType(address _tokenOwner) public view returns(uint[] memory) {
        return exceptSellOwnedJolamanType[_tokenOwner];
    }

}