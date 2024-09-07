import { useEffect, useState } from "react";
import { Input, Checkbox, Radio, Textarea } from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import PageTitle from "../../components/PageTitle/PageTitle";
import Alert from "../../components/Alert/Alert";
import Loading from "../../components/Loading/Loading";
import DefaultAvatar from '../../assets/images/peopleImg.png';
import { Select } from "../../components/Select/Select";

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
    const [photo, setPhoto] = useState(DefaultAvatar);
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm({
        mode: 'onTouched'
    });

    const [tempData, setTempData] = useState({
        'avatar': '',
        'name': '',
        'nickName': '',
        'birth': '',
        'gender': '',
        'tel': '',
        'intro': ''
    })

    useEffect(() => {
        const getInfo = {
            'avatar': DefaultAvatar,
            'name': 'Allen',
            'nickName': 'Allen粉多錢',
            'birth': '1999-01-01',
            'gender': '男',
            'phone': '0912345678',
            'introduction': '我是Allen'
        }
        setTempData(getInfo);
        setValue('avatar', getInfo.avatar);
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
        //console.log(photo == data.avatar);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowAlert(true);
        }, 2000);

        setTimeout(() => {
            setShowAlert(false);
        }, 4000);
    }

    const editPhoto = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setPhoto(reader.result);
        }, false);
        if (file) {
            reader.readAsDataURL(file);
            setTempData({
                ...tempData,
                [name]: photo,
            })
        }
    }

    return (
        <>
            <PageTitle title={'變更會員資料'} />
            <Alert alertTxt={'修改成功'} color={'success'} status={showAlert} />
            <Loading isLoading={isLoading} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="avatar d-flex justify-content-center mb-3">
                    <input type="file" accept="image/*" id="avatar" name="avatar" className="d-none" onChange={(e) => {
                        editPhoto(e);
                        //handleEdit(e);
                    }} />
                    <figure className="avatar-figure">
                        <img src={photo} alt="" className="rounded-circle object-cover w-100 h-100" />
                        <figure className="avatar-figcaption text-center">
                            <label type="button" htmlFor="avatar" className="w-100 h-100 d-flex align-items-center justify-content-center">
                                <i className="fa fa-arrow-circle-up" aria-hidden="true" style={{ fontSize: '100px', color: "white" }}></i>
                            </label>
                        </figure>
                    </figure>
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
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm({
        mode: 'onTouched'
    });
    const roomStyle = ['兩人一室套房', '兩人一室雅房', '三人一室套房', '三人一室雅房'];
    const bedStyle = ['單人床', '雙人床', '上下舖', '地舖'];
    const [photos, setPhotos] = useState([]);
    const [hasManage] = watch(['hasManage']);

    const onSubmit = (data) => {
        data.roomPhotos = photos;
        console.log(data);
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }, 2000);
    }

    const addPhoto = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.addEventListener("load", () => {
            setPhotos((prev) => [...prev, {
                //id:file.lastModified,
                id: Date.now(),
                img: reader.result
            }]);
        }, false);
        if (file) {
            reader.readAsDataURL(file);
        }
    }

    const deleteRoomImg = (id) => {
        setPhotos((prev) => prev.filter((i) => i.id !== id))
    }

    return (
        <>
            <PageTitle title={'刊登房間'} />
            <Alert alertTxt={'刊登成功'} color={'success'} status={showAlert} />
            <Loading isLoading={isLoading} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <Input
                            type='text'
                            id='title'
                            lableName={'房間標題'}
                            errors={errors}
                            register={register}
                            rules={{
                                required: '房間標題為必填',
                                maxLength: {
                                    value: 10,
                                    message: '房間標題最多10個字'
                                },
                            }}
                        ></Input>
                    </div>
                    <div className="col">
                        <Input
                            type='number'
                            id='floor'
                            lableName={'樓層'}
                            errors={errors}
                            register={register}
                            rules={{
                                required: '樓層為必填',
                                min:{
                                    value:0,
                                    message:'樓層不得小於 0'
                                }
                            }}
                        ></Input>
                    </div>
                    <div className="col">
                        <Select labelName={"房型"} id={'roomStyle'} options={roomStyle} register={register} />
                    </div>
                    <div className="col">
                        <Select labelName={"床型"} id={'bedStyle'} options={bedStyle} register={register} />
                    </div>
                    <div className="col">
                        <Input
                            type='number'
                            id='rent'
                            lableName={'租金 / 月'}
                            errors={errors}
                            register={register}
                            rules={{
                                required: '租金為必填',
                                min:{
                                    value:0,
                                    message:'租金不得小於 0'
                                }
                            }}
                        ></Input>
                    </div>

                    <div className="col">
                        <Input
                            type='number'
                            id='size'
                            lableName={'房間大小 / 坪'}
                            errors={errors}
                            register={register}
                            rules={{
                                required: '房間大小為必填',
                                min:{
                                    value:0,
                                    message:'房間大小不得小於 0'
                                }
                            }}
                        ></Input>
                    </div>
                    <div className="col">
                        <Input
                            type='number'
                            id='people'
                            lableName={'徵求人數'}
                            errors={errors}
                            register={register}
                            rules={{
                                required: '徵求人數為必填',
                                min:{
                                    value:0,
                                    message:'徵求人數不得小於 0'
                                }
                            }}
                        ></Input>
                    </div>
                </div>


                <Checkbox
                    id={'hasManage'}
                    labelName={"管理費"}
                    errors={errors}
                    register={register}
                ></Checkbox>
                {hasManage && (
                    <>
                        <div className="" style={{ marginTop: "-32px" }}>
                            <Input
                                type='number'
                                id='managePaid'
                                //lableName={'管理費/月'}
                                errors={errors}
                                register={register}
                                rules={{
                                    required: '管理費為必填',
                                    min:{
                                        value:0,
                                        message: '管理費不得小於 0'
                                    }
                                }}
                            ></Input>
                        </div>
                    </>
                )}
                <Input
                    type='text'
                    id='address'
                    lableName={'地址'}
                    errors={errors}
                    register={register}
                    rules={{
                        required: '地址為必填',
                    }}
                //onChange={handleEdit}
                ></Input>
                <Textarea
                    id='expect'
                    lableName={'理想室友'}
                    row='4'
                    cols='50'
                    errors={errors}
                    register={register}
                    rules={{
                        required: '請輸入理想室友的條件',
                        maxLength: {
                            value: 200,
                            message: '自我介紹不多於 200 字'
                        },
                    }}
                    placeholder='請輸入理想室友的條件，最多 200 字'
                //onChange={handleEdit}
                ></Textarea>
                <h3>房間設備</h3>
                <div className="d-flex flex-wrap">
                    <div className="me-3">
                        <Checkbox
                            id={'bed'}
                            labelName={"床"}
                            errors={errors}
                            register={register}
                        />
                    </div>
                    <div className="me-3">
                        <Checkbox
                            id={'shelf'}
                            labelName={"衣櫃"}
                            errors={errors}
                            register={register}
                        />
                    </div>
                    <div className="me-3">
                        <Checkbox
                            id={'desk'}
                            labelName={"桌子"}
                            errors={errors}
                            register={register}
                        />
                    </div>
                    <div className="me-3">
                        <Checkbox
                            id={'chair'}
                            labelName={"椅子"}
                            errors={errors}
                            register={register}
                        />
                    </div>
                    <div className="me-3">
                        <Checkbox
                            id={'kitchen'}
                            labelName={"廚房"}
                            errors={errors}
                            register={register}
                        />
                    </div>
                    <div className="me-3">
                        <Checkbox
                            id={'laundry'}
                            labelName={"洗衣機"}
                            errors={errors}
                            register={register}
                        />
                    </div>
                    <div className="me-3">
                        <Checkbox
                            id={'extinguisher'}
                            labelName={"滅火器"}
                            errors={errors}
                            register={register}
                        />
                    </div>
                    <div className="me-3">
                        <Checkbox
                            id={'tv'}
                            labelName={"電視"}
                            errors={errors}
                            register={register}
                        />
                    </div>
                    <div className="me-3">
                        <Checkbox
                            id={'wifi'}
                            labelName={"網路"}
                            errors={errors}
                            register={register}
                        />
                    </div>
                    <div className="me-3">
                        <Checkbox
                            id={'assistant'}
                            labelName={"監視器"}
                            errors={errors}
                            register={register}
                        />
                    </div>
                </div>
                <hr />
                <h3>房東資訊</h3>
                <div className="row row-cols-1 row-cols-md-2">
                    <div className="col">
                        <Input
                            type='text'
                            id='hostName'
                            lableName={'房東姓名'}
                            errors={errors}
                            register={register}
                            rules={{
                                required: '房東姓名為必填',
                            }}
                        ></Input>
                    </div>
                    <div className="col">
                        <Input
                            type='tel'
                            id='hostPhone'
                            lableName={<>房東電話</>}
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
                    </div>
                    <div className="col">
                        <div className="genderWrapper">
                            <label>房東性別</label>
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
                    </div>
                </div>
                <hr />
                <h3 className="text-center mb-3">上傳房間圖片</h3>
                <div className="roomPhotos row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-3">
                    {photos.map((roomPhoto, i) => {
                        return (
                            <div className="col mb-4" key={roomPhoto.id}>
                                <div className="position-relative" >
                                    <img src={roomPhoto.img} alt="" className="object-cover roomPhoto w-100"/>
                                    <button type="button" className="btn btn-danger rounded-circle btn-delete"
                                        onClick={(e) => deleteRoomImg(roomPhoto.id)}
                                    ><i className="bi bi-x" style={{ fontSize: "16px" }}></i></button>
                                </div>
                            </div>

                        )
                    })}
                    <input type="file" accept="image/*" id="roomPhotos" name="roomPhotos" multiple className="d-none" {...register("roomPhotos")}
                        onChange={(e) => {
                            addPhoto(e);
                        }} />
                    <label type="button" htmlFor="roomPhotos" className="text-center py-5 w-100 mb-3" style={{ border: "1px dashed gray" }}>
                        <i className="fa fa-plus text-light" aria-hidden="true" style={{ fontSize: '50px' }}></i>
                        <p className="text-light">新增房間圖片</p>
                    </label>


                </div>
                <div className="d-flex justify-content-center">
                    <button type='submit' className="btn btn-primary px-5 py-3">刊登</button>
                </div>
            </form>

        </>

    )
}

