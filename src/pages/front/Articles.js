import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { CardSwiper } from "../../components/Swiper/CardSwiper";
import axios from "axios";


export default function Articles() {
    // const articleDatas =[
    //     {
    //         id:'001',
    //         img:'',
    //         title:'title1',
    //         content:'content1content1content1content1content1content1content1content1content1content1content1',
    //     },
    //     {
    //         id:'002',
    //         img:'',
    //         title:'title2',
    //         content:'content2',
    //     },
    //     {
    //         id:'003',
    //         img:'',
    //         title:'title3',
    //         content:'content3',
    //     },
    //     {
    //         id:'004',
    //         img:'',
    //         title:'title4',
    //         content:'content4',
    //     },
    // ]
    const [articleDatas,setArticleDatas] = useState([])
    useEffect(()=>{
        getData()
    },[]);
    const getData = async()=>{
        const res = await axios.get("https://localhost:7095/api/articles/frontend");
        setArticleDatas(res.data)
    }
    return (
        <section className="articles container py-5 d-flex flex-column align-items-center">
            <PageTitle title={'文章區'} />
            <CardSwiper AticleDatas={articleDatas} />
        </section >
    )
}