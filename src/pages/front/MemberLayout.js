import { Link, Outlet } from "react-router-dom";
import '../../style/pages.scss'
import { useState } from "react";

export default function MemberLayout() {
    const [activeIndex,setActiveIndex] = useState(null);
    const handleActive =(index)=>{
        setActiveIndex(index)
    }


    return (
        <section className="memberLayout container py-5">
            <div className='d-flex flex-column flex-md-row'>
                <div className='border memberWrapper'>
                    <ul className='list-group list-group-flush memberList'>
                        <Link
                            className={`list-group-item list-group-item-action border-0 text-center py-3 ${activeIndex === 0 ? 'active' : ''}`}
                            to='editPassword'
                            onClick={()=>handleActive(0)}
                        >
                            <i className="bi bi-key-fill me-2"></i>
                            變更密碼
                        </Link>
                        <Link
                            className={`list-group-item list-group-item-action border-0 text-center py-3 ${activeIndex === 1 ? 'active' : ''}`}
                            to='editInfo'
                            onClick={()=>handleActive(1)}
                        >
                            <i className='bi bi-people-fill me-2' />
                            修改會員資料
                        </Link>
                        <Link
                            className={`list-group-item list-group-item-action border-0 text-center py-3 ${activeIndex === 2 ? 'active' : ''}`}
                            to='addRoom'
                            onClick={()=>handleActive(2)}
                        >
                            <i className='bi bi-house-add me-2' />
                            刊登房間
                        </Link>
                        <Link
                            className={`list-group-item list-group-item-action border-0 text-center py-3 ${activeIndex === 3 ? 'active' : ''}`}
                            to='editRoom'
                            onClick={()=>handleActive(3)}
                        >
                            <i className='bi bi-house-gear me-2' />
                            修改已刊登房間
                        </Link>
                    </ul>
                </div>
                <div className='w-100 p-3 ps-md-6'>
                    {<Outlet />}
                </div>
            </div>


        </section>
    )
}