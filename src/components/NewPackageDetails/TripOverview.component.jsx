/* eslint-disable react/prop-types */
import React, { useContext, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";
import PackageMainDetailsComponent from "./PackageMainDetails.component";

const TripOverviewComponent = ({ data }) => {
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);

  return (
    <div
      className={`TripOverview ${
        detailsPageNav === "Overview" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div
            className={`inner-details-button ${
              detailsPageNav === "Overview" ? "show-details" : ""
            }`}
          >
            <div
              className="main-title"
              onClick={() => {
                window.scroll(0, 370);
                setDetailsPageNav("Overview");
              }}
            >
              trip overview <i className="fas fa-angle-down"></i>
            </div>

            <div className="inner-details">
              <div className="main-container">
                <div className="TripOverviewMainContent">
                  {data.content !== null &&
                  data.content !== undefined &&
                  data.content !== "" ? (
                    <p
                      className="desc"
                      dangerouslySetInnerHTML={{
                        __html: data.content,
                      }}
                    />
                  ) : null}

                  <PackageMainDetailsComponent data={data} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TripOverviewComponent;
