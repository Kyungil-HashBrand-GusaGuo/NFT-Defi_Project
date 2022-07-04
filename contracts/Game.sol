// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./GST_Token.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "./RandomJolaman.sol";

contract Game is GameJolamanToken, Ownable, ERC721Holder {

    IERC721 public randomJolaman;
    SetData public setdata;
    address public _owner;

    constructor (address _setdata, IERC721 _randomJolaman) {
        setdata = SetData(_setdata);
        randomJolaman = _randomJolaman;
        _owner = msg.sender;
    }

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
        else if(wrongLetters == 4) {
            _mint(_to, GZLTERC20 * 2);
        }
        else if(wrongLetters == 5) {
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

    function airDrop(address account1, address account2, address account3, uint _JolamanType, uint _JolamanType2, uint _JolamanType3) public {

        require(_owner == msg.sender, "only Contract Owner can call this Function");

        require(setdata.getJolamanTokenTypeOfOnwer(_JolamanType) == _owner, "This NFT is Not Contract Owner NFT");    
        require(setdata.getJolamanTokenTypeOfOnwer(_JolamanType2) == _owner, "This NFT is Not Contract Owner NFT");    
        require(setdata.getJolamanTokenTypeOfOnwer(_JolamanType3) == _owner, "This NFT is Not Contract Owner NFT");    

        require(setdata.getSellingJolTypeToBool(_JolamanType) == false, "Selling NFT Not available");
        require(setdata.getSellingJolTypeToBool(_JolamanType2) == false, "Selling NFT Not available");
        require(setdata.getSellingJolTypeToBool(_JolamanType3) == false, "Selling NFT Not available");

        require(setdata.getStakedJolamanType(_JolamanType3) == false, "Selling NFT Not available");
        require(setdata.getStakedJolamanType(_JolamanType3) == false, "Selling NFT Not available");
        require(setdata.getStakedJolamanType(_JolamanType3) == false, "Selling NFT Not available");

        randomJolaman.safeTransferFrom(_owner, account1, setdata.gettypeToId(_JolamanType));
        randomJolaman.safeTransferFrom(_owner, account2, setdata.gettypeToId(_JolamanType2));
        randomJolaman.safeTransferFrom(_owner, account3, setdata.gettypeToId(_JolamanType3));
        setdata.setJolamanTokenTypeOfOwner(_JolamanType, account1);
        setdata.setJolamanTokenTypeOfOwner(_JolamanType2, account2);
        setdata.setJolamanTokenTypeOfOwner(_JolamanType3, account3);
        setdata.SellOwnedToken(_owner, _JolamanType);
        setdata.SellOwnedToken(_owner, _JolamanType2);
        setdata.SellOwnedToken(_owner, _JolamanType3);
        setdata.setTokenOwner(setdata.gettypeToId(_JolamanType), account1);
        setdata.setTokenOwner(setdata.gettypeToId(_JolamanType2), account2);
        setdata.setTokenOwner(setdata.gettypeToId(_JolamanType3), account3);
        setdata.setTotalOwnedTokens(account1, _JolamanType);
        setdata.setTotalOwnedTokens(account2, _JolamanType2);
        setdata.setTotalOwnedTokens(account3, _JolamanType3);
        setdata.setExceptSellOwnedJolamanType(account1, _JolamanType);
        setdata.setExceptSellOwnedJolamanType(account2, _JolamanType2);
        setdata.setExceptSellOwnedJolamanType(account3, _JolamanType3);
    }  
}