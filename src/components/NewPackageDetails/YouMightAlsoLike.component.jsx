/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import image from "../../assets/images/trekking_peaks.webp";
import PageBannerComponent from "../PageBanner.component";
import NewPackageCardComponent from "../NewPackageCard.component";
import { AllDataContext } from "../../context/AllData.context";

const YouMightAlsoLikeComponent = ({ data }) => {
  const { tripDatas, contactDatas, categoriesDatas } =
    useContext(AllDataContext);

  const [similarData, setSimilarData] = useState(null);

  useEffect(() => {
    categoriesDatas?.forEach((category) => {
      category.trips.forEach((trip) => {
        if (trip.slug === data.slug) {
          setSimilarData(category);
          console.log(category);
        }
      });
    });
  }, [categoriesDatas]);

  return (
    <div className="TrekkingInNepalPage">
      <div className="AdVentuRes">
        <section style={{ backgroundColor: "#F7F7F7" }}>
          <div className="wrapper">
            <div className="title-part">
              <div className="name">
                {contactDatas?.branding?.similar_title1}
              </div>
              <h5>{contactDatas?.branding?.similar_title2}</h5>
            </div>
            <div className="list">
              {similarData &&
                similarData.trips
                  ?.filter((trip) => trip.id !== data.id)
                  .filter((trip, idx) => idx < 6)
                  .map((trip, idx) => (
                    <NewPackageCardComponent key={idx} data={trip} />
                  ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default YouMightAlsoLikeComponent;
