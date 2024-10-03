import { useForm } from "react-hook-form";
import { Input, Textarea, Checkbox, Radio } from "../../components/Input/Input";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/Alert/Alert";
import { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import Loading from "../../components/Loading/Loading";

export default function Register() {
    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors }
    } = useForm({
        mode: 'onTouched'
    });
    const navigate = useNavigate();
    const [registerStatus, setRegisterStatus] = useState(false);
    const [isLoading,setIsLoading] = useState(false);
    const intro = watch("introduction");
    const onSubmit = (data) => {
        const { email, password, name, gender, phone, introdution,birth } = data;
        console.log(data);
        setIsLoading(true)
        setTimeout(()=>{
            setIsLoading(false);
            setRegisterStatus(true);
        },2000);
        
        setTimeout(() => {
            setRegisterStatus(false);
            navigate('/');
        }, 4000);
    }
    return (
        <>
            <section className="register container py-5 d-lg-flex flex-column align-items-center">
                <Alert alertTxt={'註冊成功'} color={'success'} status={registerStatus}></Alert>
                <Loading isLoading={isLoading}/>
                <PageTitle title={'註冊會員'}/>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        type='email'
                        id='email'
                        lableName={<>Email(必填)<span className="text-danger ms-2">*</span></>}
                        placeholder='example@mail.com'
                        errors={errors}
                        register={register}
                        rules={{
                            required: 'Email 為必填',
                            pattern: {
                                value: /^\S+@\S+$/i,
                                message: 'Email 格式不正確',
                            }
                        }}
                    ></Input>
                    <Input
                        type='password'
                        id='password'
                        lableName={<>密碼(必填)<span className="text-danger ms-2">*</span></>}
                        placeholder='最少6位數密碼'
                        errors={errors}
                        register={register}
                        rules={{
                            required: '密碼為必填',
                            minLength: {
                                value: 6,
                                message: '密碼不少於 6 碼'
                            },
                        }}
                    ></Input>
                    <Input
                        type='password'
                        id='checkPW'
                        lableName={<>確認密碼(必填)<span className="text-danger ms-2">*</span></>}
                        placeholder='最少6位數密碼'
                        errors={errors}
                        register={register}
                        rules={{
                            validate: (match) => {
                                const password = getValues('password');
                                return match === password || '與密碼不符合'
                            }
                        }}
                    ></Input>
                    <Input
                        type='text'
                        id='name'
                        lableName={<>姓名(必填)<span className="text-danger ms-2">*</span></>}
                        placeholder='請輸入您的姓名'
                        errors={errors}
                        register={register}
                        rules={{
                            required: '請輸入您的姓名'
                        }}
                    ></Input>
                    <Input
                        type='text'
                        id='nickName'
                        lableName={'暱稱'}
                        placeholder='請輸入您的小名或英文名字'
                        errors={errors}
                        register={register}
                    ></Input>
                    <Input
                        type='date'
                        id='birth'
                        lableName={<>出生日期(必填)<span className="text-danger ms-2">*</span></>}
                        
                        errors={errors}
                        register={register}
                        rules={{
                            required: '請選擇你的出生日期'
                        }}
                    ></Input>
                    <div className="genderWrapper">
                        <label>性別 (必選)<span className="text-danger ms-2">*</span></label>
                        <div className="mt-2">
                            <Radio
                                id='male'
                                value='male'
                                name='gender'
                                labelName='男'
                                errors={errors}
                                register={register}
                                rules={{
                                    required: '請選擇性別'
                                }}
                            />
                            <Radio
                                id='female'
                                value='female'
                                name='gender'
                                labelName='女'
                                errors={errors}
                                register={register}
                                rules={{
                                    required: '請選擇性別'
                                }}
                            />
                        </div>
                    </div>
                    <Input
                        type='tel'
                        id='phone'
                        lableName={<>電話(必填)<span className="text-danger ms-2">*</span></>}
                        placeholder='09xxxxxxxx'
                        errors={errors}
                        register={register}
                        rules={{
                            required: '請輸入您的手機號碼',
                            pattern: {
                                value: /^09[0-9]{8}$/,
                                message: '手機格式錯誤'
                            },
                            minLength: {
                                value: 10,
                                message: '手機號碼不少於 10 碼'
                            },
                            maxLength: {
                                value: 10,
                                message: '手機號碼不多於 10 碼'
                            },
                        }}
                    ></Input>
                    <Textarea
                        id='introduction'
                        lableName={<>自我介紹(必填)<span className="text-danger ms-2">*</span></>}
                        row='4'
                        cols='50'
                        length={<>{intro ? intro.length:0}</>}
                        maxLen="200"
                        errors={errors}
                        register={register}
                        rules={{
                            required: '請輸入自我介紹',
                            maxLength: {
                                value: 200,
                                message: '自我介紹不多於 200 字'
                            },
                        }}
                        placeholder='請輸入自我介紹，最多 200 字'
                    ></Textarea>
                    <Checkbox
                        id='agree'
                        labelName={
                            <> 
                                我已仔細閱讀並明瞭「<button type="button" className="btn p-0 text-danger" style={{ textDecoration: 'underLine' }}>服務條款</button>」、
                                「<button type="button" className="btn p-0 text-danger" style={{ textDecoration: 'underLine' }}>免責聲明</button>」、
                                「<button type="button" className="btn p-0 text-danger" style={{ textDecoration: 'underLine' }}>隱私權聲明</button>」
                                等所載內容及其意義，茲同意該等條款規定，並願遵守網站現今、嗣後規範的各種規則。
                            </> 
                            // <>
                            //     我已仔細閱讀並明瞭「<a className=" text-primary" style={{ textDecoration: 'underLine', cursor:"pointer" }}>服務條款</a>」、
                            //     「<a className=" text-primary" style={{ textDecoration: 'underLine' , cursor:"pointer" }}>免責聲明</a>」、
                            //     「<a className=" text-primary" style={{ textDecoration: 'underLine' , cursor:"pointer" }}>隱私權聲明</a>」
                            //     等所載內容及其意義，茲同意該等條款規定，並願遵守網站現今、嗣後規範的各種規則
                            // </>
                        }
                        errors={errors}
                        register={register}
                        rules={{
                            required: '請勾選同意聲明'
                        }}
                    />
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary px-5 py-3 registerBtn">註冊</button>
                    </div>
                </form>
            </section>

        </>
    )
}