import { Link,useNavigate,Outlet } from "react-router-dom";
export default function Dashboard() {
    const navigate = useNavigate()
    function logout(){
        navigate('/login')
    }
    return (
        <><nav className='navbar navbar-expand-lg bg-primary'>
            <div className='container-fluid'>
                <p className='text-white mb-0'>Zugrther 後台管理系統</p>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarNav'
                    aria-controls='navbarNav'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                >
                    <span className='navbar-toggler-icon' />
                </button>
                <div
                    className='collapse navbar-collapse justify-content-end'
                    id='navbarNav'
                >
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <button type='button' className='btn btn-sm btn-light' onClick={logout}>
                                登出
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
            <div className='d-flex' style={{ minHeight: 'calc(100vh - 56px)' }}>
                <div className='bg-light' style={{ width: '200px' }}>
                    <ul className='list-group list-group-flush'>
                        <Link
                            className='list-group-item list-group-item-action py-3'
                            to='/admin/articles'
                        >
                            <i className='bi bi-cup-fill me-2' />
                            文章列表
                        </Link>
                        <Link
                            className='list-group-item list-group-item-action py-3'
                            to='/admin/members'
                        >
                            <i className='bi bi-people-fill me-2' />
                            會員列表
                        </Link>
                        <Link
                            className='list-group-item list-group-item-action py-3'
                            to='/admin/rooms'
                        >
                            <i className='bi bi-house-add me-2' />
                            刊登合租列表
                        </Link>
                    </ul>
                </div>
                <div className='w-100'>  
                    { <Outlet />}
                </div>
            </div>
        </>

    )
}