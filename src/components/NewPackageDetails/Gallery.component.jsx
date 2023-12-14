import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Navigation } from "swiper";
import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const GalleryComponent = ({ data }) => {
  const { galleryDatas } = useContext(AllDataContext);
  return (
    <div className="GallerySection" id="gallerySec">
      <section>
        <div className="wrapper">
          <div className="title-part">
            <div className="name">gallery</div>
          </div>

          <div className="gallery-area">
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              loop={true}
              speed={1000}
              pagination={{
                clickable: true,
              }}
              navigation={true}
              modules={[Pagination, Navigation]}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
              className="mySwiper"
            >
              {galleryDatas &&
                data?.galleryimage?.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={image.originalimage} alt="" />
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GalleryComponent;
