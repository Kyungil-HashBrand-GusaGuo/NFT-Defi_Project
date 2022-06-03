import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage, PreMintingPage } from './pages';
import { Navbar } from './components'
// import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
        <Route path='/pre-minting' element={<PreMintingPage/>} />
      </Routes>
    </div>
  );
}

export default App;
