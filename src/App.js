import './style/all.scss';
import "bootstrap-icons/font/bootstrap-icons.css";

import { Routes, Route } from 'react-router-dom';
import FrontLayout from './pages/front/FrontLayout';
import Home from './pages/front/Home';
import Register from './pages/front/Register';
import About from './pages/front/About';
import User from './pages/front/User'
import NotFound from './pages/NotFound';


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<FrontLayout />}>
          <Route path='' element={<Home />}></Route>
          <Route path='signup' element={<Register />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='user' element={<User />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
