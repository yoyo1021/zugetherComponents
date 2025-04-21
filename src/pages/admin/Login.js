import { useState } from "react";
import Alert  from "../../components/Alert/Alert";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import axios from "axios";
export default function Login(){
    const navigate = useNavigate()
    const [data, setData] = useState({
        username: '',
        password: '',
    });
    const [loginState,setLoginState]=useState(false);
    const [loginMsg,setLoginMsg] = useState("");
    const [loginColor,setLoginColor] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    function login(){
        setLoginState(true);
        axios.post("https://localhost:7095/api/admin",data).then((res)=>{
            setLoginMsg(res.data.message);
            setLoginColor("success");
            setTimeout(() => {
                setLoginState(false);
                navigate('/admin');
            }, 2000);
            
        }).catch((err)=>{
            setLoginMsg(err.response.data.message);
            setLoginColor("danger");
            setTimeout(() => {
                setLoginState(false);
            }, 2000);
        });
        
        
    }
    return(
        <div className="container py-5">
            <Loading isLoading={loginState}/>
            <Alert alertTxt={loginMsg} status={loginState} color={loginColor}/>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-5">Zugether 後台登入</h2>
                    <div className="mb-2">
                        <label htmlFor="username" className="form-label w-100">
                            使用者名稱
                            <input id="username" className="form-control" name="username" type="text" placeholder="usernName" onChange={handleChange} />
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