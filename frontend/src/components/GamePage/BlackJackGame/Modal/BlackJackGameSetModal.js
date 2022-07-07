import React , { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "../../CardGame/GameModal.css"
import headzol2 from '../../../../images/headzol2.png'
import { useDispatch, useSelector } from 'react-redux'
import { blackjackGameAction } from '../../../../redux/actions/blackjackGameAction'

const BlackJackGameSetModal = ({account, totals, title, bet}) => {

    console.log("블랙잭모달계정", account)
    console.log("블랙잭토탈양", totals)
    console.log("블랙잭결과", title)

    //let total = totals.length
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { clearBlackjackGame, blackjackRewardGZLT, blackjactRewardGP} = useSelector(state => state.blackjack)
    const [check, setCheck] = useState()

    console.log(bet)

    const goToGameMainPage =() => {
        navigate('/gamemain')
    }

    const test = (title, bet) => {
      switch(title) {
        case "Bust!" :
            return setCheck(bet * -1)

        case "Dealer Win!" :
            return setCheck(bet * -1)

        case "Tie!" :
            return setCheck(0)

        case "You Win!" :
            return  setCheck(bet * 2)

        case "Blackjack!" :
            return  setCheck(bet * 2)

        default :
            return 
    }
    }

    useEffect(()=> {
        //dispatch(blackjackGameAction.blackjackGameAct(account,total))
        test(title, bet)
    },[])

  return (
    <div className='overlay'>
    <div className='gameModalContainer'>
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
  </div>
</div>
  )
}

export default BlackJackGameSetModal