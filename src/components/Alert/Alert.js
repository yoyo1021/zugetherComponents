import './alert.scss';

export default function Alert({ alertTxt, color, status }) {
    return (
        <div className={`alertWrapper ${status ? 'd-flex':'d-none'}`} >
            <div className={`alert alert-${color} position-absolute text-center py-4`} role="alert">
                {alertTxt}
            </div>
        </div>

    )
}