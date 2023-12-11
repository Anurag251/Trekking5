import CardComponent from "./Card.component";

import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const PackageComponent = () => {
  const { tripDatas } = useContext(AllDataContext);

  return (
    <section className="sec-bg">
      <div className="wrapper">
        <div className="special-package">
          <div className="title">TOP Himalaya AdVentuRes</div>

          <div className="list">
            {tripDatas &&
              tripDatas
                .filter((data, idx) => idx < 6)
                .map((data, idx) => (
                  <CardComponent key={idx} cardData={data} />
                ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PackageComponent;
