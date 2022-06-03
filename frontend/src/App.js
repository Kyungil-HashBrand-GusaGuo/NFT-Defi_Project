import './App.css';
import { Routes, Route } from 'react-router-dom';
import { MainPage } from './pages';
import { Navbar } from './components'
// import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<MainPage/>} />
      </Routes>
    </div>
  );
}

export default App;
