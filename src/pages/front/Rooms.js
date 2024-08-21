import FilterOffcanvas from "../../components/Offcanvas/FilterOffcanvas";
import { HeartToggle } from "../../components/Input/Input";
import Alert from "../../components/Alert/Alert";
import { useState } from "react";
export default function Rooms() {
    const [isLogin,setIsLogin] = useState(false);
    const [showAlert,setShowAlert] = useState(false)
    function heartToggle(e){
        if(!isLogin){
            setShowAlert(true);
            e.target.checked = false;
            setTimeout(()=>{
                setShowAlert(false);
            },2000)
        }
    }
    return (
        <>
            <FilterOffcanvas />
            <Alert alertTxt={'請先登入'} color={'danger'} status={showAlert} />
            <section className="container py-5">
                <div className="row row-cols-1 row-cols-lg-2">
                    <div className="col" data-aos='fade-down'>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                    className="img-fluid h-100 rounded-start object-cover" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="card-title">Card title</h5>
                                            <HeartToggle id={'room1'} onChange={heartToggle}/>
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
                    <div className="col" data-aos='fade-down'>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                        className="img-fluid h-100 rounded-start object-cover" alt="..." />
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
                    </div><div className="col" data-aos='fade-down'>
                        <div className="card mb-3">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                                        className="img-fluid h-100 rounded-start object-cover" alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-between align-items-center mb-2">
                                            <h5 className="card-title">Card title</h5>
                                            <HeartToggle id={'room3'}/>
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