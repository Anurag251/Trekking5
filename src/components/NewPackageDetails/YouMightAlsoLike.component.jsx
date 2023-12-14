/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import NewPackageCardComponent from "../NewPackageCard.component";
import { AllDataContext } from "../../context/AllData.context";

const YouMightAlsoLikeComponent = ({ data }) => {
  const { contactDatas, categoriesDatas } = useContext(AllDataContext);

  const [similarData, setSimilarData] = useState(null);

  useEffect(() => {
    categoriesDatas?.forEach((category) => {
      if (data.category[0].slug === category.slug) {
        setSimilarData(category);
      }
    });
  }, [categoriesDatas]);

  if (similarData !== null && similarData.trips.length > 1) {
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
                    ?.filter((trip) => trip.slug !== data.slug)
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
  }
};

export default YouMightAlsoLikeComponent;
