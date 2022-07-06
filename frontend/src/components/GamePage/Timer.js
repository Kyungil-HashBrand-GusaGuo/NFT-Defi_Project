import React, { useState, useEffect, useRef } from 'react'
import { useDispatch } from 'react-redux';
import { timerAction } from '../../redux/actions/timerAction';

const Timer = () => {

    const dispatch = useDispatch()
    let deadline = useRef(); 
    let timer = useRef(null); 
    
    let deadlineDate = new Date('July 14, 2022 16:43:30').getTime();
    let now = new Date().getTime();
    let t = deadlineDate - now;
    let day = Math.floor((t % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    
    const [state, setState] = useState({ day, hours, minutes, seconds});

    const count = () => {
      now = new Date().getTime();
      t = deadline - now;
      day = Math.floor((t % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
      hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
      seconds = Math.floor((t % (1000 * 60)) / 1000);

      setState({ day, hours, minutes, seconds });
      console.log(t)

      if (t < -700 && t > -1500) {
        clearInterval(timer);
        setState({ day: 0, hours: 0, minutes: 0, seconds: 0 });
        console.log("t", t)
        dispatch(timerAction.timerAct())
      } 
    }



    useEffect(() => {
      deadline = new Date('July 14, 2022 16:43:30').getTime();
      timer.current = setInterval(count, 1000);  
    },[])

  return (
    <div>
        <span>민팅 까지 남은 시간</span><br />

        <span>
            {state.day < 10 ? `0${state.day}` : state.day}
            &nbsp;{state.hours < 10 ? `0${state.hours}` : state.hours}h 
            &nbsp;{state.minutes < 10 ? `0${state.minutes}` : state.minutes}m
            &nbsp;{state.seconds < 10 ? `0${state.seconds}` : state.seconds}s
        </span>
    </div>
  )
}

export default Timer