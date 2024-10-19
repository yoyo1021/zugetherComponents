import { Link, Outlet,useLocation } from "react-router-dom";
import '../../style/pages.scss'
import { useEffect, useState } from "react";

export default function MemberLayout() {
    const [activeIndex, setActiveIndex] = useState(0);
    const handleActive = (index) => {
        setActiveIndex(index);
    }
    const location = useLocation();

    useEffect(()=>{
        switch (location.pathname) {
            case '/member/editPassword':
                setActiveIndex(1);
                break;
            case '/member/editInfo':
                setActiveIndex(2);
                break;
            case '/member/addRoom':
                setActiveIndex(3);
                break;
            case '/member/editRoom':
                setActiveIndex(4);
                break;
            default:
                setActiveIndex(0);
                break;
        }
    },[location.pathname])

    return (
        <section className="memberLayout container py-5">
            <div className='d-flex flex-column flex-md-row'>
                <div className='border memberWrapper mb-3'>
                    <ul className='list-group list-group-flush memberList'>
                        <Link
                            className={`list-group-item list-group-item-action border-0 text-center  py-3 ${activeIndex === 0 ? 'active' : ''}`}
                            to=''
                            onClick={() => handleActive(0)}
                        >
                            <i className="bi bi-bell-fill me-2"></i>
                            會員通知
                        </Link>
                        <Link
                            className={`list-group-item list-group-item-action border-0 text-center py-3 ${activeIndex === 1 ? 'active' : ''}`}
                            to='editPassword'
                            onClick={() => handleActive(1)}
                        >
                            <i className="bi bi-key-fill me-2"></i>
                            變更密碼
                        </Link>
                        <Link
                            className={`list-group-item list-group-item-action border-0 text-center py-3 ${activeIndex === 2 ? 'active' : ''}`}
                            to='editInfo'
                            onClick={() => handleActive(2)}
                        >
                            <i className='bi bi-people-fill me-2' />
                            修改會員資料
                        </Link>
                        <Link
                            className={`list-group-item list-group-item-action border-0 text-center py-3 ${activeIndex === 3 ? 'active' : ''}`}
                            to='addRoom'
                            onClick={() => handleActive(3)}
                        >
                            <i className='bi bi-house-add me-2' />
                            刊登/刪除房間
                        </Link>
                        <Link
                            className={`list-group-item list-group-item-action border-0 text-center py-3 ${activeIndex === 4 ? 'active' : ''}`}
                            to='editRoom'
                            onClick={() => handleActive(4)}
                        >
                            <i className='bi bi-house-gear me-2' />
                            修改已刊登房間
                        </Link>
                    </ul>
                </div>
                <div className='w-100  ps-md-6'>
                    {<Outlet />}
                </div>
            </div>


        </section>
    )
}