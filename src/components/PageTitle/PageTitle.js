export default function PageTitle({ title }) {
    return (
        <div className='w-100 pb-3'>
            <h1 className="text-center fw-bold">{title}</h1>
            <hr className="w-100 pb-3" style={{ borderWidth: '3px', borderColor: 'red' }} />
        </div>
    )
}