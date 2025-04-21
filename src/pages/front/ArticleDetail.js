import { useParams } from "react-router-dom"
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Loading from "../../components/Loading/Loading";
import { useEffect, useState } from "react";
import axios from "axios";

export default function ArticleDetail() {
    const {id} = useParams();
    const [article,setArticle] = useState({});
    const [isLoading,setIsLoading] = useState(false);
    useEffect(()=>{
        getData()
    },[])
    const getData = async()=>{
        setIsLoading(true)
        const res = await axios.get(`https://localhost:7095/api/articles/${id}`);
        setArticle(res.data[0]);
        setIsLoading(false)
    }

    return (
        
        <section className="articleDetail container py-5">
            <Loading isLoading={isLoading} />
            <Breadcrumb />
            <h1>{article.title}</h1>
            <p className="text-muted mb-3">發布時間 : {new Date(article.created_at).toLocaleString() }</p>
            <img src={article.photo ?`data:image/jpeg;base64,${article.photo}`:"https://via.placeholder.com/800x300"} alt={article.title} className="w-100 object-cover rounded articlePhoto mb-3"/>
            <div className="articleContent">
                <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>
        </section>
    )
}