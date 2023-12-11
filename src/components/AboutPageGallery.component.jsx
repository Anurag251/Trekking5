import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";
import { AllDataContext } from "../context/AllData.context";
import { useContext } from "react";

const AboutPageGalleryComponent = () => {
  const { galleryDatas } = useContext(AllDataContext);

  return (
    <div className="AboutPageGallery">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={1000}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
      {galleryDatas?.map((data, idx) => (
        <SwiperSlide key={idx}>
          <img src={data?.original_image} alt={data?.title} />
        </SwiperSlide>
      ))}
      </Swiper>
    </div>
  );
};

export default AboutPageGalleryComponent;
