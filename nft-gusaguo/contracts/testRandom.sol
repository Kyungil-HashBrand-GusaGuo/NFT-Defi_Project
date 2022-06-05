// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;
 
import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
 
contract RandomTokenIdv1 is ERC721  {
 
    uint[5] public ids;
    uint private index;
 
    constructor() ERC721('RandomIdv1', 'RNDMv1') {}
 
    function mint(address _to) external {

            uint256 _random = uint256(keccak256(abi.encodePacked(index, msg.sender, block.timestamp, blockhash(block.number-1))));
            _safeMint(_to, _pickRandomUniqueId(_random));
        
    }
 
    function _pickRandomUniqueId(uint256 random) private returns (uint256 id) {
        uint len = ids.length - index++;
        require(len > 0, 'no ids left');
        uint randomIndex = random % len;
        id = ids[randomIndex] != 0 ? ids[randomIndex] : randomIndex;
        ids[randomIndex] = uint(ids[len - 1] == 0 ? len - 1 : ids[len - 1]);
        ids[len - 1] = 0;
    }
 
}