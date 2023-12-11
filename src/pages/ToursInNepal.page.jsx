import React, { useContext } from "react";
import PageBannerComponent from "../components/PageBanner.component";
import { Link } from "react-router-dom";
import BloggingCardComponent from "../components/Blogging/BloggingCard.component";
import BloggingBigCardComponsnt from "../components/Blogging/BloggingBigCard.componsnt";
import { AllDataContext } from "../context/AllData.context";
import NewPackageCardComponent from "../components/NewPackageCard.component";

const ToursInNepalPage = () => {
  const { tripDatas } = useContext(AllDataContext);

  return (
    <div className="ToursInNepalPage">
      <PageBannerComponent image="https://i.assetzen.net/i/JPlzqpfxRxey/w:1920/h:600/q:70.webp">
        tours in Nepal
      </PageBannerComponent>

      <div className="AdVentuRes">
        <section>
          <div className="wrapper">
            <div className="list">
              {tripDatas &&
                tripDatas.map((data, idx) => (
                  <NewPackageCardComponent key={idx} data={data} />
                ))}
            </div>

            <div className="package-footer">
              <h2>
                Secure your <span>lifetime deposit</span> today
              </h2>

              <p>
                Book onto a TREK. Once you pay your deposit, it NEVER expires!
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ToursInNepalPage;
