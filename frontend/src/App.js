import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage, MyPage } from './pages';
import { Navbar, Footer } from './components'
// import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/mypage' element={<MyPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
