import { AddressSelect } from "../../components/Select/Select";
import FilterOffcanvas from "../../components/Offcanvas/FilterOffcanvas";
import Banner from "../../components/Banner/Banner";
import friends1 from '../../assets/images/friends.jpg';
import bannerImg1 from '../../assets/images/banner.jpg';
export default function Home() {
    const bannerDatas = [
        {
          id: 1,
          image: bannerImg1,
          showText:true,
          text:<>找到志同道合的室友<br/>共享理想居所</>,
        },
        {
            id: 2,
            image: bannerImg1,
            showText:false,
            text:''
          },
      ]
    return (
        <>
            {/* <AddressSelect /> */}
            <FilterOffcanvas/>
            <Banner datas={bannerDatas}/>
            <section className="py-5">
                <div className="row row-cols-1 row-cols-lg-2 g-0 ">
                    <div className="col text-center d-flex flex-column justify-content-center">
                        <h1>合租室友及房源</h1>
                        <h3>更低租金、更大空間、生活更舒適</h3>
                        <h5>你可以搜尋合適的室友及房間</h5>
                    </div>
                    <div className="col d-none d-lg-block">
                        <div>
                            <img src={friends1} className="object-cover  rounded" alt="" style={{ height: '350px' }} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}