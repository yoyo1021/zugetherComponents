import './button.scss'

export function Button({outline,btnColor,disabled,btnTxt,onClick}){
    return(
        <button type="button" className={`btn btn${outline?'-outline':''}-${btnColor}`} disabled={disabled?'disabled':''} onClick={onClick}>{btnTxt}</button>
    )
}

export function GoTopButton(){
    function goTop(e){
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })
    }
    return(
        <button type="button" className="btn btn-primary goTopBtn d-sm-none" onClick={goTop}>
            <i className="bi bi-caret-up-fill"></i>
        </button>
    )
}