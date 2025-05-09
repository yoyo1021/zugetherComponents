import './input.scss'
export function Input({ type, id, lableName, errors, placeholder, value, register, rules, onChange }) {
    return (<>
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{lableName}</label>
            <input
                type={type}
                className={`form-control ${errors[id] && 'is-invalid'}`}
                id={id}
                placeholder={placeholder}
                value={value}
                {...register(id, rules)}
                onChange={onChange}
            />
            {errors[id] && (
                <div className="invalid-feedback">{errors[id]?.message}</div>
            )}
        </div>
    </>
    )
}

export function Textarea({ id, lableName, errors, row, cols, length, maxLen, register, placeholder, rules }) {
    return (
        <>
            <div className="mb-3 ">
                <label htmlFor={id} className="form-label">{lableName}</label>
                <div className="position-relative">
                    <textarea
                        className={`form-control ${errors[id] && 'is-invalid'} `}
                        id={id}
                        rows={row}
                        cols={cols}
                        placeholder={placeholder}
                        {...register(id, rules)}
                    />
                    <p className='position-absolute text-muted' style={{bottom: errors[id] ? "31px" : "5px", right: "20px" }}>{length}/{maxLen}</p>
                    {errors[id] && (
                        <div className="invalid-feedback">{errors[id]?.message}</div>
                    )}
                </div>
            </div>
        </>
    )
}

export function Checkbox({ id, labelName, errors, register, rules }) {
    return (
        <>
            <div className="mb-3">
                <div className="form-check">
                    <input
                        className={`form-check-input ${errors[id] && 'is-invalid'}`}
                        type="checkbox"
                        value=""
                        id={id}
                        {...register(id, rules)}
                    />
                    <label className="form-check-label" htmlFor={id} style={{ lineHeight: '1.5' }}>
                        {labelName}
                    </label>
                    {errors[id] && (
                        <div className="invalid-feedback">{errors[id]?.message}</div>
                    )}
                </div>
            </div>
        </>
    )
}

export function Radio({ id, name, value, labelName, errors, register, rules}) {
    return (
        <>
            <div className="mb-3">
                <div className="form-check">
                    <input
                        className={`form-check-input ${errors[name] && 'is-invalid'}`}
                        type="radio"
                        name={name}
                        id={id}
                        value={value}
                        {...register(name, rules)}
                    />
                    <label className="form-check-label" htmlFor={id} style={{ lineHeight: '1.5' }}>
                        {labelName}
                    </label>
                    {errors[name] && (
                        <div className="invalid-feedback">{errors[name]?.message}</div>
                    )}
                </div>
            </div>
        </>
    )
}

export function HeartToggle({ id, onChange, isfavorite }) {
    return (
        <>
            <div className="heart">
                <input id={id} name="check" type="checkbox" onChange={onChange} checked={isfavorite} />
                <label htmlFor={id}></label>
            </div>
        </>
    )
}