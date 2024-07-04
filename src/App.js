
import './App.css';
import './Media.css';
import Header from './Components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';

import Single from './Components/Single';
import { Route, Routes } from 'react-router-dom';
import Img_page from './Components/Img_page';
import Cart from './Components/Cart';
import Login from './Components/Login';

function App() {
  return (
    <>
        <Header/>
        {/* <Home/> */}
          <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/detail/:id' element={<Single/>}/>
          <Route path='/imgsec/:id' element={<Img_page/>}/> 
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes> 
        {/* <Single/> */}
        {/* <Img_page/> */}
        {/* <Cart/> */}
        {/* <Login/> */}

    </>
  );
}

export default App;
