import './alert.scss';


export default function Alert({ alertTxt, color, status }) {
    const alertStatus = (color) => {
        switch (color) {
            case 'success':
                return (
                    <>
                        <i className={`bi bi-check-circle alert-icon animate__animated animate__flip `}></i>
                        <strong className='animate__animated animate__pulse '>{alertTxt}</strong>
                    </>
                );
            case 'danger':
                return (
                    <>
                        <i className={`bi bi-x-circle alert-icon animate__animated animate__shakeX `}></i>
                        <strong className='animate__animated animate__flash'>{alertTxt}</strong>
                    </>
                )
            default: return null
        }
    }
    return (
        <div className={`alertWrapper ${status ? 'd-flex' : 'd-none'} `} >
            <div className={`alert alert-${color} position-absolute text-center py-4 text-${color}`} role="alert">
                <div className="d-flex flex-column ">
                    {alertStatus(color)}
                </div>
            </div>
        </div>
    )
}