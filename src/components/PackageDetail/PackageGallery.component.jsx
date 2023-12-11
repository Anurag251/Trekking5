/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

// import required modules
import { FreeMode, Navigation, Thumbs } from "swiper";

const PackageGalleryComponent = ({ selectedData }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="package-details-image">
      <div className="images-sec">
        <div className="image-preview">
          <Swiper
            style={{
              "--swiper-navigation-color": "#fff",
              "--swiper-pagination-color": "#fff",
            }}
            spaceBetween={10}
            navigation={true}
            thumbs={{
              swiper:
                thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
            }}
            modules={[FreeMode, Navigation, Thumbs]}
            className="mySwiper2"
          >
            <SwiperSlide>
              <div className="clickToView">
                <img src={selectedData.image.original_image} />
              </div>
            </SwiperSlide>
            {selectedData.galleryimage.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className="clickToView">
                  <img src={image.originalimage} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="image-btns">
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={10}
            slidesPerView={1}
            freeMode={true}
            watchSlidesProgress={true}
            modules={[FreeMode, Navigation, Thumbs]}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="item">
                <img src={selectedData.image.original_image} />
              </div>
            </SwiperSlide>
            {selectedData.galleryimage.map((image, idx) => (
              <SwiperSlide key={idx}>
                <div className="item">
                  <img src={image.originalimage} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default PackageGalleryComponent;
