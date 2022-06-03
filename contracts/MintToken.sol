// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
//openzepplin string 형변환 라이브러리
import "@openzeppelin/contracts/utils/Strings.sol";
// contract의 주인이 맞는지 확인해주는 함수를 제공하는 openzepplin 라이브러리 
import "@openzeppelin/contracts/access/Ownable.sol";

contract MintToken is ERC721Enumerable, Ownable {
    // NFT 발행 수 제한
    uint constant public MAX_TOKEN_COUNT = 1000;
    uint constant public TOKEN_RANK_LENGTH = 4;
    uint constant public TOKEN_TYPE_LENGTH = 4;

    string public metadataURI;

    uint public gemTokenPrice = 10 * 18;
    
    constructor(string memory _name, string memory _symbol, string memory _metadataURI) ERC721(_name, _symbol) {
        // 컨트랙트 생성 시 IPFS에 저장된 metadata를 입력해 줘야함 
        metadataURI = _metadataURI;
    }

    // Token은 Rank와 Type을 가짐
    struct GemTokenData {
        uint gemTokenType;
    }

    // tokenId를 넣으면 그에맞는 rank, type 출력 매핑
    mapping(uint => GemTokenData) public gemTokenData;
    mapping(address => bool) public isWhiteList;

    uint[TOKEN_RANK_LENGTH][TOKEN_TYPE_LENGTH] public gemTokenCount;

    // ERC721에서 tokenURI함수를 기본적으로 제공 해 주나 이 프로젝트에서는 그 함수를 프로젝트 취지에 맞춰서 사용
    function tokenURI(uint _tokenId) override public view returns (string memory) {
        // String.toString() openzeppelin 형변환 라이브러리 사용
        string memory gemTokenType = Strings.toString(gemTokenData[_tokenId].gemTokenType);

        // abi.encodePacked(arg) arg들을 하나로 합쳐주는 함수
        // ex) https://gateway.pinata.cloud/ipfs/Qma7X5uQUmZDYWVmeJa7UKv2T89pRem5htGCa5o8p7hL3G/1/1.json
        return string(abi.encodePacked(metadataURI, '/', gemTokenType, '.json'));
    }


    function giveWhiteList(address _toWhiteList) public onlyOwner{
        isWhiteList[_toWhiteList] = true;
    }

    function mintGemToken() public payable {
        require(MAX_TOKEN_COUNT > totalSupply(), "Nomore mintin is possible");
        require(gemTokenPrice <= msg.value, "Not enough klay");
        // totalSupply ERC721 Enumerable에서 제공되는 기능 이 NFT 프로젝트의 총 NFT 발행량 return  
        uint tokenId = totalSupply() + 1;

        GemTokenData memory randomTokenData = randomGenerator(msg.sender, tokenId);

        gemTokenData[tokenId] = GemTokenData(randomTokenData.gemTokenType);

        payable(owner()).transfer(msg.value);

        // 발행자, totkalSupply를 통해 구한 tokenId
        _mint(msg.sender, tokenId);
    }

    // 토큰아이디를 받아 그 NFT가 어떤 타입을 가지고있는지 반환하는 함수
    function getGemTokenType(uint _tokenId) public view returns(uint) {
        return gemTokenData[_tokenId].gemTokenType;
    }

    // 랜덤 nft발행 함수
    function randomGenerator(address _msgSender, uint _tokenId) private view returns (GemTokenData memory) {

        GemTokenData memory randomTokenData;
        randomTokenData.gemTokenType = uint(keccak256(abi.encodePacked(blockhash(block.timestamp), _msgSender, _tokenId))) % 1000;

        return randomTokenData;

    }
}