/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper";

import { useContext, useEffect, useRef, useState } from "react";
import { AllDataContext } from "../context/AllData.context";
import { Link } from "react-router-dom";
import HtmlToParagraphs from "./HtmlToParagraphs.component";
import TestimonialCardComponent from "./TestimonialCard.component";

const TestinomialComponent = ({ title, subTitle }) => {
  const { reviewDatas } = useContext(AllDataContext);
  const [paragraphLength, setParagraphLength] = useState(300);

  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = swiperRef.current.swiper;

      swiper.el.addEventListener("mouseenter", () => {
        try {
          swiper.autoplay.stop();
        } catch (err) {
          //(err);
        }
      });

      swiper.el.addEventListener("mouseleave", () => {
        try {
          swiper.autoplay.start();
        } catch (err) {
          //(err);
        }
      });
    }
  }, [reviewDatas]);

  return (
    <section>
      <div className="wrapper">
        <div className="title-part">
          <div className="name">{title}</div>
          <h5>{subTitle}</h5>
        </div>

        <div className="testinomial">
          <Swiper
            ref={swiperRef}
            slidesPerView={1}
            speed={1000}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
            }}
            navigation={true}
            modules={[Autoplay, Navigation]}
            className="mySwiper"
          >
            {reviewDatas &&
              reviewDatas.map((data, idx) => (
                <SwiperSlide key={idx}>
                  <TestimonialCardComponent data={data} />
                </SwiperSlide>
              ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default TestinomialComponent;
