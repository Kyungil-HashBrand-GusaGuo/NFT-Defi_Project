import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage, PreMintingPage, AdminPage, MyPage, AllMintPage } from './pages';
import { Navbar, Footer } from './components'

function App() {

  return (
    <>
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/mypage' element={<MyPage/>} />
        <Route path='/pre-minting' element={<PreMintingPage/>} />
        <Route path='/admin' element={<AdminPage/>} />
        <Route path='/all-minting' element={<AllMintPage/>} />
      </Routes>
      <Footer/>
    </div>
    </>
  );
}

export default App;
