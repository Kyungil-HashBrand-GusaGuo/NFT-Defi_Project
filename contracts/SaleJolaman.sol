// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./RandomJolaman.sol";

contract SaleJolaman {
    RandomJolaman public randomJolaman;

    constructor (address _randomJolaman) {
        randomJolaman = RandomJolaman(_randomJolaman);
    }

    // 졸라맨 타입 입력 판매 중 여부 확인 매핑
    mapping(uint => bool) public SellingJol;
    mapping(uint => uint) public sellingJolamanTypeToPrice;    

    // 판매중인 졸라맨 타입, 가격 배열
    
    uint[] public onSaleJolamanType;
    uint[] public onSaleJolamanPrice;

    // 판매 등록 함수
    function SellJolamanToken(uint _JolamanType, uint _price) public {
    address tokenOwner = randomJolaman.getjolamanTokenTypeOfOwner(_JolamanType);

    require(tokenOwner == msg.sender, "Caller is not TokenOwner.");
    require(_price > 0, "Price is greater than 0.");
    require(SellingJol[_JolamanType] == false, "This token is already on sale.");
 

    sellingJolamanTypeToPrice[_JolamanType] = _price;
    SellingJol[_JolamanType] = true;
    onSaleJolamanType.push(_JolamanType);
    onSaleJolamanPrice.push(_price);
    }

    // 구매 함수

    function buyJolamanToken(uint _JolamanType) public payable {
        address tokenOwner = randomJolaman.getjolamanTokenTypeOfOwner(_JolamanType);

        require(tokenOwner != msg.sender, "Caller is token owner.");
        require(SellingJol[_JolamanType] == true, "This token not sale.");
        require(sellingJolamanTypeToPrice[_JolamanType] == msg.value, "Caller sent lower than price.");
        require(randomJolaman.isApprovedForAll(tokenOwner, msg.sender), "token onwer did not approve token.");

        payable(tokenOwner).transfer(msg.value);
        randomJolaman.safeTransferFrom(tokenOwner, msg.sender, 1);

        SellingJol[_JolamanType] == false;
        sellingJolamanTypeToPrice[_JolamanType] = 0;

        popOnSaleToken(_JolamanType);
        popOnSalePrice(_JolamanType);
    }

    // 판매중인 토큰 배열 제거
    function popOnSaleToken(uint _JolamanType) private {
        for(uint i = 0; i < onSaleJolamanType.length; i++) {
            if(onSaleJolamanType[i] == _JolamanType) {
                onSaleJolamanType[i] = onSaleJolamanType[onSaleJolamanType.length - 1];
                onSaleJolamanType.pop();
            }
        }
    }

    // 판매중인 토큰 가격 제거    
    function popOnSalePrice(uint _JolamanType) private {
        for(uint i = 0; i < onSaleJolamanType.length; i++) {
            if(onSaleJolamanPrice[i] == _JolamanType) {
                onSaleJolamanPrice[i] = onSaleJolamanPrice[onSaleJolamanPrice.length - 1];
                onSaleJolamanPrice.pop();
            }
        }
    }

}