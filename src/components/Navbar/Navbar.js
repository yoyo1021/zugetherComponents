import { NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import LoginModal from "../Modal/LoginModal";
import { Modal } from 'bootstrap';
import ChatOffcanvas from "../Offcanvas/ChatOffcanvas";
import ChatList from "../ChatList/ChatList";
import './navbar.scss';

export default function Navbar() {
    const menuRef = useRef(null);
    const burgerRef = useRef(null);
    const loginModal = useRef(null);
    const navigate = useNavigate();
    const [isLogin, setIsLogin] = useState(false);
    const [userName, setUserName] = useState('user');
    const [openChatList, setOpenChatList] = useState(null);

    useEffect(() => {
        const menu = menuRef.current;
        const burger = burgerRef.current;
        
        if (menu && burger) {
            function addActive() {
                burger.classList.toggle('active');
                menu.classList.toggle('active');
            }
            function removeActive() {
                burger.classList.remove('active');
                menu.classList.remove('active');
            }
            burger.addEventListener('click', addActive);
            const navLinks = menu.querySelectorAll('li')
            navLinks.forEach((navLink) => {
                navLink.addEventListener('click', removeActive);
            })
            return (() => {
                burger.removeEventListener('click', addActive);
            })
        }

    }, []);
    useEffect(() => {
        loginModal.current = new Modal('#loginModal', {
            backdrop: 'static'
        });
    }, []);

    function openLoginModal() {
        loginModal.current.show();
    }

    function closeLoginModal() {
        loginModal.current.hide();
    }

    function closeNavbar() {
        burgerRef.current.classList.remove('active');
        menuRef.current.classList.remove('active');
    }

    function logout() {
        setIsLogin(false);
        closeNavbar();
        navigate('/')
    }



    return (<>
        <nav className="navbar bg-primary">
            <NavLink to='/' className="logo" >Logo</NavLink>
            <ul className="menu bg-primary " ref={menuRef}>
                <li className="nav-item">
                    <NavLink to='/articles' className="navLink w-100 p-3 text-secondary">
                        文章區
                    </NavLink>
                </li>
                {isLogin ? (
                    <>
                        <li className="nav-item">
                            <NavLink to='/favorite' className="navLink w-100 p-3 text-secondary">
                                <i className="bi bi-heart-fill me-2"></i>我的收藏
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="navLink btn w-100 p-3 text-secondary position-relative" onClick={()=>{openChatList();closeNavbar()}}>
                                <i className="bi bi-chat-fill me-2" ></i>聊天室
                            </button>
                        </li>
                        <li className="nav-item">
                            <button type="button" className="navLink btn w-100 p-3 text-secondary" onClick={() => {navigate('/user');closeNavbar();}}>
                                <i className="bi bi-person-fill me-2"></i>{userName}
                            </button>
                        </li>
                        <li className="nav-item"><button type="button" className="navLink btn w-100 p-3 text-secondary" onClick={logout}>登出</button></li>

                    </>
                ) : (
                    <>
                        <li className="nav-item"><button type="button" className="navLink btn w-100 p-3 text-secondary" onClick={openLoginModal}>登入 / 註冊</button></li>
                    </>
                )}
            </ul>
            <div className="burger" ref={burgerRef}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
        <ChatOffcanvas onOpenChatList={setOpenChatList} children={<ChatList/>}/>
        <LoginModal closeModal={closeLoginModal} setIsLogin={setIsLogin}></LoginModal>
    </>)
}   