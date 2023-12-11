import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { FreeMode } from "swiper";

import { Autoplay } from "swiper";

import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const CertificatesPartnersComponent = () => {
  const { reviewDatas } = useContext(AllDataContext);

  return (
    <div className="CertificatesPartners">
      <section>
        <div className="wrapper">
          <div className="title-part">
            <div className="name">Certificates & Partners</div>
            <h5>Our Latest News and Promotions</h5>
          </div>

          <div className="list">
            <Swiper
              slidesPerView={"auto"}
              spaceBetween={10}
              speed={1000}
              freeMode={true}
              autoplay={{
                delay: 4500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, FreeMode]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div className="item">
                  <img
                    src="https://luxuryholidaynepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnepal-goverment.c0cead5d.png&w=96&q=75"
                    alt="user-image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <img
                    src="https://luxuryholidaynepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fntb.20cc59e8.png&w=96&q=75"
                    alt="user-image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <img
                    src="https://luxuryholidaynepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftaan.06f60855.png&w=64&q=75"
                    alt="user-image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <img
                    src="https://luxuryholidaynepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fnma.006f2806.png&w=96&q=75"
                    alt="user-image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <img
                    src="https://luxuryholidaynepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ftripadvisor.301d58fa.png&w=256&q=75"
                    alt="user-image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <img
                    src="https://luxuryholidaynepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-tour-radar.8dfc1749.png&w=256&q=75"
                    alt="user-image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <img
                    src="https://luxuryholidaynepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-viator.769739cb.png&w=128&q=75"
                    alt="user-image"
                  />
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="item">
                  <img
                    src="https://luxuryholidaynepal.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbookmundi.2794f0cb.png&w=256&q=75"
                    alt="user-image"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificatesPartnersComponent;
