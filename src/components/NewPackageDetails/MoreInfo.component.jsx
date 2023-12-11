/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const MoreInfoComponent = ({ data }) => {
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);

  return (
    <div
      className={`MoreInfoSection includeExcludes ${
        detailsPageNav === "Includes & Excludes" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div
            className={`inner-details-button ${
              detailsPageNav === "Includes & Excludes" ? "show-details" : ""
            }`}
          >
            <div
              className="main-title"
              onClick={() => {
                window.scroll(0, 370);
                setDetailsPageNav("Includes & Excludes");
              }}
            >
              Includes & Excludes <i className="fas fa-angle-down"></i>
            </div>

            <div className="inner-details">
              <div className="main-container">
                <div className="TripOverviewMainContent">
                  <div className="IncludesArea">
                    <h2>Includes</h2>

                    <p
                      className="desc"
                      dangerouslySetInnerHTML={{
                        __html: data?.include,
                      }}
                    />
                  </div>

                  <div className="ExcludeArea">
                    <h2>Exclude</h2>

                    <p
                      className="desc"
                      dangerouslySetInnerHTML={{
                        __html: data?.exclude,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MoreInfoComponent;
