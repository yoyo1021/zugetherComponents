import './input.scss'
export function Input({ type, id, lableName, errors, placeholder, register, rules, onChange }) {
    return (<>
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{lableName}</label>
            <input
                type={type}
                className={`form-control ${errors[id] && 'is-invalid'}`}
                id={id}
                placeholder={placeholder}
                {...register(id, rules)}
                onChange={onChange} />
            {errors[id] && (
                <div className="invalid-feedback">{errors[id]?.message}</div>
            )}
        </div>
    </>
    )
}

export function Textarea({ id, lableName, errors, row, cols, register, placeholder, rules }) {
    return (
        <>
            <div className="mb-3">
                <label htmlFor={id} className="form-label">{lableName}</label>
                <textarea
                    className={`form-control ${errors[id] && 'is-invalid'}`}
                    id={id}
                    rows={row}
                    cols={cols}
                    placeholder={placeholder}
                    {...register(id, rules)}
                />
                {errors[id] && (
                    <div className="invalid-feedback">{errors[id]?.message}</div>
                )}
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
                    <label className="form-check-label" htmlFor={id} style={{lineHeight:'1.5'}}>
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
                    <label className="form-check-label" htmlFor={id} style={{lineHeight:'1.5'}}>
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