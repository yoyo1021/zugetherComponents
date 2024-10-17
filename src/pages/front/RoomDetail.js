import Banner from '../../components/Banner/Banner';
import PageTitle from '../../components/PageTitle/PageTitle';
import Alert from "../../components/Alert/Alert";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { useState } from "react";
import { useLogin } from "../../store/dataStore";


export default function RoomDetail() {
    const { isLogin } = useLogin();
    const [showAlert, setShowAlert] = useState(false);

    function checkLogin() {
        if (!isLogin) {
            setShowAlert(true)
            setTimeout(() => {
                setShowAlert(false)
            }, 2000)
            return
        }
    }

    function addFavorite() {
        checkLogin();
    };

    function zugether() {
        checkLogin();
    };

    function sendMessage() {
        checkLogin();
    };

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
        manage: true,
        managePaid: 2000,
        people: 1,
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
            'photo': 'https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D',
            'nickName': '康康',
            'gender': '男',
            'birth': '2020/01/01',
            'tel': '0923456789',
            'intro': '大家好，我是吳康人，不是那個吳慷仁，可以叫我康康，但我也不是那個康康，歡迎大家來認識。大家好，我是吳康人，不是那個吳慷仁，可以叫我康康，但我也不是那個康康，歡迎大家來認識。大家好，我是吳康人，不是那個吳慷仁，可以叫我康康，但我也不是那個康康，歡迎大家來認識。因為很重要所以講三次。',
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
                <Breadcrumb />
                <Banner datas={roomImgs} />
                <div className="roomContent py-3">
                    <PageTitle title={'房間資訊'} />
                    <div className="roomInfo " >
                        <div className="card p-3 shadow-sm">
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
                                        <span className="material-symbols-outlined me-2">
                                            paid
                                        </span>
                                        管理費 : {room.managePaid}/月
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
                                        徵求人數 : 尋求{room.people}位
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
                            <hr />
                            <div className="roomEquipment p-3">
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
                    </div>
                </div>
                <div className="poster py-3  fs-4">
                    <PageTitle title={'發布者資訊'} />
                    <div className="posterInfo" data-aos="fade-down">
                        <div className="card mb-3 shadow-sm">
                            <div className="row g-0 d-md-flex align-items-center">
                                <div className="col-md-4 col-lg-3 d-flex justify-content-center align-items-center py-4 py-lg-5">
                                    <img src={room.poster.photo} className="img-fluid rounded-circle object-cover" alt="..." style={{ height: '200px', width: '200px' }} />
                                </div>
                                <div className="col-md-8 col-lg-9">
                                    <div className="card-body p-4">
                                        <div className="d-flex justify-content-between align-items-center border-bottom border-light pb-2">
                                            <h4 className="card-title fw-bold text-start mb-0">{room.poster.nickName}</h4>
                                        </div>
                                        <div className="p-3 pb-0">
                                            <table>
                                                <tbody>
                                                    <tr>
                                                        <td className="pe-3">性別</td>
                                                        <td className="px-3">{room.poster.gender}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-3">出生日期</td>
                                                        <td className="px-3">{room.poster.birth}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="pe-3">連絡電話</td>
                                                        <td className="px-3">{room.poster.tel}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                            {/* <p className="card-text">暱稱 : {room.poster.nickName}</p>
                                            <p className="card-text">性別 : {room.poster.gender}</p>
                                            <p className="card-text">連絡電話 : {room.poster.tel}
                                                <span className="material-symbols-outlined me-2">smartphone</span>
                                                 
                                            </p> */}
                                            <div className="card-text ">自我介紹
                                                <p className="text-break">{room.poster.intro}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="host py-3 ">
                    <PageTitle title={'房東資訊'} />
                    <div className="hostInfo" data-aos="fade-down">
                        <div className="card p-3 shadow-sm">
                            <table style={{ maxWidth: "300px" }}>
                                <tbody>
                                    <tr className="">
                                        <td >姓名</td>
                                        <td>{room.host.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="pe-1">性別</td>
                                        <td className="px-1">{room.host.gender}</td>
                                    </tr>
                                    <tr>
                                        <td className="pe-1">連絡電話</td>
                                        <td className="px-1"><a href={`tel:+${room.host.tel}`}>{room.host.tel}</a></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <div className="host py-3">
                    <PageTitle title={'地圖資訊'} />
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1807.8395178531132!2d121.458692!3d25.01102!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442a81d1e80379b%3A0x6e5b320368af0131!2zMjIw5Y-w54Gj5paw5YyX5biC5p2_5qmL5Y2A5paH5YyW6Lev5LiA5q61MjbomZ8!5e0!3m2!1szh-TW!2sus!4v1726540570804!5m2!1szh-TW!2sus"
                        data-aos="fade-down"
                        className="w-100"
                        height="450"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Google Map showing a location in Taiwan"
                    >
                    </iframe>
                </div>

                <div className="discussion border d-flex flex-column justify-content-between p-3" style={{ height: "600px", backgroundColor: '#f8f9fa' }}>
                    <div className="discussionArea overflow-auto" style={{ maxHeight: "510px"}}>
                        <div className="messageItem mb-3 d-flex ">
                            <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className={`object-cover rounded-circle me-2 `} style={{ minWidth: '40px', height: '40px' }} />
                            <div className={`messageBubble p-2 rounded bg-light text-dark`}>
                                <strong>name</strong>
                                <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam culpa repudiandae labore ea, inventore consequatur dolorem. Odit optio porro iusto vel molestias non, illo officia corporis cumque ducimus aperiam cum?</p>
                            </div>
                        </div>
                        <div className="messageItem mb-3 d-flex ">
                            <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className={`object-cover rounded-circle me-2 `} style={{ minWidth: '40px', height: '40px' }} />
                            <div className={`messageBubble p-2 rounded bg-light text-dark`}>
                                <strong>name</strong>
                                <p className="mb-0">Lorae labore ea, inventore consequatur dolorem. Odit optio porro iusto vel molestias non, illo officia corporis cumque ducimus aperiam cum?</p>
                            </div>
                        </div>
                        <div className="messageItem mb-3 d-flex ">
                            <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className={`object-cover rounded-circle me-2 `} style={{ minWidth: '40px', height: '40px' }} />
                            <div className={`messageBubble p-2 rounded bg-light text-dark`}>
                                <strong>name</strong>
                                <p className="mb-0">Lorae labore ea, inventore consequatur dolorem. Odit optio porro iusto vel molestias non, illo officia corporis cumque ducimus aperiam cum?</p>
                            </div>
                        </div>
                        <div className="messageItem mb-3 d-flex ">
                            <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className={`object-cover rounded-circle me-2 `} style={{ minWidth: '40px', height: '40px' }} />
                            <div className={`messageBubble p-2 rounded bg-light text-dark`}>
                                <strong>name</strong>
                                <p className="mb-0">Lorae labore ea, inventore consequatur dolorem. Odit optio porro iusto vel molestias non, illo officia corporis cumque ducimus aperiam cum?</p>
                            </div>
                        </div>
                        <div className="messageItem mb-3 d-flex ">
                            <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className={`object-cover rounded-circle me-2 `} style={{ minWidth: '40px', height: '40px' }} />
                            <div className={`messageBubble p-2 rounded bg-light text-dark`}>
                                <strong>name</strong><button className='btn text-success'>回復</button>
                                <p className="mb-0">Lorae labore ea, inventore consequatur dolorem. Odit optio porro iusto vel molestias non, illo officia corporis cumque ducimus aperiam cum?</p>
                            </div>
                        </div>
                        <div className="messageItem mb-3 d-flex ">
                            <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className={`object-cover rounded-circle me-2 `} style={{ minWidth: '40px', height: '40px' }} />
                            <div className={`messageBubble p-2 rounded bg-light text-dark`}>
                                <strong>name</strong>
                                <p className="mb-0">Lorae labore ea, inventore consequatur dolorem. Odit optio porro iusto vel molestias non, illo officia corporis cumque ducimus aperiam cum?</p>
                            </div>
                        </div>
                    </div>
                    <div className="inputGroup justify-content-end">
                        <div className="input-group ps-2">
                            <input type="text" className="form-control" placeholder="請輸入訊息...." />
                            <button className="btn btn-primary" type="button">Send</button>
                        </div>
                    </div>
                </div>


                <div className="d-flex justify-content-center pt-3 ">
                    <button type='button' className="btn btn-danger roomDetail-btn  me-3  py-3" onClick={addFavorite}> 加入收藏</button>
                    <button type='button' className="btn btn-primary roomDetail-btn  py-3" onClick={zugether}> 合租邀約</button>
                </div>
            </section>
        </>


    )
}