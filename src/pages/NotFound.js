import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import '../style/pages.scss'

export default function NotFound() {
    const [time,setTime] = useState(5);
    const navigate = useNavigate()
    useEffect(()=>{
        let i = setTimeout(() => {
           setTime(time -1 ) ;
           
        }, 1000);  
        if(time === 0){
            clearTimeout(i);
            navigate('/')
        }
    },[time])

    return (
        <section className="container h-100 notFound">
            <div className="d-flex flex-column align-items-center justify-content-center h-100">
                <h1 className="text-primary text-center">不存在頁面
                </h1>
                <h1 className="time">
                    <span>{time}</span>秒後返回首頁
                </h1>
            </div>
        </section>
    )
}