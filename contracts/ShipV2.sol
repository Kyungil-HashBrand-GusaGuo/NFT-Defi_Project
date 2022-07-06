// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

contract Ship2 is Initializable {
    string public name;
    uint256 public fuel;

    function initialize(string memory _name, uint256 _fuel) external initializer {
        name = _name;
        fuel = _fuel;
    }

    function move() public {
        require(fuel > 0, "No fuel");
        fuel--;
    }

    function refuel() public {
        fuel++;
    }
}