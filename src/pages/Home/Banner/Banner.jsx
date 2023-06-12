import { Swiper, SwiperSlide } from "swiper/react";
import "./Banner.css";
import slide1 from "../../../assets/images/slide1.jpg";
import slide2 from "../../../assets/images/slide2.jpg";
import slide3 from "../../../assets/images/slide3.jpg";
import slide4 from "../../../assets/images/slide4.jpg";
import slide5 from "../../../assets/images/slide5.jpg";
import slide6 from "../../../assets/images/slide6.jpg";
import slide7 from "../../../assets/images/slide7.jpg";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination, Navigation } from "swiper";
import BannerSlide from "./BannerSlide";

const Banner = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <BannerSlide slide={slide1}></BannerSlide>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlide slide={slide2}></BannerSlide>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlide slide={slide3}></BannerSlide>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlide slide={slide4}></BannerSlide>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlide slide={slide5}></BannerSlide>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlide slide={slide6}></BannerSlide>
        </SwiperSlide>
        <SwiperSlide>
          <BannerSlide slide={slide7}></BannerSlide>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;
