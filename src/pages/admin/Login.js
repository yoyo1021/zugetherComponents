import { useState } from "react";
import Alert  from "../../components/Alert/Alert";
import { useNavigate } from "react-router-dom";
export default function Login(){
    const navigate = useNavigate()
    const [data, setData] = useState({
        username: '',
        password: '',
    });
    const [loginState,setLoginState]=useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }
    function login(){
        console.log(data)
        setLoginState(true);
        setTimeout(() => {
            setLoginState(false);
        }, 2000);
        navigate('/admin')
    }
    return(
        <div className="container py-5">
            <Alert alertTxt={'登入成功'} status={loginState} color={'success'}/>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <h2 className="mb-5">Zugether 後檯登入</h2>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-label w-100">
                            Email
                            <input id="email" className="form-control" name="username" type="email" placeholder="Email Address" onChange={handleChange} />
                        </label>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-label w-100">
                            密碼
                            <input type="password" className="form-control" name="password" id="password" placeholder="name@example.com" onChange={handleChange} />
                        </label>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={login}>登入</button>
                </div>
            </div>
        </div>
    )
}