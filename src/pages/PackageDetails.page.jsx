import React, { useContext, useEffect, useRef, useState } from "react";

import { AllDataContext } from "../context/AllData.context";
import { useLocation } from "react-router-dom";
import PackageDetailComponent from "../components/PackageDetail/PackageDetail.component";

export const PackageDetails = () => {
  const { tripDatas } = useContext(AllDataContext);

  const [selectedData, setSelectedData] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (tripDatas !== null) {
      tripDatas.forEach((data) => {
        if (location.pathname.split("/")[2] == data.id) {
          setSelectedData(data);
        }
      });
    }
  }, [location, tripDatas]);

  return (
    <section className="other-page">
      {selectedData && (
        <div className="wrapper">
          <PackageDetailComponent selectedData={selectedData} />
        </div>
      )}
    </section>
  );
};
