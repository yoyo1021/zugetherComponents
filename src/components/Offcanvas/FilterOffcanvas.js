import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import './filterOffcanvas.scss';
import { Offcanvas } from 'bootstrap';
import Range from '../Range/Range';
import { AddressSelect, Select } from '../Select/Select';
import { useForm } from 'react-hook-form';
import Loading from '../Loading/Loading';



export default function FilterOffcanvas() {
    const filterRef = useRef(null);
    const [open, setOpen] = useState(true);
    const [amount, setAmount] = useState(5000);
    const [isLoading,setIsLoading] = useState(false);
    const navigate = useNavigate();
    const roomStyle = ['所有房型', '兩人一室套房', '兩人一室雅房', '三人一室套房', '三人一室雅房'];
    const {
        register,
        handleSubmit,
        getValues,
        formState: {
            errors
        }
    } = useForm({
        mode: 'onTouched'
    });
    useEffect(() => {
        filterRef.current = new Offcanvas('#filterOffcanvas', {
            backdrop: 'static'
        });
    }, []);
    function openFilter() {
        if (open) {
            setOpen(false);
            filterRef.current.show();
        } else {
            setOpen(true);
            filterRef.current.hide();
        }
    }
    function closeFilter() {
        filterRef.current.hide();
        setOpen(true);
    }

    const onSubmit = (data) => {
        console.log(data);
        setOpen(true);
        filterRef.current.hide();
        setIsLoading(true);
        setTimeout(() => {
            navigate('/rooms');
            setIsLoading(false);
        }, 2000);
    }
    return (
        <>
            <Loading type={'balls'} color={'gold'} isLoading={isLoading}/>
            <div className="offcanvas offcanvas-start" tabIndex="-1" ref={filterRef} id="filterOffcanvas" aria-labelledby="offcanvasWithBackdropLabel">
                <button className="btn btn-primary position-absolute filterBtn text-secondary" type="button" data-bs-toggle="offcanvas" data-bs-target="#filterOffcanvas" aria-controls="offcanvasWithBackdrop" onClick={openFilter}>
                    {/* <i className="bi bi-funnel-fill"></i> */}
                    {open ? (
                        <i className="bi bi-caret-right-fill"></i>
                    ) : (
                        <i className="bi bi-caret-left-fill"></i>
                    )}
                    搜尋房源
                </button>
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title " id="offcanvasWithBackdropLabel">條件篩選</h5>
                    <button type="button" className="btn-close text-reset" onClick={closeFilter}></button>
                </div>
                <div className="offcanvas-body px-5">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="pb-3">
                            <AddressSelect register={register} />
                            <Range register={register} id={'amount'} min={5000} max={50000} step={1000} lableTxt={'租金/月(不含水電及管理費月)'} rangeVal={amount} setRangeVal={setAmount} />
                            <Select register={register} id={'roomStyle'} labelName={'請選擇房型'} options={roomStyle} />
                        </div>
                        <button type='submit' className='btn btn-primary w-100'> 篩選 </button>
                    </form>
                </div>
            </div>
        </>
    )
}