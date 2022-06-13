import React, { useEffect, useState } from 'react'
import axios from 'axios';

const SalePage = () => {

  const [array, setArray] = useState('')

  const callSellNft = async() => {
    const response = await axios.get("http://34.64.61.199:9495/block/getOnSaleJolaman");
    console.log("판매중NFT", response.data)
    console.log("NFT번호", response.data[0])
    console.log("NFT가격", response.data[1])
    setArray(response.data)

    // const arr1 = response.data[0];
    // const arr2 = response.data[1];
    // const obj = {...arr1};
    // const obj2 = {...arr2}
    // console.log("객체1",obj);
    // console.log("객체2",obj2);
    // // console.log(array)

    // const test = [ 'key', 'key', 'key' ]
    // const keys = ['price', 'price', 'price'];
    // // const values = ['injuk', 'ingnoh'];

    // const result1 = test.reduce((acc, curr, idx) => {
    //     return { ...acc, [curr]: arr1[idx]  };
    // }, new Object);
    // console.log("테스트객체1",result1);

    // const result2 = keys.reduce((acc, curr, idx) => {
    //     return { ...acc, [curr]: arr2[idx]  };
    // }, new Object);
    // console.log("테스트객체2",result2);

    // const newObj = {...obj, ...obj2}
    // console.log("최종", newObj)

    // const obj3 = Object.assign({}, arr1);
    // console.log("과연",obj3);

    // var years = [];
    // for (i= 2015;i<=2030;i=i+1)
    // {
    // years.push({operator : i})
    // }
  }
  console.log("여기배열",array)
  
  useEffect(()=>{
    callSellNft()
  },[])

  return (
    <div className='SalePageContainer'>
      <div>SalePage</div>
      <div>SalePage</div>
      <div>SalePage</div>
      <div>SalePage</div>
      <div>SalePage</div>
      <div> 여기 
      {
        array !== '' ? array[0].map((item) => 
            <p>{item}</p>
            ) 
        : null
      }
      {
        array !== '' ? array[1].map((item) => <p>{item}</p>) : null
      }
      </div>

      <div>SalePage</div>
      <div>SalePage</div>
    </div>
  )
}

export default SalePage