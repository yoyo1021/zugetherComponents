import { Input, Textarea } from "../../components/Input/Input";
import Alert  from "../../components/Alert/Alert";
import { useState } from "react";
import { useForm } from "react-hook-form";
export default function Contact() {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm({
        mode: 'onTouched'
    });

    const [ isSend,setIsSend ] = useState(false)

    const onSubmit = (data) => {
        const { name , title, email, phone, message}= data;
        console.log(data);
        setIsSend(true);
        reset();
        setTimeout(()=>{
           setIsSend(false);
        },5000);
        
    }
    return (
        <div className="contact container py-5">
            <Alert alertTxt={'感謝您的留言，已將留言傳送給管理者'} color={'success'} status={isSend}> </Alert>            <h1 className="text-center ">填寫個人資料</h1>
            <hr className="w-100 pb-3" style={{borderWidth:'3px', borderColor:'red'}}/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type='text'
                    id='name'
                    lableName={<>姓名(必填)<span className="text-danger ms-2">*</span></>}
                    errors={errors}
                    register={register}
                    rules={{
                        //required: "姓名為必填"
                    }}
                ></Input>
                <Input
                    type='text'
                    id='title'
                    lableName={<>主旨(必填)<span className="text-danger ms-2">*</span></>}
                    errors={errors}
                    register={register}
                    rules={{
                        //required: "主旨為必填"
                    }}
                ></Input>
                <Input
                    type='email'
                    id='email'
                    lableName={<>Email(必填)<span className="text-danger ms-2">*</span></>}
                    errors={errors}
                    register={register}
                    rules={{
                        //required: "Email為必填"
                    }}
                ></Input>
                <Input
                    type='tel'
                    id='phone'
                    lableName={<>手機(必填)<span className="text-danger ms-2">*</span></>}
                    errors={errors}
                    register={register}
                    rules={{
                        //required: "手機為必填",
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
                        id='message'
                        lableName={<>想說的話(必填)<span className="text-danger ms-2">*</span></>}
                        row='4'
                        cols='50'
                        errors={errors}
                        register={register}
                        rules={{
                            //required: '請輸入自我介紹',
                            maxLength: {
                                value: 200,
                                message: '內容不多於 200 字'
                            },
                        }}
                        placeholder='請輸入內容，最多 200 字'
                    ></Textarea>
                    <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-primary w-100 py-3 registerBtn">送出</button>
                    </div>
            </form>
        </div>
    )
}