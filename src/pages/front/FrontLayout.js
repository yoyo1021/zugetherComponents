import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import { Outlet } from "react-router-dom";
import { GoTopButton } from "../../components/Button/Button";
import { useState } from "react";
import ScrollTop from "../../funnction/ScrollTop";
import { LoginProvider } from '../../store/dataStore';
export default function FrontLayout() {
    const [showGoTop, setShowGoTop] = useState(false);
    document.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            setShowGoTop(true);
        } else {
            setShowGoTop(false);
        }
    })

    return (
        <>
        <LoginProvider>
            <ScrollTop />
            <Navbar />
            <div style={{ flexGrow: 1 }}>
                <Outlet></Outlet>
            </div>
            {showGoTop ? (<GoTopButton />) : (<></>)}
            <Footer />
        </LoginProvider>
            
        </>
    )
}