// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;



import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";

import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";




contract RandomJolaman is ERC721Enumerable, Ownable, AccessControl {
    using SafeMath for uint256;

    uint[1000] private normal_token_ids;
    uint[20] private special_token_ids;
    uint private normal_token_index;
    uint private special_token_index;

    uint public _normalTokenIdCount;
    uint public _specialTokenIdCount; // whitelist 전용 token count

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant SPECIAL_MINTER_ROLE = keccak256("SPECIAL_MINTER_ROLE"); // whitelist 전용 minter role

    uint64 public mintingPrice = 2*10**18;
    uint private totalIncome; // 총 판매량

    uint constant public MAX_NORMAL_TOKEN_COUNT = 1000;
    uint constant public MAX_SPECIAL_TOKEN_COUNT = 10020;


    address public _owner;

    string public metadataURI; // metadata url public? or private?

    
    constructor(string memory _metadataURI) ERC721("Jolaman", "JLT") {
        _owner = msg.sender;
        metadataURI = _metadataURI;
        totalIncome = 0;
        _normalTokenIdCount = 0;
        _specialTokenIdCount = 10000;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
    }

    struct JolamanTokenData {
        uint jolamanTokenType; //일반 1~1000 , special 10000~10019
    }

    // tokenId를 넣으면 그에맞는 rank, type 출력 매핑
    mapping(uint => JolamanTokenData) public mappedJolamanTokenData;
    // tokenid 넣으면 그에 맞는 address 출력
    mapping(uint => address) public tokenOwner;
    mapping(address => uint[]) public totalOwnedTokens;
    mapping(address => bool) public isWhiteList;
    uint[] public latestJolamanData;
    mapping(uint => uint[]) public totalJolamanData;
    mapping(uint => address) public jolamanTokenTypeOfOwner;
    mapping(uint => uint) public typeToId;
    mapping(uint => bool) public AlreadyMint;


    // ERC721에서 tokenURI함수를 기본적으로 제공 해 주나 이 프로젝트에서는 그 함수를 프로젝트 취지에 맞춰서 사용
    function tokenURI(uint _tokenId) override public view returns (string memory) {
        // String.toString() openzeppelin 형변환 라이브러리 사용
        string memory jolamanTokenType = Strings.toString(mappedJolamanTokenData[_tokenId].jolamanTokenType);

        // abi.encodePacked(arg) arg들을 하나로 합쳐주는 함수
        // https://gateway.pinata.cloud/ipfs/QmT4Hef2VNKxr7fuJqZQMKfEPkm5jCLLPKraNrFJeSpg1s
        return string(abi.encodePacked(metadataURI, '/', jolamanTokenType, '.json'));
    }

    function addWhiteList(address _toWhiteList) public onlyOwner{
        isWhiteList[_toWhiteList] = true;
        _grantRole(SPECIAL_MINTER_ROLE, _toWhiteList);
    }
    function removeWhiteList(address _toWhiteList) public onlyOwner{
        isWhiteList[_toWhiteList] = false;
        _revokeRole(SPECIAL_MINTER_ROLE, _toWhiteList);
    }
    function mappingWrap(uint _tokenId, address to) private {
        tokenOwner[_tokenId] = to;
        totalOwnedTokens[msg.sender].push(_tokenId);
    }

    //   payment는 msg.value 값을 넘겨줘야함
    function payment() public payable returns (bool) {
        require(msg.sender.balance >= msg.value, "check balance");
        require(mintingPrice == msg.value, "check price");
        (bool success,) = _owner.call{value: msg.value}(""); //owner에게 msg.sender가 msg.value만큼 송금
        // payable(_owner).transfer(value);
        require(success, "Failed to send money");

        totalIncome = totalIncome.add(msg.value);

        _grantRole(MINTER_ROLE, msg.sender);

        return true;
    }

    function safeMint(address to) public payable onlyRole(MINTER_ROLE) {
        require(MAX_NORMAL_TOKEN_COUNT > _normalTokenIdCount, "No more minting is possible");
        require(mintingPrice <= msg.value, "Not enough klay");

        uint256 tokenId = _normalTokenIdCount;
        _normalTokenIdCount = _normalTokenIdCount.add(1);
        JolamanTokenData memory randomTokenData = randomGenerator();
        mappedJolamanTokenData[tokenId] = JolamanTokenData(randomTokenData.jolamanTokenType);
        require(AlreadyMint[randomTokenData.jolamanTokenType] == false, "Already Mint");
        AlreadyMint[randomTokenData.jolamanTokenType] = true;

        tokenOwner[tokenId] = to;
        totalOwnedTokens[msg.sender].push(randomTokenData.jolamanTokenType);
        latestJolamanData.push(randomTokenData.jolamanTokenType);
        totalJolamanData[0].push(randomTokenData.jolamanTokenType);
        jolamanTokenTypeOfOwner[randomTokenData.jolamanTokenType] = msg.sender;
        typeToId[randomTokenData.jolamanTokenType] = tokenId;
        _mint(to, tokenId);
    }

    function payandMint() public payable {
        // bool paymentStatus = payment();
        if (payment()) {
            safeMint(msg.sender);
            renounceRole(MINTER_ROLE, msg.sender);
        }
    }

    function safeMintforWhitelist(address to) public payable onlyRole(SPECIAL_MINTER_ROLE) {
        require(isWhiteList[msg.sender] == true);
        require(MAX_SPECIAL_TOKEN_COUNT > _specialTokenIdCount, "No more minting is possible");
        require(mintingPrice <= msg.value, "Not enough klay");
        

        uint256 tokenId = _specialTokenIdCount;
        _specialTokenIdCount = _specialTokenIdCount.add(1);
        JolamanTokenData memory randomTokenData = specialRandomGenerator();
        mappedJolamanTokenData[tokenId] = JolamanTokenData(randomTokenData.jolamanTokenType);
        require(AlreadyMint[randomTokenData.jolamanTokenType] == false, "Already Mint");
        AlreadyMint[randomTokenData.jolamanTokenType] = true;

        tokenOwner[tokenId] = to;
        totalOwnedTokens[msg.sender].push(randomTokenData.jolamanTokenType);
        totalJolamanData[0].push(randomTokenData.jolamanTokenType);
        latestJolamanData.push(randomTokenData.jolamanTokenType);
        jolamanTokenTypeOfOwner[randomTokenData.jolamanTokenType] = msg.sender;
        typeToId[randomTokenData.jolamanTokenType] = tokenId;
        _mint(to, tokenId);
    }

    function specialPayandMint() public payable {
        // bool paymentStatus = payment();
        if (payment()) {
            safeMintforWhitelist(msg.sender);
            // _revokeRole(SPECIAL_MINTER_ROLE, msg.sender); // removeWhiteList 에서 Revoke하기로함          
        }
    }

       // 토큰아이디를 받아 그 NFT가 어떤 타입을 가지고있는지 반환하는 함수
    function getJolamanTokenType(uint _tokenId) public view returns(uint) {
        return mappedJolamanTokenData[_tokenId].jolamanTokenType;
    }

    // 랜덤 jolamanTokenType 발행 함수 => jolamanTokenType.toString().json == metadata
    function randomGenerator() private returns (JolamanTokenData memory) {
        JolamanTokenData memory randomTokenData;
        uint256 _random = uint256(keccak256(abi.encodePacked(normal_token_index, msg.sender, block.timestamp, blockhash(block.number-1))));
        uint newTokenType = getRandTokenType(_random);
        randomTokenData.jolamanTokenType = newTokenType;
        return randomTokenData;

    }
    function specialRandomGenerator() private returns (JolamanTokenData memory) {
        JolamanTokenData memory randomTokenData;
        uint256 _random = uint256(keccak256(abi.encodePacked(special_token_index, msg.sender, block.timestamp, blockhash(block.number-1))));
        uint newTokenType = getRandSpecialTokenType(_random);
        randomTokenData.jolamanTokenType = newTokenType;
        return randomTokenData;
    }


    function getRandTokenType(uint random) private returns (uint) {
        uint len = normal_token_ids.length - normal_token_index++;
        require(len > 0, 'no ids left');
        uint randomIndex = random % len;
        uint id = normal_token_ids[randomIndex] != 0 ? normal_token_ids[randomIndex] + 1 : randomIndex + 1;
        normal_token_ids[randomIndex] = uint(normal_token_ids[len - 1] == 0 ? len - 1 : normal_token_ids[len - 1]);
        normal_token_ids[len - 1] = 0;
        return id;
    }
    function getRandSpecialTokenType(uint random) private returns (uint) {
        uint len = special_token_ids.length - special_token_index++;
        require(len > 0, 'no ids left');
        uint randomIndex = random % len;
        uint id = special_token_ids[randomIndex] != 0 ? special_token_ids[randomIndex] + 10000 : randomIndex + 10000;
        special_token_ids[randomIndex] = uint(special_token_ids[len - 1] == 0 ? len - 1 : special_token_ids[len - 1]);
        special_token_ids[len - 1] = 0;
        return id;
    }

    // function setMintingPrice(uint64 _price) public {
    //     mintingPrice = _price;
       
    // }

    function gettypeToId(uint joldata) public view returns(uint) {
        return typeToId[joldata];
    }

    function getTotalOwnedTokens(address ownerAddress) public view returns (uint[] memory) {
        return totalOwnedTokens[ownerAddress];
    }

    // 민팅시 마지막 졸라맨 데이터 받아오는 함수

    function getLatestJolamanData() public view returns (uint) {
        return latestJolamanData[latestJolamanData.length - 1];
    }

    function getTotalJolamanData(uint x) public view returns(uint[] memory) {
        return totalJolamanData[x];
    }

    function getjolamanTokenTypeOfOwner(uint _jolType) public view returns(address) {
        return jolamanTokenTypeOfOwner[_jolType];
    }

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721Enumerable, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }
}