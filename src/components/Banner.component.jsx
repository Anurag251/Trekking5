import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import { Autoplay, EffectFade, Navigation } from "swiper";

import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const BannerComponent = () => {
  const { bannerDatas } = useContext(AllDataContext);

  return (
    <div className="banner">
      <Swiper
        slidesPerView={1}
        effect="fade"
        centeredSlides={true}
        navigation={true}
        speed={1000}
        autoplay={{
          delay: 7500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade, Navigation]}
        className="mySwiper"
      >
        {bannerDatas &&
          bannerDatas.map((data, idx) => (
            <SwiperSlide key={idx}>
              <div className="item">
                <div className="slider-image">
                  <img src={data?.image?.original_image} alt={data?.title} />
                </div>
                <div className="wrapper">
                  <div className="content-area">
                    <h2>{data?.title}</h2>
                    <p>{data?.smalltitle}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default BannerComponent;
