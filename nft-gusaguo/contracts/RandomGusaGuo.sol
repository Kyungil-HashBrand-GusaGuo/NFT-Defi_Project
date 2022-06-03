// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Burnable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

// 클레이튼 토큰 import 
// contract '0xce146236fe4e48240cd8f7d22c38c07c7a6bab0b'

contract RandomJolaman is ERC721, ERC721Burnable, AccessControl {
    using SafeMath for uint256;
    uint64 mintingPrice = 10**18;
    using Counters for Counters.Counter;

    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    Counters.Counter private _tokenIdCounter;
    address public owner;

    uint totalIncome; // the amount of donations
    
    constructor() ERC721("Jolaman", "JL") {
        owner = msg.sender;
        _grantRole(DEFAULT_ADMIN_ROLE, msg.sender);
        _grantRole(MINTER_ROLE, msg.sender);
    }

    function _baseURI() internal pure override returns (string memory) {
        return "ipfs::/ipfs_link/";
    }

    function safeMint(address to) public onlyRole(MINTER_ROLE) {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
    }

    // The following functions are overrides required by Solidity.

    function supportsInterface(bytes4 interfaceId)
        public
        view
        override(ERC721, AccessControl)
        returns (bool)
    {
        return super.supportsInterface(interfaceId);
    }

    function getBalance() public view returns (uint256) {
        return msg.sender.balance;
    }
    function sendingTest() public payable {
        // _safeTransfer(payable(msg.sender), owner, mintingPrice);
    }
    function setMintingPrice(uint64 _price) public {
        mintingPrice = _price;
    }

  function checkBalance() internal returns (bool) {
      if (msg.sender.balance > msg.value) {
          return true;
      } else {
          return false;
      }
  }
//   payment는 msg.value 값을 넘겨줘야하므로 caver.js에서 보내기로함.
//   function pay() public payable {
//     require(checkBalance(), "balance not enough");
//     (bool success,) = owner.call{value: msg.value}("");
//     require(success, "Failed to send money");
//     totalIncome = totalIncome.add(msg.value);
//   }
}