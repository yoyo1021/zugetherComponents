import './footer.scss';
import { NavLink } from 'react-router-dom';
export default function Footer() {
    return (
        <>
            <footer className="bg-dark py-4">
                <div className="container">
                    <ul className="d-flex align-items-center justify-content-center ">
                        <li className="px-3 py-3"><NavLink to="/">HOME</NavLink></li>
                        <li className="px-3 py-3"><NavLink to='/about'>ABOUT</NavLink></li>
                        <li className="px-3 py-3"><NavLink to=''>CONTACT</NavLink></li>
                    </ul>
                    <ul className="d-md-flex align-items-center justify-content-center text-white text-center">
                        <li className="px-3 py-3"><a href="tel:+0912345678"><i className="bi bi-telephone me-3"></i>0912345678</a></li>
                        <li className="px-3 py-3"><a href="mailto:a1234@gmail.com"><i className="bi bi-envelope me-3"></i>a1234@gmail.com</a></li>
                        <li className="px-3 py-3"><p >地址 :台中市公益路二段51號18樓</p></li>
                    </ul>
                </div>
            </footer>
        </>

    )
}

