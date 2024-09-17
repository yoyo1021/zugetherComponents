import { Link, useNavigate } from "react-router-dom";
import './breadcrumb.scss'
export default function Breadcrumb() {
    const navigate = useNavigate();
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                {/* <li className="breadcrumb-item"><Link to={preLink}>{prePage}</Link></li> */}
                <li className="breadcrumb-item">
                    <button className="btn btn-primary" onClick={()=>navigate(-1)}>
                        <i className="bi bi-arrow-left me-2"></i>上一頁
                    </button>
                </li>
            </ol>
        </nav>
    )
}