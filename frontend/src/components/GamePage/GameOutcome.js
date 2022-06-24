import { useSelector } from "react-redux";
import api from "../../redux/api";


function GameOutcome({ wrongLetters, playable, playAgain , won, word}) {

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

    const getReward = async() => {
      console.log("계정확인",account)
      console.log("틀린거확인",wrongLetter)
      const response = await api.post("/hangmangamereward", {account, wrongLetter});
      if(response.status) {
        console.log("오 잘됨")
      }
    }

    return (
      <div className="you-won">
        <h2>That's correct !</h2>
        <button className="reset" onClick={() => getReward()}>
          Get Reward
        </button>
      </div>
    );
  } 
  else {
    return (
      <>
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
      </>
    );
  }
}

export default GameOutcome;
