import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';
import { Route, Routes } from 'react-router-dom';
import CardItem from './Components/CardItem';
function App() {
  return (
    <div className="">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/movie/:id' element={<CardItem/>}/>
      </Routes>
    </div>
  );
}

export default App;
