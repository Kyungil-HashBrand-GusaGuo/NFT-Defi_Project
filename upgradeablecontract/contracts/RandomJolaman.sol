// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "hardhat/console.sol";


import "@openzeppelin/contracts-upgradeable/token/ERC721/ERC721Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC721/extensions/ERC721EnumerableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

import "./setdata.sol";
import "./GST_Token.sol";


contract RandomJolaman is Initializable, ERC721EnumerableUpgradeable, OwnableUpgradeable{
    using SafeMath for uint256;

    bool private initialized;

    uint[1000] private normal_token_ids;
    uint[20] private special_token_ids;
    uint private normal_token_index;
    uint private special_token_index;

    uint public _normalTokenIdCount; // normal token count
    uint public _specialTokenIdCount; // whitelist 전용 token count
    uint private totalIncome; // 총 판매량

    uint constant public MAX_NORMAL_TOKEN_COUNT = 1000; // 일반 nft 최대 발행 번호
    uint constant public MAX_SPECIAL_TOKEN_COUNT = 10020; // whiteList nft 최대 발행 번호
    uint64 public mintingPrice; 
    address public _owner;

    string public metadataURI; // metadata url public? or private?
    setData public setdata;

    // constructor 역할 배포시 자동실행

    function initialize(string memory _metadataURI, address _setdata) public initializer {
        __ERC721_init("Jolaman", "JLT");
        OwnableUpgradeable.__Ownable_init();
        _owner = msg.sender;
        metadataURI = _metadataURI;
        setdata = setData(_setdata);
        totalIncome = 0;
        _normalTokenIdCount = 0;
        _specialTokenIdCount = 10000;
        mintingPrice = 2 * 10 ** 18;
        initialized = true;
    }

    // TokenType 구조체
    struct JolamanTokenData {
        uint jolamanTokenType; //일반 1~1000 , special 10000~10019
    }

    // tokenId를 넣으면 그에맞는 졸라맨 타입 출력 매핑
    mapping(uint => JolamanTokenData) public mappedJolamanTokenData;
    // 주소입력시 whitelist인지 확인 매핑
    mapping(address => bool) public isWhiteList;
    // 졸라맨 타입 입력시 이미 발행된 졸라맨 타입인지 확인 매핑
    mapping(uint => bool) public AlreadyMint; 


    // ERC721에서 tokenURI함수를 기본적으로 제공 해 주나 이 프로젝트에서는 그 함수를 프로젝트 취지에 맞춰서 사용
    function tokenURI(uint _tokenId) override public view returns (string memory) {
        // String.toString() openzeppelin 형변환 라이브러리 사용
        string memory jolamanTokenType = Strings.toString(mappedJolamanTokenData[_tokenId].jolamanTokenType);
        return string(abi.encodePacked(metadataURI, '/', jolamanTokenType, '.json'));
    }

    // whiteList 추가 함수 contract owner만 실행 가능
    function addWhiteList(address _toWhiteList) public onlyOwner{
        isWhiteList[_toWhiteList] = true;
    }

    // whiteList 제거 함수 contract owner만 실행 가능
    function removeWhiteList(address _toWhiteList) public onlyOwner{
        isWhiteList[_toWhiteList] = false;
    }

    //   payment는 msg.value 값을 넘겨줘야함 (민팅 가격 지불 함수)
    function payment() public payable returns (bool) {
        require(msg.sender.balance >= msg.value, "check balance");
        require(mintingPrice == msg.value, "check price");
        (bool success,) = _owner.call{value: msg.value}(""); //owner에게 msg.sender가 msg.value만큼 송금
        require(success, "Failed to send money");

        totalIncome = totalIncome.add(msg.value);
        return true;
    }

    // 민팅 세부 로직 함수
    function safeMint(address to) public payable {
        require(MAX_NORMAL_TOKEN_COUNT > _normalTokenIdCount, "No more minting is possible");
        require(mintingPrice <= msg.value, "Not enough klay");

        uint256 tokenId = _normalTokenIdCount;
        _normalTokenIdCount = _normalTokenIdCount.add(1);
        JolamanTokenData memory randomTokenData = randomGenerator();
        mappedJolamanTokenData[tokenId] = JolamanTokenData(randomTokenData.jolamanTokenType);
        require(AlreadyMint[randomTokenData.jolamanTokenType] == false, "Already Mint");
        AlreadyMint[randomTokenData.jolamanTokenType] = true;

        setdata.setTokenOwner(tokenId, to);
        setdata.setTotalOwnedTokens(to, randomTokenData.jolamanTokenType);
        setdata.setTotalJolamanData(randomTokenData.jolamanTokenType);
        setdata.setExceptSellOwnedJolamanType(to, randomTokenData.jolamanTokenType);

        setdata.setJolamanTokenTypeOfOwner(randomTokenData.jolamanTokenType, to);
        setdata.setTypeToId(randomTokenData.jolamanTokenType, tokenId);
        _mint(to, tokenId);
    }

    // 실제 민팅시 연결할 함수 지불이 성공적으로 이루어지면 민팅 진행
    function payandMint() public payable {
        if (payment()) {
            safeMint(msg.sender);
        }
    }

    // whiteList 민팅 세부 로직 함수
    function safeMintforWhitelist(address to) public payable {
        require(isWhiteList[msg.sender] == true);
        require(MAX_SPECIAL_TOKEN_COUNT > _specialTokenIdCount, "No more minting is possible");
        require(mintingPrice <= msg.value, "Not enough klay");
        

        uint256 tokenId = _specialTokenIdCount;
        _specialTokenIdCount = _specialTokenIdCount.add(1);
        JolamanTokenData memory randomTokenData = specialRandomGenerator();
        mappedJolamanTokenData[tokenId] = JolamanTokenData(randomTokenData.jolamanTokenType);
        require(AlreadyMint[randomTokenData.jolamanTokenType] == false, "Already Mint");
        AlreadyMint[randomTokenData.jolamanTokenType] = true;

        setdata.setTokenOwner(tokenId, to);
        setdata.setTotalOwnedTokens(to, randomTokenData.jolamanTokenType);
        setdata.setTotalJolamanData(randomTokenData.jolamanTokenType);
        setdata.setExceptSellOwnedJolamanType(to, randomTokenData.jolamanTokenType);


        setdata.setJolamanTokenTypeOfOwner(randomTokenData.jolamanTokenType, to);
        setdata.setTypeToId(randomTokenData.jolamanTokenType, tokenId);
        _mint(to, tokenId);
    }

    // 실제 whiteList 민팅시 연결할 함수 지불이 성공적으로 이루어지면 민팅 진행
    function specialPayandMint() public payable {
        bool paymentStatus = payment();
        if (paymentStatus) {
            safeMintforWhitelist(msg.sender);         
        }
    }

       // 토큰아이디를 받아 그 NFT가 어떤 타입을 가지고있는지 반환하는 함수
    function getJolamanTokenType(uint _tokenId) public view returns(uint) {
        return mappedJolamanTokenData[_tokenId].jolamanTokenType;
    }

    // 랜덤 normal jolamanTokenType 발행 함수 => jolamanTokenType.toString().json == metadata
    function randomGenerator() private returns (JolamanTokenData memory) {
        JolamanTokenData memory randomTokenData;
        uint256 _random = uint256(keccak256(abi.encodePacked(normal_token_index, msg.sender, block.timestamp, blockhash(block.number-1))));
        uint newTokenType = getRandTokenType(_random);
        randomTokenData.jolamanTokenType = newTokenType;
        return randomTokenData;

    }
    
    // 랜덤 whiteList Type 반행 함수
    function specialRandomGenerator() private returns (JolamanTokenData memory) {
        JolamanTokenData memory randomTokenData;
        uint256 _random = uint256(keccak256(abi.encodePacked(special_token_index, msg.sender, block.timestamp, blockhash(block.number-1))));
        uint newTokenType = getRandSpecialTokenType(_random);
        randomTokenData.jolamanTokenType = newTokenType;
        return randomTokenData;
    }

    // 랜덤 추출 로직
    function getRandTokenType(uint random) private returns (uint) {
        uint len = normal_token_ids.length - normal_token_index++;
        require(len > 0, 'no ids left');
        uint randomIndex = random % len;
        uint id = normal_token_ids[randomIndex] != 0 ? normal_token_ids[randomIndex] + 1 : randomIndex + 1;
        normal_token_ids[randomIndex] = uint(normal_token_ids[len - 1] == 0 ? len - 1 : normal_token_ids[len - 1]);
        normal_token_ids[len - 1] = 0;
        return id;
    }

    // 랜덤 whiteList 추출 로직
    function getRandSpecialTokenType(uint random) private returns (uint) {
        uint len = special_token_ids.length - special_token_index++;
        require(len > 0, 'no ids left');
        uint randomIndex = random % len;
        uint id = special_token_ids[randomIndex] != 0 ? special_token_ids[randomIndex] + 10000 : randomIndex + 10000;
        special_token_ids[randomIndex] = uint(special_token_ids[len - 1] == 0 ? len - 1 : special_token_ids[len - 1]);
        special_token_ids[len - 1] = 0;
        return id;
    }

    // 민팅가격 변경 함수
    function setMintingPrice(uint64 _price) public {
        mintingPrice = _price;
       
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721EnumerableUpgradeable)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}