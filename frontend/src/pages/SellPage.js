import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { test } from '../redux/actions/test';

const SellPage = () => {

    const dispatch = useDispatch();
    let {edition} = useParams()
    console.log(edition)
    const { account } = useSelector(state => state.account)
    console.log(account)

    const selling = () => {
        dispatch(test.testAction(edition, account))
        // 모달창으로 가고, 모달창에서 이런것들을 줘야겠네. 아 이거를 props로 넘겨줘야겠다
        // 모달창에서 useEffect 써서 바로 함수 실행될 수 있도록 
        // 오버레이 처리해주고 
    }

  return (
    <>
    <div>SellPage</div>
    <div>SellPage</div>
    <div>SellPage</div>
    <div>SellPage</div>
    <div>SellPage</div>
    <div>SellPage</div>
    <div>SellPage</div>
    <div>SellPage{account}</div>
    <div>SellPage{edition}</div>
    <div>SellPage{edition}</div>
    <button onClick={selling}>Sell 사실 이제 이거 눌렀을떄 일단 모달창으로 가고, 모달에서 처리해야함</button>
    </>
  )
}

export default SellPage