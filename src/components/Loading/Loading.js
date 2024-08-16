import ReactLoading from 'react-loading';
export default function Loading({ type, color, isLoading }) {
    return (
        <>
            {isLoading && (
                <div className="position-fixed top-0 bottom-0 start-0 end-0 d-flex justify-content-center align-items-center" style={{ backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, backdropFilter: 'blur(3px)' }}>
                    <ReactLoading type={type} color={color} height={60} width={100} />
                </div>
            )}

        </>
    )
}