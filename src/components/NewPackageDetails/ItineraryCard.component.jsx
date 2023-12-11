/* eslint-disable react/prop-types */

import { useState } from "react";

const ItineraryCardComponent = ({ data, faq, index }) => {
  const [itinerary, setItinerary] = useState(false);

  return (
    <div className={`ItineraryCardComponent ${itinerary ? "active" : null}`}>
      <div className="item-title" onClick={() => setItinerary(!itinerary)}>
        <div className="name">
          <div className="indicator">{index + 1}</div>
          {faq ? data.text : data.trip_title}{" "}
        </div>
        <div className="arrow">
          <i className="fas fa-angle-down"></i>
        </div>
      </div>
      
      <div className="item-body">
        <p
          className="desc"
          dangerouslySetInnerHTML={{
            __html: data && faq ? data.content : data.trip_details,
          }}
        />
      </div>
    </div>
  );
};

export default ItineraryCardComponent;
