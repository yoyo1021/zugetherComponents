import { Link } from 'react-router-dom';
import './cardswiper.scss';

/// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// import required modules
import { EffectCoverflow, Pagination, Mousewheel } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


export function CardSwiper({ AticleDatas }) {
    let enabled = 0;
    AticleDatas.forEach(a => {
        if(a.enabled){
            enabled++
        }
    });
    return (
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.5}
            loop={enabled>3?true:false}
            direction={'vertical'}

            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            }}
            pagination={true}
            breakpoints={{
                768: {
                    slidesPerView:2,
                    direction: 'horizontal', // 平板及以上水平滑动
                    mousewheel: true
                },
                1200: {
                    slidesPerView: 2,
                    direction: 'horizontal', // 平板及以上水平滑动
                }
            }}
            on={{
                init: function (swiper) {
                    if (window.innerWidth < 768) {
                        swiper.changeDirection('vertical'); // 手机端垂直滑动
                    }
                },
                resize: function (swiper) {
                    if (window.innerWidth < 768) {
                        swiper.changeDirection('vertical'); // 调整窗口尺寸时，确保手机端仍为垂直滑动
                    } else {
                        swiper.changeDirection('horizontal'); // 调整窗口尺寸时，平板及以上保持水平滑动
                    }
                },
            }}
            modules={[EffectCoverflow, Pagination, Mousewheel]}
            className="mySwiper"
        >
            {AticleDatas.map((article, i) => {
                return (
                    article.enabled &&
                    <SwiperSlide key={i}>
                        <Link to={`/articles/${article.articleId}`}>
                            <div className="card"  style={{ width:'400px' }}>
                                <img src={`data:image/jpeg;base64,${article.photo}`} className="card-img-top object-cover" alt={article.title} style={{height:"300px"}}/>
                                <div className="card-body">
                                    <h5 className="card-title">{article.title}</h5>
                                </div>
                            </div>
                        </Link>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    )
}