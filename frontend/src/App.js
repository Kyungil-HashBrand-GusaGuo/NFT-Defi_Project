import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage, PreMintingPage, AdminPage, MyPage, AllMintPage, SellPage, MarketPage, BuyPage, StakingPage, CardGame, GameMainPage, HangManGame, NotFound, BlackJackGame } from './pages';
import { Navbar, Footer } from './components'
import { useSelector } from 'react-redux'



function App() {

  const { account, adminAccount } = useSelector(state => state.account)

  return (
    <div>
    <div>
      <Navbar/>
      <Routes>
        <Route path='*' element={<NotFound/>} />
        <Route path='/' element={<MainPage/>} />
        <Route path='/mypage' element={<MyPage/>} />
        <Route path='/pre-minting' element={<PreMintingPage/>} />
        { adminAccount === account ? <Route path='/admin' element={<AdminPage/>} /> : null} 
        {/* <Route path='/admin' element={<AdminPage/>}/> */}
        <Route path='/all-minting' element={<AllMintPage/>} />
        <Route path='/sellpage/:edition' element={<SellPage/>}/>
        <Route path='/market' element={<MarketPage/>}/>
        <Route path='/marketpage/:edition' element={<BuyPage/>}/>
        <Route path='/staking' element={<StakingPage/>}/>
        <Route path='/gamemain' element={<GameMainPage/>}/>
        <Route path='/cardgame' element={<CardGame/>}/>
        <Route path='/hangmangame' element={<HangManGame/>}/>
        <Route path='/blackjackgame' element={<BlackJackGame/>}/>
      </Routes>
    </div>
      <Footer/>
    </div >
  );
}

export default App;
