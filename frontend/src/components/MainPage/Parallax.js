import React,{ useEffect, useState} from 'react'
import item1 from "../../images/item1.webp";
import item2 from "../../images/item2.png";
import './Parallax.css';
// import './style.css'


const Parallax = () => {
    const [position, setPosition] = useState(0);

    function onScroll() {
      setPosition(window.scrollY);
    }
    useEffect(() => {
      window.addEventListener("scroll", onScroll);
      return () => {
        window.removeEventListener("scroll", onScroll);
      };
    }, []);
  
    return (
      <div className="parallaxContainer">
        <p
          className="desc"
          style={{
            transform: `translateX(${-position}px)`,
          }}
        >
          누구나 따라 그리기 쉬운 생김새와 웃기는 컨셉 덕분에 아이들에게 인기가 많아져서 원작인 플래시 애니 외에도 만화책과 모바일, 060 전화, 게임, 광고 등이 나왔으며 심지어 TV 애니메이션 시리즈로도 방송되었다. 
        </p>
        <p
          className="desc2"
          style={{
            transform: `translateX(${position}px)`,
          }}
        >
          평화롭던 화이트랜드에 강력한 총으로 무장한 이블맨이 정예부대를 이끌고 쳐들어왔다! <br/>
          정의의 용사 졸라맨! 이젠 더 이상 맨주먹으로 싸우지 않는다! <br/>
          모두 총알 장전하고 졸라맨과 함께 돌격 앞으로!
        </p>
        <p
          className="desc3"
          style={{
            opacity: (position - 700) / 50,
          }}
        >
          Duis aute irure dolordsfdsf
        </p>
        <p
          className="desc3"
          style={{
            opacity: (position - 1000) / 50,
          }}
        >
          Lorem ipsum dolor sit amet
        </p>
        <p
          className="desc3"
          style={{
            opacity: (position - 960) / 50,
          }}
        >
          Excepteur sint occaecat
        </p>
        <p
          className="desc3"
          style={{
            opacity: (position - 1090) / 50,
          }}
        >
          sunt in culpa qui officia deserunt
        </p>
        {/* <img
          src={item1}
          className="item"
          alt=""
          style={{
            transform: `translateY(${position / 2}px)`,
          }}
        />
        <img
          src={item2}
          className="item item_snow"
          alt=""
          style={{
            transform: `translateY(${position / 4}px)`,
          }}
        /> */}
      </div>
    );
}

export default Parallax