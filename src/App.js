import { Route,Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import Navbar1 from './components/Navbar';
import FavList from './components/FavList';
function App() {
  return (
    <>
    <Navbar1/>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/favlist' element={<FavList/>}></Route>
    </Routes>
    
    </>
    
  )
}

export default App;
