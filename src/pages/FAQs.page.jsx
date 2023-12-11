/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import ItineraryCardComponent from "../components/NewPackageDetails/ItineraryCard.component";
import PageBannerComponent from "../components/PageBanner.component";
import image from "../assets/images/trekking_peaks.webp";

const FAQsPage = () => {
  const { aboutDetails } = useContext(AllDataContext);

  return (
    <div className={`ItinerarySection active`}>
      <PageBannerComponent image={image}>FAQ's</PageBannerComponent>
      <section>
        <div className="wrapper">
          <div className="main-title" style={{ marginTop: "2rem" }}>
            FAQ's <i className="fas fa-angle-down"></i>
          </div>

          <div className="inner-details">
            <div className="main-container">
              <div className="all-list">
                {aboutDetails &&
                  aboutDetails
                    .filter((data) => data.page_type === 4)
                    .map((data) =>
                      data.contents?.map((data, idx) => (
                        <ItineraryCardComponent
                          data={data}
                          key={idx}
                          index={idx}
                          faq
                        />
                      ))
                    )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQsPage;
