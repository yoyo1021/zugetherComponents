import './card.scss';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HeartToggle } from '../Input/Input';
import Alert from '../Alert/Alert';
import { useLogin } from '../../store/dataStore';

export function AdvantageCard({ num, icon, title, content }) {
    return (
        <>
            <div className="advantageCard h-100">
                <div className="card position-relative bg-primary border-white p-4 rounded h-100">
                    <span className="position-absolute translate-middle-y top-0 px-2 bg-primary text-white" style={{ left: '20px' }}><h3>{num}</h3></span>
                    <h2 className="text-white mb-4"><i className={`me-3 ${icon}`}></i>{title}</h2>
                    <p className="mb-0 text-white lh-base">{content}</p>
                </div>
            </div>

        </>
    )
}

export function RoomCard({ data }) {
    //const [isLogin, setIsLogin] = useState(false);
    const [showAlert, setShowAlert] = useState(false);
    const {isLogin} = useLogin();
    function heartToggle(e) {
        if (!isLogin) {
            setShowAlert(true);
            e.target.checked = false;
            setTimeout(() => {
                setShowAlert(false);
            }, 2000)
        };
    }
    return (<>
        <Alert alertTxt={'請先登入'} color={'danger'} status={showAlert} />
        {
            data.map((room, i) => {
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
                                                    <HeartToggle id={room.roomId} onChange={heartToggle} isfavorite={room.isfavorite} />
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
            })
        }
    </>)

}