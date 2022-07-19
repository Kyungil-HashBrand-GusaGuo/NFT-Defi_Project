// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "hardhat/console.sol";

contract setData {

    address public _owner;
    bool private initialized;

    function initialize() public {
        initialized = true;

        _owner = msg.sender;
    }

    // tokenid 넣으면 그에 맞는 address 출력
    mapping(uint => address) public tokenOwner;
    // 주소 별 보유 졸라맨 타입 배열 매핑
    mapping(address => uint[]) public totalOwnedTokens;

    // 발행된 모든 졸라맨 타입 저장 배열
    uint[] public totalJolamanData;

    // 졸라맨 타입 입력시 nft주인 반환 매핑
    mapping(uint => address) public jolamanTokenTypeOfOwner;
    // 졸라맨 타입 입력시 nft tokenid 반환 매핑
    mapping(uint => uint) public typeToId;


    // saleJolaman.sol

    // 졸라맨 타입 입력시 판매중인지 bool값 반환 매핑
    mapping(uint => bool) public SellingJol;
 
    

    // StakingSystem.sol

    // 졸라맨 타입 입력시 스테이킹 여부 bool값 반환 매핑
    mapping(uint => bool) public StakedJolamanType;
    // address 입력시 판매중이지 않고 보유한 보든 졸라맨 타입 저장 배열 반환 매핑
    mapping(address => uint[]) public exceptSellOwnedJolamanType;

    // contract Owner Address 조회 함수
    function getOwner() public view returns(address) {
        return _owner;
    }

    // tokenid, address 입력시 tokenowner 매핑에 저장 함수
    function setTokenOwner(uint _TokenId, address _to) external {
        tokenOwner[_TokenId] = _to;
    } 

    // TokenId 별 TokenOwner 조회 함수 
    function getTokenOwner(uint _TokenId) public view returns(address) {
        return tokenOwner[_TokenId];
    } 

    // nft 발행, 구매, 에어드랍시 토큰 주인 주소, 졸라맨타입 totalOwnedToken 매핑에 추가 함수
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

    // 민팅시 발행된 모든 졸라맨 토큰 배열에 추가 함수
    function setTotalJolamanData(uint _JolType) external {
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

    // nft 발행, 구매시, 에어드랍시 주인 초기화, 변경 매핑 변환 함수
    function setJolamanTokenTypeOfOwner(uint _JolType, address _tokenOwner) external {
        jolamanTokenTypeOfOwner[_JolType] = _tokenOwner;
    }

    // 졸라맨 타입 => 그 토큰의 주인 계좌 조회 함수
    function getJolamanTokenTypeOfOnwer(uint _JolType) public view returns(address) {
        return jolamanTokenTypeOfOwner[_JolType];
    }
    // 발행된 졸라맨 토큰 타입을 id로 변환체크 할 수 있게 하는 매핑 추가 함수
    function setTypeToId(uint _joldata, uint _tokenId) external {
            typeToId[_joldata] = _tokenId;
    }

    // 졸라맨 타입별 TokenId값 조회 함수
    function gettypeToId(uint joldata) public view returns(uint) {
        return typeToId[joldata];
    }

    // SaleJolaman.sol
    
    // 판매등록시 판매중으로 boolean값 변환 함수
    function setSellingJolTypeToBool(uint _JolamanType, bool boolean) external {
        SellingJol[_JolamanType] = boolean;
    }

    
    // 졸라맨 타입 입력 판매 중 여부 확인 매핑 조회 함수

    function getSellingJolTypeToBool(uint _JolamanType) public view returns(bool) {
        return SellingJol[_JolamanType];
    }

    // StakingSystem.sol

    // 스테이킹시 해당 졸라맨 타입 스테이킹여부 boolean타입 세팅 함수
    function setStakedJolamanType(uint _JolamanType, bool boolean) external {
        StakedJolamanType[_JolamanType] = boolean;
    }

    // 졸라맨 타입 입력시 스테이킹 여부 확인 매핑 조회 함수

    function getStakedJolamanType(uint _JolamanType) public view returns(bool) {
        return StakedJolamanType[_JolamanType];
    }

    // 민팅, 구매시 판매중이지 않은 졸라맨 토큰 세팅 함수
    function setExceptSellOwnedJolamanType(address _tokenOwner, uint _JolType) external {
        exceptSellOwnedJolamanType[_tokenOwner].push(_JolType);
    }
    // 판매등록시 스테이킹 가능한 토큰 배열 에서 제거 함수 
    function setDeleteExceptSellOwnedJolamanType(address _tokenOwner, uint _JolType) external {
        for(uint i = 0; i < exceptSellOwnedJolamanType[_tokenOwner].length; i++) {
            if(exceptSellOwnedJolamanType[_tokenOwner][i] == _JolType) {
                exceptSellOwnedJolamanType[_tokenOwner][i] = exceptSellOwnedJolamanType[_tokenOwner][exceptSellOwnedJolamanType[_tokenOwner].length - 1];
                exceptSellOwnedJolamanType[_tokenOwner].pop();
            }
        }
    }

    // 판매등록 되어있지 않고 스테이킹 되어있지 않는 계좌별 졸라맨타입 배열 조회 함수
    function getExceptSellOwnedJolamanType(address _tokenOwner) public view returns(uint[] memory) {
        return exceptSellOwnedJolamanType[_tokenOwner];
    }

}