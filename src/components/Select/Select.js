import { useEffect, useState } from 'react';
import Taiwan from '../../assets/taiwan.json';
import '../Select/select.scss';


export function AddressSelect({ register }) {
    const [city, setCity] = useState('台北市');
    const [area, setArea] = useState('所有區域');
    function changeCity(e) {
        setCity(e.target.value);
        setArea('allArea')
    }
    function changeArea(e) {
        setArea(e.target.value);
    }

    return (
        <>
            <label className='mb-3'> 請選擇位置 </label>
            <div className="mb-3">
                <select className="form-select" {...register('city')} value={city} onChange={changeCity}>
                <option value='allCity'>所有縣市</option>
                    {Taiwan.map((city, i) => {
                        return (
                            <option key={i} value={city.CityName}>{city.CityName}</option>
                        )
                    })}
                </select>
            </div>

            <div className="mb-3">
                <select className="form-select" {...register('area')} value={area} onChange={changeArea}>
                <option value='allArea'>所有區域</option>
                {Taiwan.find((cities) => cities.CityName === city)?.AreaList.map((area, i) => {
                        return (
                            <option key={i} value={area.AreaName}>{area.AreaName}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}

export function Select({labelName,id,options,register}){
    console.log(options)
    return(
        <>
        <label className='mb-3'> {labelName} </label>
            <div className="mb-3">
                <select className="form-select" {...register(id)} value={id}>
                    {options.map((value, i) => {
                        return (
                            <option key={i} value={value}>{value}</option>
                        )
                    })}
                </select>
            </div>
        </>
    )
}