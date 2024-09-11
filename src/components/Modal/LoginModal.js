import { Input } from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../../store/dataStore";
import { useEffect, useRef, useState } from "react";
export default function LoginModal({ closeModal }) {
    const { setIsLogin } = useLogin();
    const [email,setEmail] = useState('');
    const memberRef = useRef(null);
    const navigate = useNavigate();
    let isRemember = localStorage.getItem("remember");
    function goToRegister() {
        navigate('/signup');
        closeModal();
    };
    
    const {
        register,
        handleSubmit,
        resetField,
        reset,
        setValue,
        formState: { errors }
    } = useForm({
        mode: 'onTouched'
    });

    useEffect(()=>{
        if(isRemember){
            memberRef.current.checked = true
            // 防止被偵測未填寫
            setValue("loginEmail",localStorage.getItem("email"))
            //email帶值到畫面
            setEmail(localStorage.getItem("email"))
            //isRemember = true
        }else{
            localStorage.clear();
            isRemember = false
        }
    },[setValue])

    const onSubmit = (data) => {
        console.log(data);
        if(isRemember){
            resetField("loginPassword")
        }else{
            reset();
        }
        setIsLogin(true);
        closeModal();
    }

    const remember=(e)=>{
        const {checked} = e.target;
        if(checked){
            isRemember = true;
            localStorage.setItem("email",email);
            localStorage.setItem("remember",checked);
        }else{
            isRemember = false;
            localStorage.clear();
        }
    }

    
    return (
        <>
            <div className="modal fade" id='loginModal' data-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button type="button" className="btn-close" aria-label="Close" onClick={closeModal}></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <Input
                                    type='email'
                                    id='loginEmail'
                                    lableName='Email'
                                    placeholder='請輸入信箱'
                                    errors={errors}
                                    register={register}
                                    rules={{
                                        required: 'Email 為必填',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Email 格式不正確',
                                        }
                                    }}
                                    onChange={(e)=>setEmail(e.target.value)}
                                    value={email}
                                />
                                <Input
                                    type='password'
                                    id='loginPassword'
                                    lableName='密碼'
                                    placeholder='請輸入密碼'
                                    errors={errors}
                                    register={register}
                                    rules={{
                                        required: '密碼為必填',
                                        minLength: {
                                            value: 6,
                                            message: '密碼不少於 6 碼'
                                        }
                                    }}  
                                />
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input"
                                            type="checkbox"
                                            id="remember"
                                            onChange={(e)=>remember(e)}
                                            ref={memberRef}
                                        />
                                        <label className="form-check-label" htmlFor="remember" style={{ lineHeight: '1.5' }}>
                                            記住 Email
                                        </label>
                                    </div>
                                </div>
                                <div className="flex-column border-top-0">
                                    <button type="submit" className="btn btn-primary w-100 mb-2">登入</button>
                                    <button type="button" className="btn btn-secondary w-100" onClick={goToRegister}>註冊</button>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}