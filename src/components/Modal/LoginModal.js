import { Input } from "../Input/Input";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
export default function LoginModal({ closeModal,setIsLogin }) {
    const navigate = useNavigate();
    function goToRegister() {
        navigate('/signup');
        closeModal();
    };

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors }
    } = useForm({
        mode: 'onTouched'
    });

    const onSubmit = (data) => {
        const { email, password } = data;
        console.log(data);
        setIsLogin(true);
        closeModal();
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
                                <div className="modal-footer flex-column border-top-0">
                                    <button type="submit" className="btn btn-primary w-100">登入</button>
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