import { useContext, useEffect, useRef } from "react";
import { AllDataContext } from "../../context/AllData.context";
import { useLocation } from "react-router-dom";

const NavigateButtonsComponent = ({ data }) => {
  const location = useLocation();
  const buttonListRef = useRef();
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);

  useEffect(() => {
    if (buttonListRef.current) {
      const allButton = buttonListRef.current.querySelectorAll(".navigateBtn");
      setTimeout(() => {
        setDetailsPageNav(allButton[0].innerText);
      }, 1000);
    }
  }, [buttonListRef, location.pathname]);

  return (
    <div className="NavigateButtons">
      <div className="wrapper">
        <div className="button-list" ref={buttonListRef}>
          {(data.content !== null &&
            data.content !== undefined &&
            data.content !== "") ||
          (data?.groupsize !== null && data?.groupsize !== "") ||
          (data?.elevation !== null && data?.elevation !== "") ||
          (data?.duration !== null && data?.duration !== "") ||
          (data?.finalprice !== null && data?.finalprice !== "") ||
          (data?.season !== null && data?.season !== "") ||
          (data?.startfrom !== null && data?.startfrom !== "") ? (
            <button
              className={`navigateBtn ${
                detailsPageNav === "Overview" ? "active" : ""
              }`}
              onClick={() => {
                window.scroll(0, 470);
                setDetailsPageNav("Overview");
              }}
            >
              Overview
            </button>
          ) : null}
          {(data.itenarydetails !== null &&
            data.itenarydetails !== undefined) ||
          data.itenarydetails.length ? (
            data.itenarydetails[0]?.trip_title !== null ? (
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
            ) : null
          ) : null}
          {(data.exclude !== null || data.include !== null) &&
          (data.exclude !== undefined || data.include !== undefined) &&
          (data.exclude !== "" || data.include !== "") ? (
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
          ) : null}

          {(data.price !== null && data.price !== undefined) ||
          data.price.length ? (
            data.price[0]?.date !== null ||
            data.price[0]?.label !== null ||
            data.price[0]?.space !== null ||
            data.price[0]?.value !== null ? (
              <button
                className={`navigateBtn ${
                  detailsPageNav === "Departure Date & Price" ? "active" : ""
                }`}
                onClick={() => {
                  window.scroll(0, 470);
                  setDetailsPageNav("Departure Date & Price");
                }}
              >
                Departure Date & Price
              </button>
            ) : null
          ) : null}
          {data.equipments !== null &&
          data.equipments !== undefined &&
          data.equipments !== "" ? (
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
          ) : null}
          {/* {data.galleryimage !== null &&
          data.galleryimage !== undefined &&
          data.galleryimage.length ? (
            <button
              className={`navigateBtn ${
                detailsPageNav === "Tour Gallery" ? "active" : ""
              }`}
              onClick={() => {
                window.scroll(0, 470);
                setDetailsPageNav("Tour Gallery");
              }}
            >
              Tour Gallery
            </button>
          ) : null} */}
        </div>

        {(data.price !== null && data.price !== undefined) ||
        data.price.length ? (
          data.price[0]?.date !== null ||
          data.price[0]?.label !== null ||
          data.price[0]?.space !== null ||
          data.price[0]?.value !== null ? (
            <div className="last-button">
              <button
                className={`bookNowNutton`}
                onClick={() => {
                  window.scroll(0, 470);
                  setDetailsPageNav("DatePrices");
                }}
              >
                ENQUIRE NOW
              </button>
            </div>
          ) : null
        ) : null}
      </div>
    </div>
  );
};

export default NavigateButtonsComponent;
