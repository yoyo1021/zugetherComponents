import { useEffect, useState } from "react";
import { Input, Radio, Textarea } from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import PageTitle from "../../components/PageTitle/PageTitle";
import Alert from "../../components/Alert/Alert";
import Loading from "../../components/Loading/Loading";

export function EditPassword() {
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors }
    } = useForm({
        mode: 'onTouched'
    });

    const [tempData, setTempData] = useState({
        email: '',
        password: ''
    })

    useEffect(() => {
        const getPw = {
            'email': 'test@gmail.com',
            'password': '123456'
        }
        setTempData(getPw);
        setValue('email', getPw.email);
        setValue('password', getPw.password);
    }, [setValue])

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setTempData({
            ...tempData,
            [name]: value
        })
    }

    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = (data) => {
        console.log(data)
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false);
            setShowAlert(true);
        }, 2000);

        setTimeout(() => {
            setShowAlert(false);
        }, 4000); 
    }

    return (
        <>
            <PageTitle title={'變更密碼'} />
            <Alert alertTxt={'修改成功'} color={'success'} status={showAlert} />
            <Loading isLoading={isLoading} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='email'
                    id='email'
                    lableName={'Email'}
                    errors={errors}
                    register={register}
                    rules={{
                        required: 'Email 為必填',
                        pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Email 格式不正確',
                        }
                    }}
                    onChange={handleEdit}
                ></Input>
                <Input
                    type='password'
                    id='password'
                    lableName={'密碼'}
                    errors={errors}
                    register={register}
                    rules={{
                        required: '密碼為必填',
                        minLength: {
                            value: 6,
                            message: '密碼不少於 6 碼'
                        },
                    }}
                    onChange={handleEdit}
                ></Input>
                <Input
                    type='password'
                    id='checkPW'
                    lableName={'確認密碼'}
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
                <div className="d-flex justify-content-center">
                    <button type='submit' className="btn btn-primary px-5 py-3">變更</button>
                </div>
            </form>
        </>

    )
}


export function EditInfo() {
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        getValues,
        setValue,
        formState: { errors }
    } = useForm({
        mode: 'onTouched'
    });

    const [tempData, setTempData] = useState({
        'name': '',
        'nickName': '',
        'birth': '',
        'gender': '',
        'tel': '',
        'intro': ''
    })

    useEffect(() => {
        const getInfo = {
            'name': 'Allen',
            'nickName': 'Allen粉多錢',
            'birth': '1999-01-01',
            'gender': '男',
            'phone': '0912345678',
            'introduction': '我是Allen'
        }
        setTempData(getInfo);
        setValue('name', getInfo.name);
        setValue('nickName', getInfo.nickName);
        setValue('birth', getInfo.birth);
        setValue('gender', getInfo.gender);
        setValue('phone', getInfo.phone);
        setValue('introduction', getInfo.introduction);
    }, [setValue])

    const handleEdit = (e) => {
        const { name, value } = e.target;
        setTempData({
            ...tempData,
            [name]: value
        })
    }

    const onSubmit = (data) => {
        console.log(data);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowAlert(true);
        }, 2000);

        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    }
    return (
        <>
            <PageTitle title={'變更會員資料'} />
            <Alert alertTxt={'修改成功'} color={'success'} status={showAlert} />
            <Loading isLoading={isLoading} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-center mb-5">
                    <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt=""
                        style={{ width: "200px", height: '200px' }}
                        className="rounded-circle object-cover"
                    />
                </div>

                <Input
                    type='text'
                    id='name'
                    lableName={'姓名'}
                    placeholder='請輸入您的姓名'
                    errors={errors}
                    register={register}
                    rules={{
                        required: '請輸入您的姓名'
                    }}
                    onChange={handleEdit}
                ></Input>
                <Input
                    type='text'
                    id='nickName'
                    lableName={'暱稱'}
                    placeholder='請輸入您的小名或英文名字'
                    errors={errors}
                    register={register}
                    onChange={handleEdit}
                ></Input>
                <Input
                    type='date'
                    id='birth'
                    lableName={'出生日期'}
                    errors={errors}
                    register={register}
                    rules={{
                        required: '請選擇你的出生日期'
                    }}
                    onChange={handleEdit}
                ></Input>
                <div className="mb-3">
                    <label htmlFor='gender' className="form-label">性別</label>
                    <input
                        type='text'
                        className={`form-control`}
                        id='gender'
                        value={tempData.gender}
                        readOnly
                    ></input>
                </div>
                <Input
                    type='tel'
                    id='phone'
                    lableName={'電話'}
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
                    onChange={handleEdit}
                ></Input>
                <Textarea
                    id='introduction'
                    lableName={'自我介紹'}
                    row='4'
                    cols='50'
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
                    onChange={handleEdit}
                ></Textarea>
                <div className="d-flex justify-content-center">
                    <button type='submit' className="btn btn-primary px-5 py-3">變更</button>
                </div>
            </form>
        </>
    )
}



export function AddRoom() {
    return (
        <>add room</>
    )
}

