import React, { useContext, useEffect, useState } from "react";
import PageBannerComponent from "../components/PageBanner.component";
import { Link, useLocation } from "react-router-dom";
import BloggingCardComponent from "../components/Blogging/BloggingCard.component";
import BloggingBigCardComponsnt from "../components/Blogging/BloggingBigCard.componsnt";
import { AllDataContext } from "../context/AllData.context";
import NewPackageCardComponent from "../components/NewPackageCard.component";

import nepalImage from "../assets/images/nepal.webp";
import bhutanImage from "../assets/images/bhutan.jpeg";
import tibetImage from "../assets/images/tibet.jpeg";
import LoadingComponent from "../components/Loading.component";

const DestinationDetailsPage = () => {
  const { tripDatas, countryDatas } = useContext(AllDataContext);
  const [selectedData, setSelectedData] = useState(null);

  const location = useLocation();

  useEffect(() => {
    countryDatas?.forEach((data) => {
      if (data.country_name.toLowerCase() === location.pathname.split("/")[2]) {
        setSelectedData(data);
      }
    });
  }, [countryDatas, location.pathname]);

  return (
    <div className="ToursInNepalPage">
      {/*  <PageBannerComponent
        image={
          location.pathname.split("/")[2] === "nepal"
            ? nepalImage
            : location.pathname.split("/")[2] === "bhutan"
            ? bhutanImage
            : location.pathname.split("/")[2] === "tibet"
            ? tibetImage
            : null
        }
      >
        Trekking Package in {location.pathname.split("/")[2]}
      </PageBannerComponent> */}

      <PageBannerComponent image={selectedData?.icon}>
        Trekking Package in {selectedData?.country_name}
      </PageBannerComponent>

      <div className="AdVentuRes">
        <section>
          <div className="wrapper">
            <div className="list">
              {tripDatas !== null ? (
                tripDatas.length !== 0 ? (
                  tripDatas
                    .filter(
                      (data) =>
                        data.country.toLowerCase() ===
                        location.pathname.split("/")[2]
                    )
                    .map((data, idx) => (
                      <NewPackageCardComponent key={idx} data={data} />
                    ))
                ) : (
                  <h3>No Data Found</h3>
                )
              ) : (
                <LoadingComponent />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DestinationDetailsPage;
