import FilterOffcanvas from "../../components/Offcanvas/FilterOffcanvas";
import Banner from "../../components/Banner/Banner";
import friends1 from '../../assets/images/friends.jpg';
import bannerImg1 from '../../assets/images/banner.jpg';
import { AdvantageCard } from "../../components/Card/Card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
    const bannerDatas = [
        {
            id: 1,
            image: bannerImg1,
            showText: true,
            text: <>找到志同道合的室友<br />共享理想居所</>,
        },
        {
            id: 2,
            image: bannerImg1,
            showText: false,
            text: ''
        },
    ]
    
    return (
        <>
            <FilterOffcanvas />
            <Banner datas={bannerDatas} />
            <section className="py-5">
                <div className="container">
                    <div className="row row-cols-1 row-cols-lg-2 gx-0 gy-3 ">
                        <div className="col text-center d-flex flex-column justify-content-center">
                            <h1>合租室友及房源</h1>
                            <h3>更低租金、更大空間、生活更舒適</h3>
                            <h5>你可以搜尋合適的室友及房間</h5>
                        </div>
                        <div className="col ">
                            <figure>
                                <img src={friends1} className="object-cover w-100  rounded" alt="" />
                            </figure>
                        </div>
                    </div>
                </div>

            </section>
            <section className="py-5 bg-primary">
                <div className="container">
                    <h1 className="text-center text-white mb-5">合租好處</h1>
                    <div className="row row-cols-1 row-cols-md-2 gx-md-5 gy-5">
                        <div data-aos="fade-down"
                            className="col">
                            <AdvantageCard
                                num={'01'}
                                icon={'bi bi-coin'}
                                title={'減少房租壓力'}
                                content={'透過合租，你可以與室友共同分擔租金，節省租屋成本。'}
                            />
                        </div>
                        <div data-aos="fade-down" className="col">
                            <AdvantageCard
                                num={'02'}
                                icon={'bi bi-arrows-angle-expand'}
                                title={'更大更舒適的空間'}
                                content={'以相對合理的費用享受更寬敞、舒適的居住環境，也能享受更多的個人和公共空間。'} />
                        </div>
                        <div data-aos="fade-down" className="col">
                            <AdvantageCard
                                num={'03'}
                                icon={'bi bi-person-plus'}
                                title={'豐富您的生活'}
                                content={'與室友一同生活，相互幫忙，分享彼此生活經歷，您的生活將會更加豐富。'} />
                        </div>
                        <div data-aos="fade-down" className="col">
                            <AdvantageCard
                                num={'04'}
                                icon={'bi bi-book'}
                                title={'學習新技能'}
                                content={'與來自不同背景的室友同住，可以學習到新的文化或技能，增長見識。'} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}