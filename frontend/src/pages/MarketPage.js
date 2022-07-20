import React, { useEffect, useState } from "react";
import "./MarketPage.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { marketAction } from "../redux/actions/marketAction";
import { mypageAction } from "../redux/actions/mypageAction";

const MarketPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { account } = useSelector((state) => state.account);
  const { mymintEditionData } = useSelector((state) => state.mintdata);
  const { sellingAllNftData } = useSelector((state) => state.transactionNFT);

  const [showPrice, setShowPrice] = useState(""); // item.price
  const [showId, setShowId] = useState(""); // item.id
  console.log("나의 NFT", mymintEditionData);
  // console.log("나의 NFT 타입",typeof(mymintdata[0].data.edition))
  // console.log("판매중 NFT",sellingAllNftData)
  // console.log("판매중 NFT 타입",typeof(sellingAllNftData[0].id))

  const moveBuyPage = (id) => {
    navigate(`/marketpage/${id}`);
  };

  const showNft = (price, id) => {
    setShowPrice(price);
    setShowId(id);
  };

  const revmymintdata = [...sellingAllNftData].reverse();

  useEffect(() => {
    let top =
      document.querySelector(".leftTop").getBoundingClientRect().top + window.pageYOffset; /* 페이지를 보고있는 곳에 대한 view 위치  */
      window.onscroll = (e) => {
      if (top - 200 < window.scrollY) {
        document.querySelector(".leftTop").classList.add("is-active");
      } else {
        document.querySelector(".leftTop").classList.remove("is-active");
      }
    };
  }, []);

  useEffect(() => {
    dispatch(marketAction.marketAct());
    dispatch(mypageAction.mypageAct(account));
  }, [account]);

  return (
    <>
      <div className="mainMarketContainer">
        <div className="leftMarketContainer">
          <div className="leftTop">
            <div className="leftMarketSection">
              <div
                className="leftMarketNftCardImg"
                style={{
                  backgroundImage:
                    "url(https://sean95.s3.ap-northeast-2.amazonaws.com/raw/Zolaman/" +
                    `${showId}` +
                    ".png)",
                }}
              ></div>
              <div className="leftMarketTxtContainer">
                <div className="leftMarketTitle">
                  <span className="leftMarketCardTxt1">Create By </span>
                  <span className="leftMarketCardTxt2"> GusaGuO</span>
                </div>
                {showId > 9999 ? (
                  <div className="leftMarketCardName">
                    <span>WhiteList Zola Man #{showId - 9999}</span>
                  </div>
                ) : (
                  <div className="leftMarketCardName">
                    <span>Zola Man #{showId}</span>
                  </div>
                )}
                <div className="leftMarketTestSecion">
                  <div className="leftMarketCardPrice">
                    <span>Price : {showPrice}</span>
                  </div>
                  <div className="leftMarketcolhr"></div>
                  <div className="leftMarketCardNum">No : {showId} </div>
                </div>
              </div>
              <div className="leftMarketBtn">
                {mymintEditionData.includes(showId) ? (
                  <button className="learn-more">MINE</button>
                ) : (
                  <button
                    onClick={() => moveBuyPage(showId)}
                    className="learn-more"
                  >
                    Buy Now
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="rightMarketContainer">
          <div className="marketTitleContainer">
            <h2>ZOLAMAN Market</h2>
          </div>
          <div className="style-five1"></div>
          <hr className="style-five1" />
          <div className=" rightMarketSection">
            <div className="rightMarketTitle">
              {/* <span>ZOLAMAN NFT</span> */}
              {/* <span>Filter</span>
              <button onClick={e => setDropdownVisibility(!dropdownVisibility)}>
                {
                    dropdownVisibility
                        ? 'Close'
                        : 'Open'
                }
              </button>
              <Dropdown visibility={dropdownVisibility}>
                  <ul>
                      <li>background</li>
                      <li>cloak</li>
                      <li>eyes</li>
                      <li>clothes</li>
                      <li>weapon</li>
                  </ul>
              </Dropdown> */}
            </div>
            <div className="rightMarketCardContainer">
              {mymintEditionData !== "" && sellingAllNftData !== ""
                ? revmymintdata.map((item, index) => {
                    return (
                      <div
                        className="rightMarketMainCardList"
                        key={index}
                        onClick={() => showNft(item.price, item.id)}
                      >
                        {/* onClick={() => moveBuyPage(item.id)} */}
                        {item.id > 9999 ? (
                          <div className="rightMarketCardList">
                            <div
                              className="rightMarketNftCard"
                              style={{
                                backgroundImage:
                                  "url(https://sean95.s3.ap-northeast-2.amazonaws.com/raw/Zolaman/" +
                                  `${item.id}` +
                                  ".png)",
                              }}
                            ></div>
                            <div className="rightMarketCardTxtContainer">
                              <div className="rightMarketCardTxtSection">
                                <div className="rightMarketCardDnaTxt">
                                  <span className="rightMarketCardDnaTxt1">
                                    Create By{" "}
                                  </span>
                                  <span className="rightMarketCardDnaTxt2">
                                    {" "}
                                    GusaGuO
                                  </span>
                                </div>
                                <div className="rightMarketWhiteCardNum">
                                  <span>
                                    WhiteList Zola Man #{item.id - 9999}
                                  </span>
                                </div>
                                <div className="rightMarketPrice">
                                  <span>Price : {item.price}</span>
                                </div>
                                <div className="rightMarketOwner">
                                  <div className="rightMarketOwner1">
                                    <span>Ownership : </span>
                                  </div>
                                  <div className="rightMarketOwner2">
                                    {mymintEditionData.includes(item.id) ? (
                                      <span> Mine </span>
                                    ) : (
                                      <span> Others </span>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <>
                            <div className="rightMarketCardList">
                              <div
                                className="rightMarketNftCard"
                                style={{
                                  backgroundImage:
                                    "url(https://sean95.s3.ap-northeast-2.amazonaws.com/raw/Zolaman/" +
                                    `${item.id}` +
                                    ".png)",
                                }}
                              ></div>
                              <div className="rightMarketCardTxtContainer">
                                <div className="rightMarketCardTxtSection">
                                  <div className="rightMarketCardDnaTxt">
                                    <span className="rightMarketCardDnaTxt1">
                                      Create By{" "}
                                    </span>
                                    <span className="rightMarketCardDnaTxt2">
                                      {" "}
                                      GusaGuO
                                    </span>
                                  </div>
                                  <div className="rightMarketCardNum">
                                    <span>Zola Man #{item.id}</span>
                                  </div>
                                  <div className="rightMarketPrice">
                                    <span>Price : {item.price}</span>
                                  </div>
                                  <div className="rightMarketOwner">
                                    <div className="rightMarketOwner1">
                                      <span>Ownership : </span>
                                    </div>
                                    <div className="rightMarketOwner2">
                                      {mymintEditionData.includes(item.id) ? (
                                        <span> MINE </span>
                                      ) : (
                                        <span> Others </span>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </>
                        )}
                      </div>
                    );
                  })
                : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MarketPage;
