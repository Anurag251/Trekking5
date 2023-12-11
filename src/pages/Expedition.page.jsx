/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";
import PageBannerComponent from "../components/PageBanner.component";
import image from "../assets/images/trekking_peaks.webp";

const ExpeditionPage = () => {
  const { categoriesDatas } = useContext(AllDataContext);

  return (
    <div className="MountainOFKnowledge">
      <PageBannerComponent image={image} contentLeft="PEAK CLIMBING IN NEPAL">
        Trekking Peaks
      </PageBannerComponent>
      <section className="bg-color">
        <div className="wrapper">
          <div className="list">
            {categoriesDatas?.map((data, idx) => (
              <Link to={`/expedition-details/${data?.slug}`} key={idx}>
                <div className="item">
                  <div className="image-area">
                    <img
                      src={data?.image?.original_image}
                      alt={data?.category_name}
                    />
                  </div>

                  <div className="content">
                    <div className="name">{data?.category_name}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExpeditionPage;
