export default function Range({ id,lableTxt,min, max, step, setRangeVal, rangeVal, register }) {
    return (
        <div className="py-3 mb-3">
            <div className="position-relative">
                <label htmlFor={id} className="form-label" >{lableTxt}</label>
                <input type="range" className="form-range" id={id} min={min} max={max} step={step} value={rangeVal} 
                {...register(id)}
                onChange={(e) => {
                    setRangeVal(e.target.value);
                }}></input>
                <div className="position-absolute" style={{ left: `${(rangeVal-min)/(max-min)*100}%` }}>{rangeVal}</div>
            </div>
        </div>

    )

}