// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./GST_Token.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "./RandomJolaman.sol";
import "./setdata.sol";


contract Game is Initializable, GameJolamanToken, OwnableUpgradeable, ERC721Holder {

    RandomJolaman public randomJolaman;
    setData public setdata;
    address public _owner;
    bool private initialized;

    function initializeV(RandomJolaman _randomJolaman, setData _setdata) public initializer {
        initialized = true;
        _owner = msg.sender;
        randomJolaman = RandomJolaman(_randomJolaman);
        setdata = setData(_setdata);
        OwnableUpgradeable.__Ownable_init();
    }

    uint constant GZLTERC20 = 10 ** 18;
    uint constant valuePortion = 10 ** 17;

    // 카드 뒤집기 GZLT 보상 함수
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

    // 행맨 게임 GZLT 보상 함수
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

    // 블랙잭 게임이겼을시 보상 함수
    function blackJackWin(address _to, uint _betPrice) public onlyOwner {
        _mint(_to, GZLTERC20 * _betPrice);
    }
    // 블랙잭 게임 패배시 패널티 함수
    function blackJackLose(address _to, uint _betPrice) public onlyOwner {
        _burn(_to, GZLTERC20 * _betPrice);
    }

    // GameContract 입금 함수
    function DepositToContract() public payable onlyOwner {

    }
    // GameContract 잔고 확인 함수
    function CheckContractBalance() public view returns(uint) {
        return address(this).balance;
    }

    // GZLT토큰을 KLAYTN 으로 swap 함수
    function TokenToKlay(uint amount) public {
        require(balanceOf(msg.sender) >= amount * GZLTERC20, "Not enough GZLT");
        require(address(this).balance >= amount * valuePortion, "Not enough Contract Balance");
        payable(msg.sender).transfer(amount * valuePortion);
        _burn(msg.sender, amount * GZLTERC20);
    }

    // 게임 RankSystem 순위 받아서 nft 보상 지급 함수
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
        setdata.setDeleteExceptSellOwnedJolamanType(_owner, _JolamanType);
        setdata.setDeleteExceptSellOwnedJolamanType(_owner, _JolamanType2);
        setdata.setDeleteExceptSellOwnedJolamanType(_owner, _JolamanType3);
    }  
}