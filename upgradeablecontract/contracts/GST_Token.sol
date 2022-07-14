// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract JolamanToken is Initializable, ERC20Upgradeable {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    uint public constant ERC20Token = 10 ** 18;
    bool private initialized;

    function initialize() public initializer {
        __ERC20_init("Zolaman Token", "ZLT");
        initialized = true; 
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }

    function burn(address to, uint amount) public {
        _burn(to, amount);
    }
}

contract GameJolamanToken is Initializable, ERC20Upgradeable {
    bytes32 public constant MINTER_ROLE = keccak256("MINTER_ROLE");
    bytes32 public constant BURNER_ROLE = keccak256("BURNER_ROLE");
    bool private initialized;

        function initialize() public initializer {
        __ERC20_init("Game Zolaman Token", "GZLT");
        initialized = true;  
    }


    function mint(address to, uint amount) public {
        _mint(to, amount);
    }

    function burn(address to, uint amount) public {
        _burn(to, amount);
    }
}

