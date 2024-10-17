import { Input } from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useLogin } from "../../store/dataStore";
import { useEffect, useRef, useState } from "react";
import Loading from '../Loading/Loading';

export default function LoginModal({ closeModal }) {
    const { setIsLogin } = useLogin();
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [forgot, setForgot] = useState(false);
    const [validateEmail, setValidateEmail] = useState("");
    const [validate, setValidate] = useState(false);
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
        getValues,
        formState: { errors }
    } = useForm({
        mode: 'onTouched'
    });

    useEffect(() => {
        if (isRemember) {
            memberRef.current.checked = true
            // 防止被偵測未填寫
            setValue("loginEmail", localStorage.getItem("email"))
            //email帶值到畫面
            setEmail(localStorage.getItem("email"))
            //isRemember = true
        } else {
            localStorage.clear();
            isRemember = false;
        }
    }, [setValue])



    // 登入按鈕
    const onSubmit = (data) => {
        if(forgot){
            const {resetPw} = data;
            setForgot(false);
            setValidate(false);
            closeModal();
            reset();
            console.log("重設密碼",resetPw);
        }else{
            setForgot(false);
            setValidate(false);
            console.log(data);
            closeModal();
            setIsLogin(true); //判斷登入
        }
        if (isRemember) {
            resetField("loginPassword")
        } else {
            reset();
        } 
        
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }

    const forgotPw = (e) => {
        //closeModal();
        setForgot(true);
    }

    const handleValidate = () => {
        setValidate(true)
    }

    const remember = (e) => {
        const { checked } = e.target;
        if (checked) {
            isRemember = true;
            localStorage.setItem("email", email);
            localStorage.setItem("remember", checked);
        } else {
            isRemember = false;
            localStorage.clear();
        }
    }


    return (
        <>
            <Loading isLoading={isLoading} />
            <div className="modal fade" id='loginModal' data-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <button type="button" className="btn-close" aria-label="Close" 
                                onClick={()=>{
                                    closeModal();
                                    setForgot(false);
                                    setValidate(false);
                                }}></button>
                        </div>
                        {forgot ? (<>
                            <div className="modal-body">
                                <div className="d-flex mb-3">
                                    <input type="email" name="" id="validateEmail" placeholder="請輸入Email" className="form-control w-75" onChange={(e) => setValidateEmail(e.target.value)} />
                                    <button type="button" className="btn btn-primary" onClick={handleValidate}>驗證信箱</button>
                                </div>
                                {validate ? (<>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <Input
                                            type='password'
                                            id='resetPw'
                                            lableName="密碼"
                                            placeholder='最少6位數密碼'
                                            errors={errors}
                                            register={register}
                                            rules={{
                                                //required: '密碼為必填',
                                                minLength: {
                                                    value: 6,
                                                    message: '密碼最少 6 碼'
                                                },
                                            }}
                                        ></Input>
                                        <Input
                                            type='password'
                                            id='checkPW'
                                            lableName="確認密碼"
                                            placeholder='最少6位數密碼'
                                            errors={errors}
                                            register={register}
                                            rules={{
                                                validate: (match) => {
                                                    const password = getValues('resetPw');
                                                    return match === password || '與密碼不符合'
                                                }
                                            }}
                                        ></Input>
                                        <button type="submit" className="btn btn-primary w-100 mb-2">送出</button>
                                    </form>
                                </>) : (<></>)}
                            </div>

                        </>) : (<>
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
                                        onChange={(e) => setEmail(e.target.value)}
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
                                    <div className="mb-3 d-flex justify-content-between align-items-center">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                id="remember"
                                                onChange={(e) => remember(e)}
                                                ref={memberRef}
                                                disabled={!email}
                                            />
                                            <label className="form-check-label" htmlFor="remember" style={{ lineHeight: '1.5' }}>
                                                記住 Email
                                            </label>
                                        </div>
                                        <button type="button" className="btn" onClick={forgotPw}>忘記密碼?</button>
                                    </div>
                                    <div className="flex-column border-top-0">
                                        <button type="submit" className="btn btn-primary w-100 mb-2">登入</button>
                                        <button type="button" className="btn btn-secondary w-100" onClick={goToRegister}>註冊</button>
                                    </div>
                                </form>
                            </div>
                        </>)}

                    </div>
                </div>
            </div>
        </>
    )
}