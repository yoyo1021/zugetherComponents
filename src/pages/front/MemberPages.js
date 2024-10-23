import { useEffect, useState } from "react";
import { Input, Checkbox, Radio, Textarea } from "../../components/Input/Input";
import { useForm } from "react-hook-form";
import PageTitle from "../../components/PageTitle/PageTitle";
import Alert from "../../components/Alert/Alert";
import Loading from "../../components/Loading/Loading";
import DefaultAvatar from '../../assets/images/peopleImg.png';
import { Select } from "../../components/Select/Select";
import { Link } from 'react-router-dom';

export function MemberInfo() {
    const invitionData = [
        {
            id: 1,
            Mid: 1,
            nickName: "吳康人",
            avatar: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 2,
            Mid: 10,
            nickName: "吳康人2",
            avatar: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 3,
            Mid: 120,
            nickName: "吳康人3",
            avatar: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 4,
            Mid: 90,
            nickName: "吳康人4",
            avatar: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 5,
            Mid: 62,
            nickName: "吳康人5",
            avatar: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        },
        {
            id: 6,
            Mid: 87,
            nickName: "吳康人6",
            avatar: "https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D"
        },
    ]

    const handleOpenModal = (Mid) => {
        console.log(Mid)
    }

    return (
        <>
            {invitionData ? (<>
                <div className="px-3 CustomizedScroll" style={{ height: "550px", overflowY: "scroll" }}>
                    {invitionData.map((invition, i) => {
                        return (
                            <div key={invition.id}>
                                <div className="card mb-3" >
                                    <div className="row align-items-center">
                                        <div className="col-3 col-md-2 ">
                                            <div className="card-body">
                                                <img src={invition.avatar} alt="" className="object-cover rounded-circle me-2 " style={{ width: "70px", height: "70px" }} />
                                            </div>
                                        </div>
                                        <div className="col-9 col-md-10 ">
                                            <div className="card-body">
                                                <div className="d-md-flex flex-column flex-lg-row justify-content-between align-items-center">
                                                    <div className="mb-3 mb-lg-0">
                                                        <p className="d-flex align-items-center justify-content-center">
                                                            <button type="button" className="btn text-secondary" data-bs-toggle="modal" data-bs-target="#MemberModal"
                                                                style={{marginRight:"-12px"}}
                                                                onClick={() => handleOpenModal(invition.Mid)}>
                                                                {invition.nickName}
                                                            </button>向您發出合租邀約
                                                        </p>
                                                    </div>
                                                    <div className="d-flex ">
                                                        <button type="button" className="btn btn-primary w-50 me-2">同意</button>
                                                        <button type="button" className="btn btn-danger w-50">取消</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
                {/* Modal */}
                <div className="modal fade" id="MemberModal" data-bs-backdrop="static" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header border-bottom-0">
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body ">
                                <div className="d-flex flex-column align-items-center p-3">
                                    <div className="avatar" style={{ width: "200px", height: "200px" }}>
                                        <img src="https://images.unsplash.com/photo-1508341591423-4347099e1f19?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1hbnxlbnwwfHwwfHx8MA%3D%3D" alt="" className="rounded-circle object-cover w-100 h-100" />
                                    </div>
                                    <h1>吳康人</h1>
                                    <div className="d-flex flex-column align-items-start">
                                        <p>暱稱 : 康康</p>
                                        <p>出生日期 : 1999-01-01</p>
                                        <p>性別 : 男</p>
                                        <p>電話 : 0912345678</p>
                                        <p className="text-break">自我介紹 :大家好，我是吳康人，不是那個吳慷仁，可以叫我康康，但我也不是那個康康，歡迎大家來認識。大家好，我是吳康人，不是那個吳慷仁，可以叫我康康，但我也不是那個康康，歡迎大家來認識。大家好，我是吳康人，不是那個吳慷仁，可以叫我康康，但我也不是那個康康，歡迎大家來認識。因為很重要所以講三次。 </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>) : (<>
                <div className="text-center">
                    <h1>目前尚無通知</h1>
                </div>
            </>)}
        </>
    )
}

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
            'email': localStorage.getItem("email"),
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
            <PageTitle title={'修改密碼'} />
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
                    <button type='submit' className="btn btn-primary px-5 py-3">修改</button>
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
            <PageTitle title={'修改會員資料'} />
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
                {/* <Input
                    type='date'
                    id='birth'
                    lableName={'出生日期'}
                    errors={errors}
                    register={register}
                    rules={{
                        required: '請選擇你的出生日期'
                    }}
                    onChange={handleEdit}
                ></Input> */}
                <div className="mb-3">
                    <label htmlFor='birth' className="form-label">出生日期</label>
                    <input
                        type='text'
                        className={`form-control`}
                        id='birth'
                        value={tempData.birth}
                        readOnly
                    ></input>
                </div>
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
    const [isAdd, setIsAdd] = useState(true);
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
    const room =
    {
        roomId: '003',
        roomTitle: '新北板橋三人雅房',
        roomStyle: '三人雅房',
        floor: '2樓',
        bed: '上下舖',
        rent: 8000,
        size: 20,
        manage: true,
        managePaid: 2000,
        people: 1,
        address: '新北市板橋區文化路一段26號',
        date: '2024/08/08',
        expect: '個性隨和，彼此樂意分享，注重生活品質愛乾淨，洗完澡會撿毛髮、吃完餐盤不過夜、廚餘垃圾收拾妥善、互相尊重深夜放輕腳步，如果你是我們找尋的室友，歡迎一起入住溫馨的家。',
        equipment: {
            'bed': true,
            'shelf': true,
            'desk': true,
            'chair': true,
            'kitchen': true,
            'laundry': true,
            'extinguisher': false,
            'tv': true,
            'wifi': true,
            'assistant': true
        },
        host: {
            'name': '王小美',
            'gender': '女',
            'tel': '0912345678',
        }
    }

    const onSubmit = (data) => {
        data.roomPhotos = photos;
        data.enabled = true;
        console.log(data);
        setIsLoading(true);

        setTimeout(() => {
            setIsLoading(false);
            setShowAlert(true);
            setIsAdd(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }, 2000);
    }

    const addPhoto = (e) => {
        const files = e.target.files;
        Array.from(files).forEach((file) => {
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
        })
    }

    const deleteRoomImg = (id) => {
        setPhotos((prev) => prev.filter((i) => i.id !== id))
    }

    const removeRoom = () => {
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setShowAlert(true);
            setIsAdd(false);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
        }, 2000);
    }

    return (
        <section className="addRoom">
            {isAdd ? (
                <>
                    <PageTitle title={'房間資訊'} />
                    <Alert alertTxt={'刊登成功'} color={'success'} status={showAlert} />
                    <Loading isLoading={isLoading} />
                    <div className="roomInfo mb-3" >
                        <div className="card p-3 shadow-sm">
                            <div className="row row-cols-1 row-cols-md-2">
                                <div className="col">
                                    <div className="mb-2 d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2">
                                            floor
                                        </span>
                                        樓層 : {room.floor}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2 d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2">
                                            night_shelter
                                        </span>
                                        房型 : {room.roomStyle}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2 d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2">
                                            bed
                                        </span>
                                        床型 : {room.bed}
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2 d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2">
                                            paid
                                        </span>
                                        租金 : {room.rent}/月(不含水電及管理費月)
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2 d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2">
                                            paid
                                        </span>
                                        管理費 : {room.managePaid}/月
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2 d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2" style={{ transform: 'rotate(-45deg)' }}>
                                            width
                                        </span>
                                        房間大小 : {room.size}坪
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2 d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2">
                                            person
                                        </span>
                                        徵求人數 : 尋求{room.people}位
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="mb-2 d-flex align-items-center">
                                        <span className="material-symbols-outlined me-2">
                                            location_on
                                        </span>
                                        地址 : {room.address}
                                    </div>
                                </div>
                            </div>
                            <div className="mb-2 d-flex align-items-start">
                                <span className="material-symbols-outlined me-2">
                                    folded_hands
                                </span>
                                理想室友 : {room.expect}
                            </div>
                            <hr />
                            <div className="roomEquipment">
                                <h3>房間設備</h3>
                                <div className="d-flex flex-wrap py-2">
                                    <div className="d-flex align-items-center px-2">
                                        <span className={`material-symbols-outlined ${room.equipment.bed ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                            bed<span>床</span>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center px-2">
                                        <span className={`material-symbols-outlined ${room.equipment.shelf ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                            shelves<span>衣櫃</span>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center px-2">
                                        <span className={`material-symbols-outlined ${room.equipment.desk ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                            table_restaurant<span>桌子</span>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center px-2">
                                        <span className={`material-symbols-outlined ${room.equipment.chair ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                            chair_alt<span>椅子</span>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center px-2">
                                        <span className={`material-symbols-outlined ${room.equipment.kitchen ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                            kitchen<span>廚房</span>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center px-2">
                                        <span className={`material-symbols-outlined ${room.equipment.laundry ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                            local_laundry_service<span>洗衣機</span>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center px-2">
                                        <span className={`material-symbols-outlined ${room.equipment.extinguisher ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                            fire_extinguisher<span>滅火器</span>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center px-2">
                                        <span className={`material-symbols-outlined ${room.equipment.tv ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                            tv<span>電視</span>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center px-2">
                                        <span className={`material-symbols-outlined ${room.equipment.wifi ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                            wifi<span>網路</span>
                                        </span>
                                    </div>
                                    <div className="d-flex align-items-center px-2">
                                        <span className={`material-symbols-outlined ${room.equipment.assistant ? 'text-success' : 'text-light text-decoration-line-through'}`}>
                                            assistant_device<span>監視器</span>
                                        </span>
                                    </div>
                                </div>

                            </div>
                            <hr />

                            <div className="hostInfo" >
                                <h3>房東資訊</h3>
                                <div className="px-2">
                                    <table style={{ maxWidth: "300px" }}>
                                        <tbody>
                                            <tr className="">
                                                <td >姓名</td>
                                                <td>{room.host.name}</td>
                                            </tr>
                                            <tr>
                                                <td className="pe-1">性別</td>
                                                <td className="px-1">{room.host.gender}</td>
                                            </tr>
                                            <tr>
                                                <td className="pe-1">連絡電話</td>
                                                <td className="px-1"><a href={`tel:+${room.host.tel}`}>{room.host.tel}</a></td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center">
                        <button type="button" className="btn btn-danger  px-5 py-3 mb-3"
                            onClick={() => removeRoom()}
                        > 刪除已刊登房間 </button>
                    </div>

                </>) : (
                <>
                    <PageTitle title={'刊登房間'} />
                    <Alert alertTxt={'刪除成功'} color={'success'} status={showAlert} />
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
                                        //required: '房間標題為必填',
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
                                        //required: '樓層為必填',
                                        min: {
                                            value: 0,
                                            message: '樓層不得小於 0'
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
                                        //required: '租金為必填',
                                        min: {
                                            value: 0,
                                            message: '租金不得小於 0'
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
                                        //required: '房間大小為必填',
                                        min: {
                                            value: 0,
                                            message: '房間大小不得小於 0'
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
                                        //required: '徵求人數為必填',
                                        min: {
                                            value: 0,
                                            message: '徵求人數不得小於 0'
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
                                            //required: '管理費為必填',
                                            min: {
                                                value: 0,
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
                                //required: '地址為必填',
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
                                //required: '請輸入理想室友的條件',
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
                        <h3 className="text-center mb-3">房東資訊</h3>
                        <div className="row row-cols-1 row-cols-md-2">
                            <div className="col">
                                <Input
                                    type='text'
                                    id='hostName'
                                    lableName={'房東姓名'}
                                    errors={errors}
                                    register={register}
                                    rules={{
                                        //required: '房東姓名為必填',
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
                                        //required: '請輸入您的手機號碼',
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
                                            name='hostGender'
                                            labelName='男'
                                            errors={errors}
                                            register={register}
                                            rules={{
                                                //required: '請選擇性別'
                                            }}
                                        />
                                        <Radio
                                            id='female'
                                            value='female'
                                            name='hostGender'
                                            labelName='女'
                                            errors={errors}
                                            register={register}
                                            rules={{
                                                //required: '請選擇性別'
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className="container">
                            <h3 className="text-center mb-3">上傳房間圖片</h3>
                            <div className="roomPhotos row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-3">
                                {photos.map((roomPhoto, i) => {
                                    return (
                                        <div className="col mb-4" key={i}>
                                            <div className="position-relative" >
                                                <img src={roomPhoto.img} alt="" className="object-cover roomPhoto w-100" />
                                                <button type="button" className="btn btn-danger rounded-circle btn-delete"
                                                    onClick={(e) => deleteRoomImg(roomPhoto.id)}
                                                ><i className="bi bi-x" style={{ fontSize: "16px" }}></i></button>
                                            </div>
                                        </div>

                                    )
                                })}
                                <input type="file" accept="image/*" id="roomPhotos" name="roomPhotos" multiple="multiple" className="d-none" {...register("roomPhotos")}
                                    onChange={(e) => {
                                        addPhoto(e);
                                    }} />
                                <label type="button" htmlFor="roomPhotos" className="text-center py-5 w-100 mb-3 rounded" style={{ border: "1px dashed gray" }}>
                                    <i className="fa fa-plus text-light" aria-hidden="true" style={{ fontSize: '50px' }}></i>
                                    <p className="text-light">新增房間圖片</p>
                                </label>


                            </div>
                        </div>

                        <div className="d-flex justify-content-center">
                            <button type='submit' className="btn btn-primary px-5 py-3">刊登</button>
                        </div>
                    </form>
                </>
            )
            }
        </section>

    )
}


export function EditRoom() {
    const [showAlert, setShowAlert] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [tempData, setTempData] = useState({})
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
        setValue,
        reset,
    } = useForm({
        mode: 'onTouched'
    });
    const roomStyle = ['兩人一室套房', '兩人一室雅房', '三人一室套房', '三人一室雅房'];
    const bedStyle = ['單人床', '雙人床', '上下舖', '地舖'];
    const [photos, setPhotos] = useState([]);
    const [hasManage] = watch(['hasManage']);

    useEffect(() => {
        const getRoomDetail = {
            'title': 'test',
            'floor': 2,
            'roomStyle': '兩人一室套房',
            'bedStyle': '地舖',
            'rent': 1000,
            'size': 20,
            'people': 1,
            'hasManage': true,
            'managePaid': 1000,
            'address': 'address',
            'expect': 'expect',
            'bed': true,
            'shelf': false,
            'desk': false,
            'chair': true,
            'kitchen': false,
            'laundry': true,
            'extinguisher': true,
            'tv': true,
            'wifi': true,
            'assistant': false,
            'hostName': '王太太',
            'hostPhone': '0912345678',
            'hostGender': 'female',
            'roomPhotos': [
                {
                    "id": 1726120727897,
                    "img": 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                }
            ],
            "enabled": true
        }
        setTempData(getRoomDetail)
        Object.entries(getRoomDetail).forEach(([key, value]) => setValue(key, value));
        setPhotos(getRoomDetail.roomPhotos);
    }, [setValue]);

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

    const handleReset = () => {
        reset(tempData);
        setPhotos(tempData.roomPhotos);
    }

    const addPhoto = (e) => {
        const files = e.target.files;
        Array.from(files).forEach((file) => {
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
        })
    }

    const handleDelete = () => {
        console.log("delete ");

    }
    const deleteRoomImg = (id) => {
        setPhotos((prev) => prev.filter((i) => i.id !== id))
    }

    return (
        <>
            <PageTitle title={'修改房間'} />
            <Alert alertTxt={'修改成功'} color={'success'} status={showAlert} />
            <Loading isLoading={isLoading} />
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                    <div style={{ marginBottom: "-16px" }}>
                        <Checkbox
                            id={'enabled'}
                            labelName={"上架"}
                            errors={errors}
                            register={register}
                        ></Checkbox>
                    </div>
                    {/* <button type="button" className="btn btn-danger w-25"
                        onClick={handleDelete}
                    >刪除</button> */}
                </div>
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
                                min: {
                                    value: 0,
                                    message: '樓層不得小於 0'
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
                                min: {
                                    value: 0,
                                    message: '租金不得小於 0'
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
                                min: {
                                    value: 0,
                                    message: '房間大小不得小於 0'
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
                                min: {
                                    value: 0,
                                    message: '徵求人數不得小於 0'
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
                                    min: {
                                        value: 0,
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
                <h3 className="text-center mb-3">房東資訊</h3>
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
                                    name='hostGender'
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
                                    name='hostGender'
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
                <div className="container">
                    <h3 className="text-center mb-3">上傳房間圖片</h3>
                    <div className="roomPhotos row row-cols-1 row-cols-md-2 row-cols-lg-3 mb-3">
                        {photos.map((roomPhoto, i) => {
                            return (
                                <div className="col mb-4" key={i}>
                                    <div className="position-relative" >
                                        <img src={roomPhoto.img} alt="" className="object-cover roomPhoto w-100" />
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
                        <label type="button" htmlFor="roomPhotos" className="text-center py-5 w-100 mb-3 rounded" style={{ border: "1px dashed gray" }}>
                            <i className="fa fa-plus text-light" aria-hidden="true" style={{ fontSize: '50px' }}></i>
                            <p className="text-light">新增房間圖片</p>
                        </label>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <button type='button' className="btn btn-secondary px-5 py-3" onClick={handleReset}>還原</button>
                    <button type='submit' className="btn btn-primary px-5 py-3">修改</button>
                </div>
            </form>

        </>

    )
}

