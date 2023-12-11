/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";
import PageBannerComponent from "../components/PageBanner.component";
import image from "../assets/images/trekking_peaks.webp";

const DestinationPage = ({ activities, subTitle, title }) => {
  const { countryDatas, categoriesDatas } = useContext(AllDataContext);

  return (
    <div className="MountainOFKnowledge">
      <PageBannerComponent image={image} contentLeft={subTitle}>
        {title}
      </PageBannerComponent>

      <section className="bg-color">
        <div className="wrapper">
          <div className="list">
            {activities
              ? categoriesDatas?.map((data, idx) => (
                  <Link to={`/${data?.slug}`} key={idx}>
                    <div className="item">
                      <div className="image-area">
                        <img src={data?.image?.original_image} alt={data?.category_name} />
                      </div>

                      <div className="content">
                        <div className="name" title={data?.category_name}>
                          {data?.category_name}
                        </div>
                      </div>
                    </div>
                  </Link>
                ))
              : countryDatas?.map((data, idx) => (
                  <Link
                    to={`/destination-details/${data?.country_name
                      ?.toLowerCase()
                      .replace(/ /g, "-")}`}
                    key={idx}
                  >
                    <div className="item">
                      <div className="image-area">
                        <img src={data?.icon} alt={data?.country_name} />
                      </div>

                      <div className="content">
                        <div className="name" title={data?.country_name}>
                          {data?.country_name}
                        </div>
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

export default DestinationPage;
