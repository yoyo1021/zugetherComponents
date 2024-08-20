import './card.scss'
export function AdvantageCard({num,icon,title,content}) {
    return (
        <>
            <div className="card position-relative bg-primary border-white p-4 rounded h-100">
                <span className="position-absolute translate-middle-y top-0 px-2 bg-dark text-white" style={{ left: '20px' }}><h3>{num}</h3></span>
                <h2 className="text-white mb-4"><i className={`me-3 ${icon}`}></i>{title}</h2>
                <p className="mb-0 text-white lh-base">{content}</p>
            </div>
        </>
    )
}