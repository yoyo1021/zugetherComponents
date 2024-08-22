import { Link } from "react-router-dom";
import './breadcrumb.scss'
export default function Breadcrumb({preLink,prePage,id}) {
    return (
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={preLink}>{prePage}</Link></li>
                <li className="breadcrumb-item active" aria-current="page">{id}</li>
            </ol>
        </nav>
    )
}