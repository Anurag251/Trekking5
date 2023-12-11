import { useContext } from "react";
/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";
import { AllDataContext } from "../context/AllData.context";

const TeamsComponent = () => {
  const { teamDatas } = useContext(AllDataContext);

  return (
    <section className="bg">
      <div className="wrapper">
        <div className="teams">
          <div className="title">Our Teams</div>

          <Swiper
            slidesPerView={1}
            speed={1000}
            navigation={true}
            modules={[Autoplay, Navigation]}
            breakpoints={{
              440: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
            spaceBetween={20}
            className="mySwiper"
          >
            {teamDatas &&
              teamDatas.map((data, idx) => (
                <SwiperSlide key={idx}>
                  <div className="item" key={idx}>
                    <div className="image">
                      <img
                        className="img"
                        src={data.image}
                        alt="profile-image"
                      />
                    </div>
                    <div className="details">
                      <div className="name">{data.name}</div>
                      <div className="info">{data.description}</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TeamsComponent;
