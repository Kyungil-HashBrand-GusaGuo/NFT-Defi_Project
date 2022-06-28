
import { useDispatch, useSelector } from "react-redux";

function GameOutcome({ wrongLetters, playable, playAgain , won, word}) {

  const dispatch = useDispatch()
  const {account} = useSelector(state => state.account)


  if (!playable && won === false) {      
    return (
      <div className="game-over">
        <h2>Game Over</h2>
        <p className="word-reveal">Correct word was : {word}</p>
        <button className="reset" onClick={() => playAgain()}>
          Reset
        </button>
      </div>
    );
  } else if (!playable && won === true) {    
    console.log(wrongLetters.length) 
    
    let wrongLetter = wrongLetters.length

    // const getReward = async() => {
    //   console.log("계정확인",account)
    //   console.log("틀린거확인",wrongLetter)
    //   const response = await api.post("/hangmangamereward", {account, wrongLetter});
    //   if(response.status) {
    //     console.log("오 잘됨")
    //   }
    // }
    //dispatch(gameModalAction.gameModalAct())

    return (
      <div className="you-won">
        <h2>That's correct !</h2>
        <h3>GAME CLEAR !</h3>
      </div>
    );
  } 
  else {
    return (
        <div>
          <p className="wrong-guesses">
            {" "}
            Wrong guesses: {wrongLetters.length}/6
          </p>
          <div className="wrong-letters">
            {wrongLetters.map((letter) => {
              return <span key={letter}>{letter}</span>;
            })}
          </div>
        </div>
    );
  }
}

export default GameOutcome;
