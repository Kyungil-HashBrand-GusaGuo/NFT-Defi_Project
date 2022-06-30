import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import "../CardGame/GameModal.css"
import headzol2 from '../../../images/headzol2.png'
import { useDispatch, useSelector } from 'react-redux'
import { hanmanGameAction } from '../../../redux/actions/hanmanGameAction'

const HangmanGameSetModal = ({account, wrongLetters}) => {

    console.log("행맨모달 계정", account)
    console.log("행맨모달 틀린갯수", wrongLetters)

    let wrongLetter = wrongLetters.length
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { clearHangmanGame, hangmanRewardGZLT, hangmanRewardGP } = useSelector(state => state.game)

    const goToGameMainPage = () => {
        navigate('/gamemain')
    }

    useEffect(() => {
      dispatch(hanmanGameAction.hanmanGameAct(account, wrongLetter))
    },[])

  return (
    <div className='overlay'>
        <div className='gameModalContainer'>
          <div className='gameModalInfoSection'>
            { clearHangmanGame ? 
              <>
              <h2 className='gameModalComMessage'>Game Clear!!!</h2>
              <h2 className='gameModalComMessage'>Get : {hangmanRewardGZLT} GZLT<img className='gameModalIco' src={headzol2}/> / {hangmanRewardGP} GP</h2>
              <button className='gameModalEndButton' onClick={goToGameMainPage}>Go to GamePage</button> 
              </>
              : <h2 className='gameModalComMessage'>Loading ...</h2>
            }  
          </div>
      </div>
    </div>
  )
}

export default HangmanGameSetModal