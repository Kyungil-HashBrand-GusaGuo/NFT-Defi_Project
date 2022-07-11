import React , { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../CardGame/GameModal.css"
import headzol2 from '../../../../images/headzol2.png'
import { useDispatch, useSelector } from 'react-redux'
import { blackjackGameAction }  from '../../../../redux/actions/blackjackGameAction'

const BlackJackGameSetModal = ({account, totals, title, bet}) => {

    console.log("블랙잭모달계정", account)
    console.log("블랙잭토탈양", totals)
    console.log("블랙잭결과", title)
    console.log("배팅금액", bet)

    let betPrice = bet

    //let total = totals.length
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { winBlackJackGame, loseBlackJackGame } = useSelector(state => state.blackjacktest)
    const [check, setCheck] = useState()

    console.log(bet)

    const goToGameMainPage =() => {
        navigate('/gamemain')
    }

    const checkResult = (title, bet) => {

      switch(title) {
        case "Bust!" :
            return setCheck(bet * -1)
            break;
        case "Dealer Win!" :
            return setCheck(bet * -1)
            break;
        case "Tie!" :
            return setCheck(0)
            break;
        case "You Win!" :
            return  setCheck(bet * 2)
            break;
        case "Blackjack!" :
            return  setCheck(bet * 2)
            break;
        default :
            return 
    }
    }

    useEffect(()=> {
        checkResult(title, bet)
        dispatch(blackjackGameAction.blackjackGameAct(title, betPrice))
    },[])

  return (
    <div className='overlay'>
    <div className='gameModalContainer'>
    {winBlackJackGame ?
      <div className='gameModalInfoSection'>
        {/* { clearBlackjackGame ? 
          <>
          <h2 className='gameModalComMessage'>Game Clear!!!</h2>
          <h2 className='gameModalComMessage'>Get : {blackjackRewardGZLT} GZLT<img className='gameModalIco' src={headzol2}/> / {blackjactRewardGP} GP</h2>
          <button className='gameModalEndButton' onClick={goToGameMainPage}>Go to GamePage</button> 
          </>
          : <h2 className='gameModalComMessage'>Loading ...</h2>
        }   */}
        <h2 className='gameModalComMessage'>{title}</h2>
        <h2 className='gameModalComMessage'>{check}</h2>
      </div>
      : null
  }
  </div>
</div>
  )
}

export default BlackJackGameSetModal