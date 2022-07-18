// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts/access/AccessControl.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract JolamanToken is Initializable, ERC20Upgradeable {
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

