import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const NavigateButtonsComponent = () => {
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);

  return (
    <div className="NavigateButtons">
      <div className="wrapper">
        <div className="button-list">
          <button
            className={`navigateBtn ${
              detailsPageNav === "TripOverview" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 470);
              setDetailsPageNav("TripOverview");
            }}
          >
            Overview
          </button>

          <button
            className={`navigateBtn ${
              detailsPageNav === "Itinerary" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 470);
              setDetailsPageNav("Itinerary");
            }}
          >
            Itinerary
          </button>

          <button
            className={`navigateBtn ${
              detailsPageNav === "Includes & Excludes" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 470);
              setDetailsPageNav("Includes & Excludes");
            }}
          >
            Includes & Excludes
          </button>

          <button
            className={`navigateBtn ${
              detailsPageNav === "DatePrices" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 470);
              setDetailsPageNav("DatePrices");
            }}
          >
            Departure Date & Price
          </button>

          <button
            className={`navigateBtn ${
              detailsPageNav === "Trip Notes" ? "active" : ""
            }`}
            onClick={() => {
              window.scroll(0, 470);
              setDetailsPageNav("Trip Notes");
            }}
          >
            Trip Notes
          </button>
        </div>

        <div className="last-button">
          <button
            className={`bookNowNutton`}
            onClick={() => {
              window.scroll(0, 470);
              setDetailsPageNav("DatePrices");
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavigateButtonsComponent;
