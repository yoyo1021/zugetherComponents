import { useState } from "react";
import { NavLink } from "react-router-dom";
import { RoomCard } from "../../components/Card/Card";
import '../../style/pages.scss'



export default function Favorite() {
    const favoriteRoomData = [
        {
            roomId: '001',
            roomTitle: '台北信義',
            roomStyle: '雙人雅房',
            floor: '2樓',
            bed: '上下舖',
            rent: 18000,
            manage:true,
            managePaid:2000,
            size: 10,
            findPerson: 1,
            address: '台北市信義區市府路45號',
            date: '2024/01/03',
            expect: '尋找愛乾淨個性外向的人',
            isfavorite:true
        },
        {
            roomId: '002',
            roomTitle: '台北萬華公寓',
            roomStyle: '一人一室套房',
            floor: '4樓',
            bed: '單人床',
            rent: 10000,
            manage:false,
            size: 7,
            findPerson: 2,
            address: '台北市萬華區長順街45號',
            date: '2024/05/26',
            expect: '不排斥貓咪的人',
            isfavorite:true
        },
        {
            roomId: '003',
            roomTitle: '新北板橋三人雅房',
            roomStyle: '三人雅房',
            floor: '2樓',
            bed: '上下舖',
            rent: 8000,
            manage:false,
            size: 20,
            findPerson: 1,
            address: '新北市板橋區文化路一段26號',
            date: '2024/08/08',
            expect: '個性隨和，彼此樂意分享，注重生活品質愛乾淨，洗完澡會撿毛髮、吃完餐盤不過夜、廚餘垃圾收拾妥善、互相尊重深夜放輕腳步，如果你是我們找尋的室友，歡迎一起入住溫馨的家。',
            isfavorite:true
        },
    ]
    return (
        <section className="favorite container py-5 h-100">
            {favoriteRoomData.length > 0 ? (
                <>
                    <RoomCard data={favoriteRoomData}/>
                </>
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