import './style/all.scss';
import './style/pages.scss';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'animate.css';

import { Routes, Route } from 'react-router-dom';
import FrontLayout from './pages/front/FrontLayout';
import Home from './pages/front/Home';
import Register from './pages/front/Register';
import About from './pages/front/About';
import Articles from './pages/front/Articles';
import ArticleDetail from './pages/front/ArticleDetail';
import Rooms from './pages/front/Rooms';
import RoomDetail from './pages/front/RoomDetail';
import Favorite from './pages/front/Favorite';
import MemberLaout from './pages/front/MemberLayout';
import { EditPassword, EditInfo, AddRoom, EditRoom } from './pages/front/EditMember';
import NotFound from './pages/NotFound';
import Contact from './pages/front/Contact';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Login from './pages/admin/Login';
import Dashboard from './pages/admin/Dashboard';
import AdminArticle from './pages/admin/AdminArticle';
import AdminMemeber from './pages/admin/AdminMember';
import AdminRoom from './pages/admin/AdminRoom';


function App() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <>
      
        <Routes>
          {/* 前台 */}
          <Route path='/' element={<FrontLayout />}>
            <Route path='' element={<Home />}></Route>
            <Route path='signup' element={<Register />}></Route>
            <Route path='about' element={<About />}></Route>
            <Route path='contact' element={<Contact />}></Route>
            <Route path='favorite' element={<Favorite />}></Route>
            <Route path='articles' element={<Articles />}></Route>
            <Route path='articles/:id' element={<ArticleDetail />}></Route>
            <Route path='rooms' element={<Rooms />}></Route>
            <Route path='rooms/:id' element={<RoomDetail />}></Route>
            <Route path='member' element={<MemberLaout />}>
              <Route path='editPassword' element={<EditPassword />} />
              <Route path='editInfo' element={<EditInfo />} />
              <Route path='addRoom' element={<AddRoom />} />
              <Route path='eDITRoom' element={<EditRoom />} />
            </Route>
          </Route>


          {/* 後台 */}
          <Route path='/login' element={< Login />}></Route>
          <Route path='/admin' element={<Dashboard />}>
            <Route path='articles' element={<AdminArticle />} />
            <Route path='members' element={<AdminMemeber />} />
            <Route path='rooms' element={<AdminRoom />} />
          </Route>

          {/* 404 */}
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
  
    </>
  );
}

export default App;
