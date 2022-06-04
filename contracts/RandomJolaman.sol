// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

// import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/utils/Strings.sol";
// import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

// 클레이튼 토큰 import 
// contract '0xce146236fe4e48240cd8f7d22c38c07c7a6bab0b'

contract RandomJolaman is ERC721Enumerable, Ownable, AccessControl {
    using SafeMath for uint256;
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIdCounter;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");

    uint64 public mintingPrice = 2*10**18;
    uint private totalIncome; // 총 판매량

    uint constant public MAX_TOKEN_COUNT = 1000;
    uint constant public TOKEN_RANK_LENGTH = 4;
    uint constant public TOKEN_TYPE_LENGTH = 4;

    address public _owner;

    string public metadataURI; // metadata url public? or private?

    uint[] public AlreadyMint;  

    
    constructor(string memory _metadataURI) ERC721("Jolaman", "JL") {
        _owner = msg.sender;
        metadataURI = _metadataURI;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    // function _baseURI() internal pure override returns (string memory) {
    //     return "ipfs::/ipfs_link/";
    // }

    struct JolamanTokenData {
        uint jolamanTokenType;
    }

    // tokenId를 넣으면 그에맞는 rank, type 출력 매핑
    mapping(uint => JolamanTokenData) public mappedJolamanTokenData;
    mapping(address => bool) public isWhiteList;

    // uint[TOKEN_RANK_LENGTH][TOKEN_TYPE_LENGTH] public gemTokenCount; // 무슨용도인지?

    // ERC721에서 tokenURI함수를 기본적으로 제공 해 주나 이 프로젝트에서는 그 함수를 프로젝트 취지에 맞춰서 사용
    function tokenURI(uint _tokenId) override public view returns (string memory) {
        // String.toString() openzeppelin 형변환 라이브러리 사용
        string memory jolamanTokenType = Strings.toString(mappedJolamanTokenData[_tokenId].jolamanTokenType);

        // abi.encodePacked(arg) arg들을 하나로 합쳐주는 함수
        // https://gateway.pinata.cloud/ipfs/QmT4Hef2VNKxr7fuJqZQMKfEPkm5jCLLPKraNrFJeSpg1s
        // ex) https://gateway.pinata.cloud/ipfs/Qma7X5uQUmZDYWVmeJa7UKv2T89pRem5htGCa5o8p7hL3G/1/1.json
        return string(abi.encodePacked(metadataURI, '/', jolamanTokenType, '.json'));
    }

    function addWhiteList(address _toWhiteList) public onlyOwner{
        isWhiteList[_toWhiteList] = true;
    }

    //   payment는 msg.value 값을 넘겨줘야하므로 caver.js에서 보내기로함.
    function payment() public payable returns (bool) {
        require(checkBalance(), "check balance");
        require(checkVal(), "check price");
        (bool success,) = _owner.call{value: msg.value}(""); //owner에게 msg.sender가 msg.value만큼 송금
        // payable(_owner).transfer(value);
        require(success, "Failed to send money");
        // totalIncome = totalIncome.add(msg.value);
        _grantRole(MINTER_ROLE, msg.sender);
        return true;
    }

    function payandMint() public payable {
        bool paymentStatus = payment();
        if (paymentStatus) {
            safeMint(msg.sender);
        }
    }


    function safeMint(address to) public payable onlyRole(MINTER_ROLE) {
        require(MAX_TOKEN_COUNT > totalSupply(), "Nomore mintin is possible");
        require(mintingPrice <= msg.value, "Not enough klay");
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        JolamanTokenData memory randomTokenData = randomGenerator(msg.sender, tokenId);

        mappedJolamanTokenData[tokenId] = JolamanTokenData(randomTokenData.jolamanTokenType);

        // payable(owner()).transfer(msg.value);

        _mint(to, tokenId);
    }

       // 토큰아이디를 받아 그 NFT가 어떤 타입을 가지고있는지 반환하는 함수
    function getJolamanTokenType(uint _tokenId) public view returns(uint) {
        return mappedJolamanTokenData[_tokenId].jolamanTokenType;
    }

    // 랜덤 nft발행 함수
    function randomGenerator(address _msgSender, uint _tokenId) private returns (JolamanTokenData memory) {

        JolamanTokenData memory randomTokenData;
        randomTokenData.jolamanTokenType = 
                                uint(keccak256(abi.encodePacked(blockhash(block.timestamp), _msgSender, _tokenId))) % 1000;
        // tokenId 중복 체크
        // bool checkIncludes = true;
        // while (checkIncludes) {
        //     for (uint i = 0; i < AlreadyMint.length; i++) {
        //         if (AlreadyMint[i] == randomTokenData.jolamanTokenType) {
        //             randomTokenData.jolamanTokenType = 
        //                         uint(keccak256(abi.encodePacked(blockhash(block.timestamp), _msgSender, _tokenId))) % 1000;
        //         }
        //     }
        // }

        randomTokenData.jolamanTokenType = 
                                uint(keccak256(abi.encodePacked(blockhash(block.timestamp), _msgSender, _tokenId))) % 1000;
        

        AlreadyMint.push(randomTokenData.jolamanTokenType);

        return randomTokenData;

    }


    function getBalance() public view returns (uint256) {
        return msg.sender.balance;
    }

    function setMintingPrice(uint64 _price) public {
        mintingPrice = _price;
       
    }

  function checkBalance() private view returns (bool) {
      if (msg.sender.balance < msg.value) {
          return false;
      } else {
          return true;
      }
  }
    function checkVal() private view returns (bool) {
      if (mintingPrice != msg.value) {
          return false;
      } else {
          return true;
      }
    
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

