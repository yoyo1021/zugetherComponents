import { useState } from "react";
import Alert  from "../../components/Alert/Alert";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../../components/Loading/Loading";

export default function Login(){
    const navigate = useNavigate()
    const [data, setData] = useState({
        username: '',
        password: '',
    });
    const [isLoading,setIsLoading] = useState(false);
    const [alert,setAlert] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    function login(){
        setIsLoading(true);
        try {
            axios.post("https://localhost:7165/api/admin/login",data).then((res)=>{
                console.log(res);
                setIsLoading(false);
                setAlert({
                    color:"success",
                    msg:res.data.message,
                    status:true
                })
                setTimeout(()=>{
                    setAlert({
                        color:"",
                        msg:"",
                        status:false
                    });
                    navigate('/admin');
                },2000)
                
            }).catch((err)=>{
                console.log(err.response.data.message);
                setAlert({
                    color:"danger",
                    msg:err.response.data.message,
                    status:true
                })
                setTimeout(()=>{
                    setAlert({
                        color:"",
                        msg:"",
                        status:false
                    })
                },2000)
                setIsLoading(false)
            })
        } catch (error) {
            console.log(error)
        }
    }
    return(
        <div className="container py-5">
            <Loading isLoading={isLoading} />
            <Alert alertTxt={alert.msg} status={alert.status} color={alert.color}/>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-5">Zugether 後台登入</h2>
                    <div className="mb-2">
                        <label htmlFor="userName" className="form-label w-100">
                            userName
                            <input id="userName" className="form-control" name="username" type="email" placeholder="請輸入管理者名稱" onChange={handleChange} />
                        </label>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label w-100">
                            密碼
                            <input type="password" className="form-control" name="password" id="password" placeholder="請輸入密碼" onChange={handleChange} />
                        </label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={login}>登入</button>
                </div>
            </div>
        </div>
    )
}