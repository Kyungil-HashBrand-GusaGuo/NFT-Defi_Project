import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage, PreMintingPage, AdminPage } from './pages';
import { Navbar, Footer } from './components'
// import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/pre-minting' element={<PreMintingPage/>} />
        <Route path='/admin' element={<AdminPage/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
