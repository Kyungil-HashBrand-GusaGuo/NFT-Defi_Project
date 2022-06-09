import React from 'react'
import './MainPage.css';
import { Gallery, MainTitle, Partners, RoadMap, Story, TeamIntro} from '../components'

const MainPage = () => {
    
  return (
    <div className='mainpagecontainer'>
        <MainTitle/>
        <Gallery/>
        {/* <Story/> */}
        <RoadMap/>
        <TeamIntro/>
        <Partners/>
    </div>
  )
}

export default MainPage