import React , { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../CardGame/GameModal.css"
import {HeadZol2} from "../../../../images/index"
import { useDispatch, useSelector } from 'react-redux'
import { blackjackGameAction } from '../../../../redux/actions/blackjackGameAction'

const BlackJackGameSetModal = ({account, totals, title, bet}) => {

    console.log("블랙잭모달계정", account)
    console.log("블랙잭토탈양", totals)
    console.log("블랙잭결과", title)

    //let total = totals.length
    const dispatch = useDispatch()
    const navigate = useNavigate()
    // const { clearBlackjackGame, blackjackRewardGZLT, blackjactRewardGP} = useSelector(state => state.blackjack)
    const [check, setCheck] = useState()
    const [point, setPoint] = useState()

    console.log(bet)

    const goToGameMainPage =() => {
        navigate('/gamemain')
    }

    const goToBlackJackGamePage = () => {
      window.location.reload()
    }

    const checkResult = (title, bet) => {
      switch(title) {
        case "Bust!" :
            return setCheck(bet * -1), setPoint(2)
            break;
        case "Dealer Win!" :
            return setCheck(bet * -1), setPoint(2)
            break;
        case "Tie!" :
            return setCheck(0), setPoint(3)
            break;
        case "You Win!" :
            return  setCheck(bet), setPoint(5)
            break;
        case "Blackjack!" :
            return  setCheck(bet), setPoint(5)
            break;
        default :
            return 
    }
    }

    useEffect(()=> {
      checkResult(title, bet)
      dispatch(blackjackGameAction.blackjackGameAct(title,bet,account))
    },[])

  return (
    <div className='overlay'>
    <div className='gameModalContainer'>
      <div className='gameModalInfoSection'>
        {/* { clearBlackjackGame ? 
          <>
          <h2 className='gameModalComMessage'>Game Clear!!!</h2>
          <h2 className='gameModalComMessage'>Get : {blackjackRewardGZLT} GZLT<img className='gameModalIco' src={headzol2}/> / {blackjactRewardGP} GP</h2>
          </>
          : <h2 className='gameModalComMessage'>Loading ...</h2>
        }   */}
        <h2 className='gameModalComMessage'>{title}</h2>
        <h2 className='gameModalComMessage'>Get : {check} GZLT<img className='gameModalIco' src={HeadZol2} /> / {point} GP</h2>
        <button className='gameModalEndButton' onClick={goToBlackJackGamePage}>Restart</button> 
        <button className='gameModalEndButton' onClick={goToGameMainPage}>Go to GamePage</button> 

      </div>
  </div>
</div>
  )
}

export default BlackJackGameSetModal