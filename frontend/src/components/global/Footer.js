import React from 'react'
import './Footer.css'
import { SiNotion } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { SiTrello } from "react-icons/si";

const Footer = () => {
  return (
    <div className='Footer'>
            <div className='leftSide'>
                <a href='https://secret-chimpanzee-c2e.notion.site/2d657962bcea415ea822b4ed4e22703d?v=2823d500f2804e2eab5f920b3129663c'><SiNotion color='white' size={30}/></a>
                <a href='https://github.com/Kyungil-HashBrand-GusaGuo'><SiGithub color='white' size={30}/></a>
                <a href='https://discord.gg/m6UYV5n7'><SiDiscord color='white' size={30}/></a>
                <a href='https://trello.com/b/8JCDfqPS/kyungilhashbrand구사구오'><SiTrello color='white' size={30}/></a>
            </div>
            <div className='rightSide'>
                <b>@Zolamannft is Proudly Owned by GusaGuo</b>
            </div>
        </div>
  )
}

export default Footer