/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";

import { Autoplay } from "swiper";

import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import { Link } from "react-router-dom";

const OurPartnersComponent = ({ title }) => {
  const { partnersDatas } = useContext(AllDataContext);
  if (partnersDatas?.length) {
    return (
      <div className="OurPartners">
        <section>
          <div className="wrapper">
            <div className="title-part">
              <div className="name" style={{ textAlign: "left" }}>
                {title}
              </div>
            </div>

            <div className="list">
              <Swiper
                slidesPerView={2}
                spaceBetween={10}
                speed={1000}
                autoplay={{
                  delay: 4500,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  640: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                  768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                  1024: {
                    slidesPerView: 5,
                    spaceBetween: 30,
                  },
                }}
                modules={[Autoplay, FreeMode]}
                className="mySwiper"
              >
                {partnersDatas &&
                  partnersDatas?.map((data, idx) => (
                    <SwiperSlide key={idx}>
                      <Link to={data.link} title={data.title} target="blank">
                        <div className="item">
                          <img src={data?.image} alt={data.title} />
                        </div>
                      </Link>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default OurPartnersComponent;
