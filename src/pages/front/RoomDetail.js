import { useParams, Link } from "react-router-dom";


export default function RoomDetail() {
    const { id } = useParams();
    console.log(id)
    return (
        <section className="container py-5">
            <Link to='/rooms'><button type="button" className="btn btn-outline-primary">上一頁</button></Link>
            <span className="material-symbols-outlined">
                bed
            </span>
            <span className="material-symbols-outlined">
                paid
            </span>
            <span className="material-symbols-outlined" style={{ transform: 'rotate(-45deg)' }}>
                width
            </span>
            <span className="material-symbols-outlined">
                person
            </span>
            <span className="material-symbols-outlined">
                kitchen
            </span>
            <span className="material-symbols-outlined">
                local_laundry_service
            </span>
            <span className="material-symbols-outlined">
                fire_extinguisher
            </span>
            <span className="material-symbols-outlined">
                wifi
            </span>
            <span className="material-symbols-outlined">
                assistant_device
            </span>
            <span className="material-symbols-outlined">
                shower
            </span>

            <br />
        </section>
    )
}