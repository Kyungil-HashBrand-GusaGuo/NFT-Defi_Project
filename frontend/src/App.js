import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage, PreMintingPage, AdminPage, MyPage, AllMintPage, SellPage, MarketPage, BuyPage } from './pages';
import { Navbar, Footer } from './components'



function App() {
  return (
    <div>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/mypage' element={<MyPage/>} />
        <Route path='/pre-minting' element={<PreMintingPage/>} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='/all-minting' element={<AllMintPage/>} />
        <Route path='/sellpage/:edition' element={<SellPage/>}/>
        <Route path='/market' element={<MarketPage/>}/>
        <Route path='/marketpage/:edition' element={<BuyPage/>}/>
      </Routes>
    </div>
      <Footer/>
    </div >
  );
}

export default App;
