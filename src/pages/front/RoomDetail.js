import { useParams, Link } from "react-router-dom";
import Banner from '../../components/Banner/Banner';
import PageTitle from '../../components/PageTitle/PageTitle';
import PersonImg from '../../assets/images/friends.jpg';
import Alert from "../../components/Alert/Alert";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useState } from "react";


export default function RoomDetail() {
    const { id } = useParams();
    
    const [isLogin, setIsLogin] = useState(false);
    const [showAlert, setShowAlert] = useState(false)

    function addFavorite() {
        if (!isLogin) {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 2000)
            return
        }
    }
    function zugether() {
        if (!isLogin) {
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false)
            }, 2000)
            return
        }
    }

    const roomImgs = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        },
    ]

    const room =
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
        expect: '個性隨和，彼此樂意分享，注重生活品質愛乾淨，洗完澡會撿毛髮、吃完餐盤不過夜、廚餘垃圾收拾妥善、互相尊重深夜放輕腳步，如果你是我們找尋的室友，歡迎一起入住溫馨的家。',
        equipment: {
            'bed': true,
            'shelf': true,
            'desk': true,
            'chair': true,
            'kitchen': true,
            'laundry': true,
            'extinguisher': false,
            'tv': true,
            'wifi': true,
            'assistant': true
        },
        poster: {
            'name': '吳康人',
            'photo': '',
            'nickName': '康康',
            'gender': '男',
            'tel': '0923456789',
            'intro': '大家好，我是吳康人，不是那個吳慷仁，可以叫我康康，但我也不是那個康康，歡迎大家來認識。',
        },
        host: {
            'name': '王小美',
            'gender': '女',
            'tel': '0912345678',
        }
    }
    return (
        <>
           
            <section className="roomDetail container py-5">
                <Alert alertTxt={'請登入會員'} color={'danger'} status={showAlert} />
                <Breadcrumb preLink={'/rooms'} prePage={'room'} id={id}/>
                <Banner datas={roomImgs} />
                <div className="roomContent py-3">
                    <PageTitle title={'房間資訊'} />
                    <div className="roomInfo">
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <div className="mb-2 d-flex align-items-center">
                                    <span className="material-symbols-outlined me-2">
                                        floor
                                    </span>
                                    樓層 : {room.floor}
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-2 d-flex align-items-center">
                                    <span className="material-symbols-outlined me-2">
                                        night_shelter
                                    </span>
                                    房型 : {room.roomStyle}
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-2 d-flex align-items-center">
                                    <span className="material-symbols-outlined me-2">
                                        bed
                                    </span>
                                    床型 : {room.bed}
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-2 d-flex align-items-center">
                                    <span className="material-symbols-outlined me-2">
                                        paid
                                    </span>
                                    租金 : {room.rent}/月(不含水電及管理費月)
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-2 d-flex align-items-center">
                                    <span className="material-symbols-outlined me-2" style={{ transform: 'rotate(-45deg)' }}>
                                        width
                                    </span>
                                    房間大小 : {room.size}坪
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-2 d-flex align-items-center">
                                    <span className="material-symbols-outlined me-2">
                                        person
                                    </span>
                                    徵求人數 : 尋求{room.findPerson}位
                                </div>
                            </div>
                            <div className="col">
                                <div className="mb-2 d-flex align-items-center">
                                    <span className="material-symbols-outlined me-2">
                                        location_on
                                    </span>
                                    地址 : {room.address}
                                </div>
                            </div>
                        </div>
                        <div className="mb-2 d-flex align-items-start">
                            <span className="material-symbols-outlined me-2">
                                folded_hands
                            </span>
                            理想室友 : {room.expect}
                        </div>
                    </div>
                    <hr />
                    <div className="roomEquipment">
                        <h3>房間設備</h3>
                        <div className="d-flex flex-wrap py-2">
                            <div className="d-flex align-items-center px-2">
                                <span className={`material-symbols-outlined ${room.equipment.bed ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                    bed<span>床</span>
                                </span>
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <span className={`material-symbols-outlined ${room.equipment.shelf ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                    shelves<span>衣櫃</span>
                                </span>
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <span className={`material-symbols-outlined ${room.equipment.desk ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                    table_restaurant<span>桌子</span>
                                </span>
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <span className={`material-symbols-outlined ${room.equipment.chair ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                    chair_alt<span>椅子</span>
                                </span>
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <span className={`material-symbols-outlined ${room.equipment.kitchen ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                    kitchen<span>廚房</span>
                                </span>
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <span className={`material-symbols-outlined ${room.equipment.laundry ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                    local_laundry_service<span>洗衣機</span>
                                </span>
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <span className={`material-symbols-outlined ${room.equipment.extinguisher ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                    fire_extinguisher<span>滅火器</span>
                                </span>
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <span className={`material-symbols-outlined ${room.equipment.tv ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                    tv<span>電視</span>
                                </span>
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <span className={`material-symbols-outlined ${room.equipment.wifi ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                    wifi<span>網路</span>
                                </span>
                            </div>
                            <div className="d-flex align-items-center px-2">
                                <span className={`material-symbols-outlined ${room.equipment.assistant ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                    assistant_device<span>監視器</span>
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="poster py-3  fs-4">
                    <PageTitle title={'發布者資訊'} />
                    <div className="posterInfo">
                        <div className="card border-0 mb-3">
                            <div className="row g-0">
                                <div className="col-md-4 d-flex justify-content-center align-items-center">
                                    <img src={PersonImg} className="img-fluid rounded-circle object-cover" alt="..." style={{ height: '200px', width: '200px' }} />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h4 className="card-title">{room.poster.name}</h4>
                                        <p className="card-text">暱稱 : {room.poster.nickName}</p>
                                        <p className="card-text">性別 : {room.poster.gender}</p>
                                        <p className="card-text">連絡電話 : {room.poster.tel}</p>
                                        <div className="card-text ">自我介紹
                                            <p className="border p-2">{room.poster.intro}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="host py-3">
                    <PageTitle title={'房東資訊'} />
                    <div className="hostInfo">
                        <p><strong>姓名</strong> : {room.host.name}</p>
                        <p><strong>性別</strong> : {room.host.gender}</p>
                        <strong>連絡電話</strong> : <a href={`tel:+${room.host.tel}`}>{room.host.tel}</a>
                    </div>
                </div>
                <div className="d-flex justify-content-center pt-3">
                    <button type='button' className="btn btn-danger me-3 px-5 py-3" onClick={addFavorite}> 加入收藏</button>
                    <button type='button' className="btn btn-primary px-5 py-3" onClick={zugether}> 合租邀約</button>
                </div>
            </section>
        </>


    )
}