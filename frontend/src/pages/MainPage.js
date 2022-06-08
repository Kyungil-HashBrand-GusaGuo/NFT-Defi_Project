import React from 'react'
import './MainPage.css';
import { MainTitle, Parallax, Partners, RoadMap, Story, TeamIntro} from '../components'

const MainPage = () => {
    
  return (
    <div className='mainpagecontainer'>
        <MainTitle/>
        <Story/>
        <RoadMap/>
        <TeamIntro/>
        <Partners/>
        <Parallax/>

    </div>
  )
}

export default MainPage