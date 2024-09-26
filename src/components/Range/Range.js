import './range.scss';


export default function Range({ id, lableTxt, min, max, step, setRangeVal, rangeVal, register }) {
    return (
        <div className="py-3 mb-3">
            <div className="position-relative">
                <label htmlFor={id} className="form-label" >{lableTxt}</label>
                <input type="range" className="w-100 range" id={id} min={min} max={max} step={step} value={rangeVal} 
                //style={{background:`linear-gradient(to right, rgb(255, 85, 0) ${(rangeVal-min)/(max-min)*100}%, rgb(204, 204, 204) ${(rangeVal-min)/(max-min)*100}%)`}}
                {...register(id)}
                onChange={(e) => {
                    setRangeVal(e.target.value);
                }}></input>
                <div className="position-absolute translate-middle-x" style={{ left: `${(rangeVal-min)/(max-min)*100}%` }}>{rangeVal}</div>
            </div>
        </div>
    )

}

//https://w3collective.com/double-range-slider-html-css-js/