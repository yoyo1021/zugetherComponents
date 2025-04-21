import { useForm } from "react-hook-form";
import { Radio,Input} from "../../Input/Input";
import Loading from "../../Loading/Loading";
import { useState, useEffect } from "react";
import axios from "axios";
import Alert from "../../Alert/Alert";


export default function MemberModal({ closeModal, tempData,getMembers }) {
    const [isLoading, setIsLoading] = useState(true);
    const [alert, setAlert] = useState({
        color: "",
        msg: "",
        status: false
    })
    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onTouched",
    })
    useEffect(() => {
        if (tempData) {
            reset({
                gender: tempData.gender,
                birth: tempData.birth
            });
            setIsLoading(false); // 資料載入完畢
        }
    }, [tempData, reset]);
    
    const onSubmit = (data) => {
        const newData={...tempData,...data}
        try {
            setIsLoading(true);
            axios.put(`https://localhost:7095/api/member/adminEditMember/${tempData.mid}`,newData).then((res)=>{
                setAlert({
                    color: "success",
                    msg: res.data.message,
                    status: true
                })
                getMembers();
                setTimeout(() => {
                    setAlert({
                        ...alert,
                        status: false
                    })
                }, 2000);
                setIsLoading(false);
            }).catch((err)=>{
                console.log(err)
            })
        } catch (error) {
            console.log(error)
        }
        closeModal();
        
    }
    
   
    return (
        <>
            <Loading isLoading={isLoading} />
            <Alert alertTxt={alert.msg} color={alert.color} status={alert.status} />
            <div className="modal fade" id='memberModal' data-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header border-bottom-0">
                            <h1 className="modal-title fs-5" >編輯會員資料</h1>
                            <button type="button" className="btn-close" aria-label="Close"
                                onClick={closeModal}
                            ></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label>姓名 : </label> {tempData.name}
                                </div>
                                <div className="mb-3">
                                    <label>信箱 : </label> {tempData.email}
                                </div>
                                <div className="mb-3">
                                    <label>電話電話 : </label> {tempData.phone}
                                </div>
                                <div className="genderWrapper">
                                    <label>性別</label>
                                    <div className="mt-2">
                                        <Radio
                                            id='male'
                                            value='male'
                                            name='gender'
                                            labelName='男'
                                            errors={errors}
                                            register={register}
                                        />
                                        <Radio
                                            id='female'
                                            value='female'
                                            name='gender'
                                            labelName='女'
                                            errors={errors}
                                            register={register}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <Input
                                            type='date'
                                            id='birth'
                                            lableName="出生日期"
                                            errors={errors}
                                            register={register}
                                        ></Input>
                                    </div>
                                </div>

                                <button type="submit" className="btn btn-primary">送出</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}