import FilterOffcanvas from "../../components/Offcanvas/FilterOffcanvas";
import { HeartToggle } from "../../components/Input/Input";
import Alert from "../../components/Alert/Alert";
import { useState } from "react";
import { Link } from "react-router-dom";
export default function Rooms() {
    const [isLogin, setIsLogin] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const roomData = [
        {
            roomId: '001',
            roomTitle: '台北信義',
            roomStyle: '雙人雅房',
            floor: '2樓',
            bed: '上下舖',
            rent: 18000,
            size: 10,
            findPerson: 1,
            address: '台北市信義區市府路45號',
            date: '2024/01/03',
            expect: '尋找愛乾淨個性外向的人'
        },
        {
            roomId: '002',
            roomTitle: '台北萬華公寓',
            roomStyle: '一人一室套房',
            floor: '4樓',
            bed: '單人床',
            rent: 10000,
            size: 7,
            findPerson: 2,
            address: '台北市萬華區長順街45號',
            date: '2024/05/26',
            expect: '不排斥貓咪的人'
        },
        {
            roomId: '003',
            roomTitle: '新北板橋三人雅房',
            roomStyle: '三人雅房',
            floor: '2樓',
            bed: '上下舖',
            rent: 8000,
            size: 20,
            findPerson: 1,
            address: '新北市板橋區文化路一段26號',
            date: '2024/08/08',
            expect: '個性隨和，彼此樂意分享，注重生活品質愛乾淨，洗完澡會撿毛髮、吃完餐盤不過夜、廚餘垃圾收拾妥善、互相尊重深夜放輕腳步，如果你是我們找尋的室友，歡迎一起入住溫馨的家。'
        },
    ]

    function heartToggle(e) {
        e.preventDefault();
        if (!isLogin) {
            setShowAlert(true);
            e.target.checked = false;
            setTimeout(() => {
                setShowAlert(false);
            }, 2000)
        };

    }
    return (
        <>
            <FilterOffcanvas />
            <Alert alertTxt={'請先登入'} color={'danger'} status={showAlert} />
            <section className="container py-5">
                <div className="row row-cols-1">
                    {roomData.map((room, i) => {
                        return (
                            <div className="col roomCard" data-aos='fade-down' key={i}>
                                <Link to={`/rooms/${room.roomId}`} >
                                    <div className="card mb-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                                    className="img-fluid rounded-start object-cover" alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <div className="d-flex justify-content-between align-items-center mb-2">
                                                        <h5 className="card-title fw-bold">{room.roomTitle}<br /><span className="fs-6 text-muted">{room.date}</span></h5>
                                                        <div onClick={(e) => e.stopPropagation()}>
                                                            <HeartToggle id={room.roomId} onChange={heartToggle} />
                                                        </div>
                                                    </div>
                                                    <div className="row row-cols-1 row-cols-md-2">
                                                        <div className="col">
                                                            <div className="mb-2 d-flex align-items-center">
                                                                <span className="material-symbols-outlined me-2">
                                                                    floor
                                                                </span>
                                                                {room.floor}
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="mb-2 d-flex align-items-center">
                                                                <span className="material-symbols-outlined me-2">
                                                                    night_shelter
                                                                </span>
                                                                {room.roomStyle}
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="mb-2 d-flex align-items-center">
                                                                <span className="material-symbols-outlined me-2">
                                                                    bed
                                                                </span>
                                                                {room.bed}
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="mb-2 d-flex align-items-center">
                                                                <span className="material-symbols-outlined me-2">
                                                                    paid
                                                                </span>
                                                                {room.rent}/月(不含水電及管理費月)
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="mb-2 d-flex align-items-center">
                                                                <span className="material-symbols-outlined me-2" style={{ transform: 'rotate(-45deg)' }}>
                                                                    width
                                                                </span>
                                                                {room.size}坪
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="mb-2 d-flex align-items-center">
                                                                <span className="material-symbols-outlined me-2">
                                                                    person
                                                                </span>
                                                                尋求{room.findPerson}位
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="mb-2 d-flex align-items-center">
                                                                <span className="material-symbols-outlined me-2">
                                                                    location_on
                                                                </span>
                                                                {room.address}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="mb-2 d-flex align-items-start">
                                                        <span className="material-symbols-outlined me-2">
                                                            folded_hands
                                                        </span>
                                                        {room.expect}
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                    <div className="col roomCard" data-aos='fade-down'>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="img-fluid rounded-start object-cover" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="card-title">Card title</h5>
                                            <HeartToggle id={'room1'} onChange={heartToggle} />
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                floor
                                            </span>
                                            2樓
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                night_shelter
                                            </span>
                                            雙人套房
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                bed
                                            </span>
                                            上下舖
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                paid
                                            </span>
                                            8000/月(不含水電及管理費月)
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2" style={{ transform: 'rotate(-45deg)' }}>
                                                width
                                            </span>
                                            10坪
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                person
                                            </span>
                                            尋求1位
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col roomCard" data-aos='fade-down'>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="img-fluid rounded-start object-cover" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="card-title">Card title</h5>
                                            <HeartToggle id={'room2'} />
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                floor
                                            </span>
                                            2樓
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                bed
                                            </span>
                                            上下舖
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                paid
                                            </span>
                                            8000/月(不含水電及管理費月)
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2" style={{ transform: 'rotate(-45deg)' }}>
                                                width
                                            </span>
                                            10坪
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                person
                                            </span>
                                            尋求1位
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col roomCard" data-aos='fade-down'>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        className="img-fluid rounded-start object-cover" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="card-title">Card title</h5>
                                            <HeartToggle id={'room3'} />
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                floor
                                            </span>
                                            2樓
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                bed
                                            </span>
                                            上下舖
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                paid
                                            </span>
                                            8000/月(不含水電及管理費月)
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2" style={{ transform: 'rotate(-45deg)' }}>
                                                width
                                            </span>
                                            10坪
                                        </div>
                                        <div className="mb-2 d-flex align-items-center">
                                            <span className="material-symbols-outlined me-2">
                                                person
                                            </span>
                                            尋求1位
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    )
}