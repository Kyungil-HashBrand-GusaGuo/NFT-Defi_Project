import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { timerAction } from '../../redux/actions/timerAction';

const Timer = () => {

    const dispatch = useDispatch()
    let deadline = useRef(); 
    let timer = useRef(null); 
    
    let deadlineDate = new Date('July 8, 2022 19:19:00').getTime();
    let now = new Date().getTime();
    let t = deadlineDate - now;
    let day = Math.floor((t % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    
    const [state, setState] = useState({ day, hours, minutes, seconds});
    const { gamePointRank, airdropReward } = useSelector(state => state.game)

    const count = () => {

      now = new Date().getTime();
      t = deadline - now;
      day = Math.floor((t % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((t % (1000 * 60)) / 1000);

      setState({ day, hours, minutes, seconds });
      // console.log("찍히나", gamePointRank)
      // console.log("찍히나2", airdropReward)

      if (t < -700 && t > -1500) {
        endTimer()    
      } 
    }

    const endTimer = () => {
      clearInterval(timer.current);
      setState({ day: 0, hours: 0, minutes: 0, seconds: 0 });
      dispatch(timerAction.timerAct(gamePointRank, airdropReward))
      console.log(t)
    }

    useEffect(() => {
      if(gamePointRank.length && airdropReward.length){
        deadline = new Date('July 8, 2022 19:19:00').getTime();
        timer.current = setInterval(count, 1000);
      }     
    },[gamePointRank.length , airdropReward.length])

  return (
    <div>
        <span>COUNT DOWN &nbsp;: </span>&nbsp;
        <span>
            {state.day < 10 ? `0${state.day}` : state.day}D
            &nbsp;{state.hours < 10 ? `0${state.hours}` : state.hours}H 
            &nbsp;{state.minutes < 10 ? `0${state.minutes}` : state.minutes}M
            &nbsp;{state.seconds < 10 ? `0${state.seconds}` : state.seconds}S
        </span>
        <button onClick={()=>endTimer()}>AirDrop</button>
    </div>
  )
}

export default Timer