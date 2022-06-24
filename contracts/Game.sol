// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./GST_Token.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Game is GameJolamanToken, Ownable {
    uint constant GZLTERC20 = 10 ** 18;
    uint constant valuePortion = 10 ** 17;

    function MemoryGameReward(address _to, uint result) public onlyOwner{
        if (result == 1) {
            _mint(_to, GZLTERC20);
        }
        else if (result == 3) {
            _mint(_to, GZLTERC20 * 3);
        }
        else if (result == 5) {
            _mint(_to, GZLTERC20 * 5);
        }
    }

    function HangmanGameReward(address _to, uint wrongLetters) public onlyOwner {
        if (wrongLetters == 0) {
            _mint(_to, GZLTERC20 * 6);
        }
        else if(wrongLetters == 1) {
            _mint(_to, GZLTERC20 * 5);
        }
        else if(wrongLetters == 2) {
            _mint(_to, GZLTERC20 * 4);
        }
        else if(wrongLetters == 3) {
            _mint(_to, GZLTERC20 * 3);
        }
        else if(wrongLetters == 2) {
            _mint(_to, GZLTERC20 * 2);
        }
        else if(wrongLetters == 1) {
            _mint(_to, GZLTERC20 * 1);
        }

    }

    function DepositToContract() public payable onlyOwner {

    }

    function CheckContractBalance() public view returns(uint) {
        return address(this).balance;
    }

    function TokenToKlay(uint amount) public {
        require(balanceOf(msg.sender) >= amount * GZLTERC20, "Not enough GZLT");
        require(address(this).balance >= amount * valuePortion, "Not enough Contract Balance");
        payable(msg.sender).transfer(amount * valuePortion);
        _grantRole(BURNER_ROLE, msg.sender);
        _burn(msg.sender, amount * GZLTERC20);
        _revokeRole(BURNER_ROLE, msg.sender);
    }

    
}