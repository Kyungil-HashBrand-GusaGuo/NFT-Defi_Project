// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./RandomJolaman.sol";
import "./SetData.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/utils/ERC721Holder.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";

contract SaleJolaman is ERC721Holder {
    // RandomJolaman public randomJolaman;
    IERC721 public randomJolaman;
    SetData public setdata;

    constructor (address _setdata, IERC721 _randomJolaman) {
        setdata = SetData(_setdata);
        randomJolaman = _randomJolaman;
    }



    // 졸라맨 타입 입력 판매 중 여부 확인 매핑
    mapping(uint => bool) public SellingJol;
    mapping(uint => uint) public sellingJolamanTypeToPrice;    

    // 판매중인 졸라맨 타입, 가격 배열
    
    uint[] public onSaleJolamanType;
    uint[] public onSaleJolamanPrice;

    // 판매 등록 함수
    function SellJolamanToken(uint _JolamanType, uint _price) public {
        
    address SelltokenOwner = setdata.getJolamanTokenTypeOfOnwer(_JolamanType);

    require(SelltokenOwner == msg.sender, "Caller is not TokenOwner.");
    require(_price > 0, "Price is greater than 0.");
    require(SellingJol[_JolamanType] == false, "This token is already on sale.");
    randomJolaman.approve(address(this), setdata.gettypeToId(_JolamanType));

    sellingJolamanTypeToPrice[_JolamanType] = _price;
    SellingJol[_JolamanType] = true;
    onSaleJolamanType.push(_JolamanType);
    onSaleJolamanPrice.push(_price);
    }

    //판매 등록 취소 함수

    function cancleSellJolamnaToken(uint _JolamanType) public {
        address SelltokenOwner = setdata.getJolamanTokenTypeOfOnwer(_JolamanType);

        require(SelltokenOwner == msg.sender, "Caller is not TokenOwner.");
        require(SellingJol[_JolamanType] == true, "This token not Sale");
        SellingJol[_JolamanType] = true;
        popOnSaleToken(_JolamanType);
    }

    // 구매 함수

    function buyJolamanToken(uint _JolamanType) public payable {
        address SelltokenOwner = setdata.getJolamanTokenTypeOfOnwer(_JolamanType);

        require(SelltokenOwner != msg.sender, "Caller is token owner.");
        require(SellingJol[_JolamanType] == true, "This token not sale.");
        require(sellingJolamanTypeToPrice[_JolamanType] == msg.value, "Caller sent lower than price.");
        
        payable(SelltokenOwner).transfer(msg.value);
        randomJolaman.safeTransferFrom(SelltokenOwner, msg.sender, setdata.gettypeToId(_JolamanType));

        SellingJol[_JolamanType] = false;
        sellingJolamanTypeToPrice[_JolamanType] = 0;
        setdata.setJolamanTokenTypeOfOwner(_JolamanType, msg.sender);
        setdata.SellOwnedToken(SelltokenOwner, _JolamanType);
        setdata.setTokenOwner(setdata.gettypeToId(_JolamanType), msg.sender);
        setdata.setTotalOwnedTokens(msg.sender, _JolamanType);

        popOnSaleToken(_JolamanType);
    }

    // 판매시 판매중인 토큰, 가격 배열 제거
    function popOnSaleToken(uint _JolamanType) private {
        for(uint i = 0; i < onSaleJolamanType.length; i++) {
            if(onSaleJolamanType[i] == _JolamanType) {
                onSaleJolamanType[i] = onSaleJolamanType[onSaleJolamanType.length - 1];
                onSaleJolamanPrice[i] = onSaleJolamanPrice[onSaleJolamanPrice.length - 1];
                onSaleJolamanType.pop();
                onSaleJolamanPrice.pop();
            }
        }
    }



    // 판매중인 토큰 배열 조회 함수

    function getOnSaleJolamanTypeAndPrice() public view returns(uint[] memory, uint[] memory) {
        return (onSaleJolamanType, onSaleJolamanPrice);
    }

}