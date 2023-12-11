import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay } from "swiper";

import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import { useNavigate } from "react-router-dom";

const KnowledgeComponent = () => {
  const { categoriesDatas, setSelectedCate } = useContext(AllDataContext);
  const navigate = useNavigate();

  return (
    <section>
      <div className="knowledge">
        <div className="title">Mountain OF Knowledge</div>

        <Swiper
          slidesPerView={1}
          speed={1000}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper"
        >
          {categoriesDatas &&
            categoriesDatas.map((data, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className="item"
                  style={{
                    backgroundImage: `url(${data.image.original_image})`,
                  }}
                >
                  <div className="details">
                    <h2>{data.category_name}</h2>
                    <p
                      dangerouslySetInnerHTML={{
                        __html: data && data.content,
                      }}
                    />

                    <button
                      onClick={() => {
                        setSelectedCate(data.id);
                        navigate("/search", {
                          state: {
                            searchedData: data.trips,
                          },
                        });
                      }}
                    >
                      Explore
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </section>
  );
};

export default KnowledgeComponent;
