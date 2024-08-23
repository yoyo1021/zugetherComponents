import { useState } from "react";
import { NavLink } from "react-router-dom";
import '../../style/pages.scss'


export default function Favorite() {
    const [FavoriteNum, setFavoriteNum] = useState(0)
    return (
        <section className="favorite container py-5 h-100">
            {FavoriteNum ? (
                <>有</>
            ) : (
                <>
                <div className="d-flex flex-column justify-content-center align-items-center h-100">
                    <i className="bi bi-heartbreak-fill text-danger favoriteIcon"></i>
                    <p className="fs-1 fw-bold mb-4">還沒有加入收藏</p>
                    <NavLink to='/'><button type="button" className="btn btn-primary px-5 py-3">回首頁</button></NavLink>
                </div>          
                </>
            )}
        </section>
    )
}