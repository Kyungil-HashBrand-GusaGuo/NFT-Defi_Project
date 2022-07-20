import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { timerAction } from '../../redux/actions/timerAction';
import { timerGetAction } from '../../redux/actions/timerGetAction';
import { timerPostAction } from '../../redux/actions/timerPostAction';
import Swal from 'sweetalert2'

const Timer = () => {

    const dispatch = useDispatch()
    let deadline = useRef(); 
    let timer = useRef(null); 
    
    let deadlineDate = new Date('July 29, 2022 12:00:00').getTime();
    let now = new Date().getTime();
    let t = deadlineDate - now;
    let day = Math.floor((t % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24));
    let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((t % (1000 * 60)) / 1000);
    
    const [state, setState] = useState({ day, hours, minutes, seconds});
    const { gamePointRank, airdropReward, airdropSuccess } = useSelector(state => state.game)
    const { account, adminAccount } = useSelector(state => state.account)


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
      dispatch(timerGetAction.timerGetAct())
      dispatch(timerPostAction.timerPostAct())
      // console.log(t)
    }

    useEffect(() => {
      if(gamePointRank.length && airdropReward.length){
        deadline = new Date('July 29, 2022 12:00:00').getTime();
        timer.current = setInterval(count, 1000);
      }     
    },[gamePointRank.length , airdropReward.length])

    useEffect(() => {
      if(airdropSuccess){
        // alert("NFT AirDrop이 완료되었습니다!", window.location.reload())
        Swal.fire({
          title: 'Success!',
          text: 'NFT AirDrop이 완료되었습니다!',
          icon: 'success',
          confirmButtonText: 'OK'
      }).then(function(){
        window.location.reload();
      })
      }
    },[airdropSuccess])

  return (
    <div>
        <span>COUNT DOWN &nbsp;: </span>&nbsp;
        <span>
            {state.day < 10 ? `0${state.day}` : state.day}D
            &nbsp;{state.hours < 10 ? `0${state.hours}` : state.hours}H 
            &nbsp;{state.minutes < 10 ? `0${state.minutes}` : state.minutes}M
            &nbsp;{state.seconds < 10 ? `0${state.seconds}` : state.seconds}S
        </span>
        { adminAccount === account ? <button onClick={()=>endTimer()}>AirDrop</button> : null}                    
    </div>
  )
}

export default Timer