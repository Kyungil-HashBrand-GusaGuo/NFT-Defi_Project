// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract SetData {

    // tokenid 넣으면 그에 맞는 address 출력
    mapping(uint => address) public tokenOwner;
    mapping(address => uint[]) public totalOwnedTokens;

    uint[] public totalJolamanData;

    mapping(uint => address) public jolamanTokenTypeOfOwner;
    mapping(uint => uint) public typeToId;


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

    // ownerAddress별 가지고있는 jolamanToken타입 조회 함수
    function getTotalOwnedTokens(address _ownerAddress) public view returns (uint[] memory) {
        return totalOwnedTokens[_ownerAddress];
    }

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

}