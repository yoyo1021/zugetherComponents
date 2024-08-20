import './style/all.scss';
import "bootstrap-icons/font/bootstrap-icons.css";

import { Routes, Route } from 'react-router-dom';
import FrontLayout from './pages/front/FrontLayout';
import Home from './pages/front/Home';
import Register from './pages/front/Register';
import About from './pages/front/About';
import Articles from './pages/front/Articles';
import ArticleDetail from './pages/front/ArticleDetail';
import Rooms from './pages/front/Rooms';
import User from './pages/front/User';
import NotFound from './pages/NotFound';
import Contact from './pages/front/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

function App() {
  useEffect(()=>{
    AOS.init();
  },[])
  return (
    <>
      <Routes>
        <Route path='/' element={<FrontLayout />}>
          <Route path='' element={<Home />}></Route>
          <Route path='signup' element={<Register />}></Route>
          <Route path='about' element={<About />}></Route>
          <Route path='contact' element={<Contact />}></Route>
          <Route path='articles' element={<Articles/>}></Route>
          <Route path='articles/:id' element={<ArticleDetail/>}></Route>
          <Route path='rooms' element={<Rooms/>}></Route>
          <Route path='user' element={<User />}></Route>
        </Route>
        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </>
  );
}

export default App;
