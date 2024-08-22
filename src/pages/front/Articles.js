import PageTitle from "../../components/PageTitle/PageTitle";

/// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import '../../style/swiper.scss'

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Articles() {
    return (
        <section className="articles container py-5 d-flex flex-column align-items-center">
            <PageTitle title={'文章區'} />

            <Swiper
                effect={'coverflow'}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1.5}
                loop={true}
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
                    768:{
                        slidesPerView:2.5,
                        direction: 'horizontal', // 平板及以上水平滑动
                    },
                    1200:{
                        slidesPerView:3,
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
                modules={[EffectCoverflow, Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="card w-100" style={{ width: '18rem' }}>
                        <img src="https://images.unsplash.com/photo-1634954156587-45fcb6564120?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top object-cover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-100" style={{ width: '18rem' }}>
                        <img src="https://images.unsplash.com/photo-1634954156587-45fcb6564120?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top object-cover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-100" style={{ width: '18rem' }}>
                        <img src="https://images.unsplash.com/photo-1634954156587-45fcb6564120?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top object-cover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-100" style={{ width: '18rem' }}>
                        <img src="https://images.unsplash.com/photo-1634954156587-45fcb6564120?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top object-cover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-100" style={{ width: '18rem' }}>
                        <img src="https://images.unsplash.com/photo-1634954156587-45fcb6564120?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top object-cover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-100" style={{ width: '18rem' }}>
                        <img src="https://images.unsplash.com/photo-1634954156587-45fcb6564120?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top object-cover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card w-100" style={{ width: '18rem' }}>
                        <img src="https://images.unsplash.com/photo-1634954156587-45fcb6564120?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top object-cover" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section >
    )
}