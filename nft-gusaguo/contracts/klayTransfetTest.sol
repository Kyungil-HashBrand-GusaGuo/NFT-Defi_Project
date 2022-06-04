// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// contract DonateContract {

//   uint totalIncome; // the amount of donations
//   address payable owner; // contract creator's address
//   constructor() {
//     owner = payable(msg.sender); // setting the contract creator
//   }

//   function checkBalance() internal returns (bool) {
//       if (msg.sender.balance > msg.value) {
//           return true;
//       } else {
//           return false;
//       }
//   }
//   function pay() public payable {
//     require(checkBalance(), "balance not enough");
//     (bool success,) = owner.call{value: msg.value}("");
//     require(success, "Failed to send money");
//     totalIncome += msg.value;
//   }

//   function getTotalIncome() view public returns(uint) {
//     return totalIncome;
//   }
//   function getBalance(address _address) view public returns(uint) {
//     return _address.balance;
//   }
// }


