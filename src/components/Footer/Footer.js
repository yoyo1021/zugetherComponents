import './footer.scss';
import { NavLink } from 'react-router-dom';
export default function Footer() {
    return (
        <>
            <footer className="bg-primary py-5">
                <div className="container">
                    <ul className="pages d-flex align-items-center justify-content-center mb-3">
                        <li><NavLink to="/" className='px-4 py-3'>首頁</NavLink></li>
                        <li><NavLink to='/about' className='px-4 py-3'>關於我們</NavLink></li>
                        <li><NavLink to='/contact' className='px-4 py-3'>聯絡我們</NavLink></li>
                    </ul>
                    <ul className="contact d-md-flex align-items-center justify-content-center text-white text-center">
                        <li className="px-3 py-3"><a href="tel:+0912345678"><i className="bi bi-telephone me-3"></i>0912345678</a></li>
                        <li className="px-3 py-3"><a href="mailto:a1234@gmail.com"><i className="bi bi-envelope me-3"></i>a1234@gmail.com</a></li>
                        <li className="px-3 py-3"><p >地址 :台中市公益路二段51號18樓</p></li>
                    </ul>
                    <NavLink to='/adminLogin' className='px-4 py-3'>後臺管理</NavLink>
                </div>
            </footer>
        </>

    )
}

