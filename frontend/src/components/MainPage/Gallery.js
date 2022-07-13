import React from "react";
import Slider from "react-slick";
import './Gallery.css'
import { white1, white2, white3, white4, white5, 
    white6, white7, white8, white9, white10, 
    white11, white12, white13, white14, white15,
    white16, white17, white18, white19, white20,} from '../../images/index'

const Gallery = () => {

    const array = [white1, white2, white3, white4, white5, white6, white7, white8, white9, white10
                , white11, white12, white13, white14, white15, white16, white17, white18, white19, white20];
    //console.log("white",array)

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        speed: 10000,
        autoplaySpeed: 0,
        cssEase: "linear",
        // rtl: true,   // 반대로 
        // arrows: true
      };



  return (
      <div className="sliderMainContainer">
        {/* <div className="sliderTitle">
            <span>ZOLAMANS NFT</span>
        </div> */}
        <div>
            <Slider {...settings}>
            {array.map((item, index)=> {
                return <div className="sildernoneContainer" key={index}>
                            <div className="silderImgContainer">
                                <img src={item}></img>
                            </div>
                        </div>
            })}
            </Slider>
        </div>
      </div>
  )
}

export default Gallery