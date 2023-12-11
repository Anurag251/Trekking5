/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";
import HtmlToParagraphs from "../HtmlToParagraphs.component";
import ItineraryCardComponent from "./ItineraryCard.component";
import { useLocation } from "react-router-dom";

const ItineraryComponent = ({ data }) => {
  const { detailsPageNav, setDetailsPageNav } = useContext(AllDataContext);
  const [selectedItinerary, setSelectedItinerary] = useState(
    data?.itenarydetails[0]?.trip_title
  );
  const location = useLocation();

  useEffect(() => {
    setSelectedItinerary(data?.itenarydetails[0]?.trip_title);
  }, [location.pathname, data]);

  return (
    <div
      className={`ItinerarySection ${
        detailsPageNav === "Itinerary" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div
            className={`inner-details-button ${
              detailsPageNav === "Itinerary" ? "show-details" : ""
            }`}
          >
            <div
              className="main-title"
              onClick={() => {
                window.scroll(0, 370);
                setDetailsPageNav("Itinerary");
              }}
            >
              Itinerary <i className="fas fa-angle-down"></i>
            </div>

            <div className="inner-details">
              <div className="main-container">
                <div className="all-list">
                  {data.itenarydetails.map((itinerary, idx) => (
                    <div
                      key={idx}
                      className={`ItineraryCardComponent ${
                        selectedItinerary === itinerary.trip_title
                          ? "active"
                          : ""
                      }`}
                    >
                      <div
                        className="item-title"
                        onClick={() =>
                          setSelectedItinerary(itinerary.trip_title)
                        }
                      >
                        <div className="name">
                          <div className="indicator">{idx + 1}</div>
                          {itinerary.trip_title}{" "}
                        </div>
                        <div className="arrow">
                          <i className="fas fa-angle-down"></i>
                        </div>
                      </div>

                      <div className="item-body">
                        <p
                          className="desc"
                          dangerouslySetInnerHTML={{
                            __html: itinerary && itinerary.trip_details,
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItineraryComponent;
