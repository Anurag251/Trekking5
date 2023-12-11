/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import NewPackageCardComponent from "./NewPackageCard.component";
import { AllDataContext } from "../context/AllData.context";
import { Link, useLocation } from "react-router-dom";

const AdVentuResComponent = ({ title, subTitle, mountain, pageName }) => {
  const { categoriesDatas } = useContext(AllDataContext);
  const location = useLocation();

  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    setSelectedData(null);
    categoriesDatas?.forEach((data) => {
      if (data.slug === pageName) {
        setSelectedData(data);
      }
    });
  }, [categoriesDatas, location.pathname, pageName]);

  return (
    <div className="AdVentuRes">
      <section>
        <div className="wrapper">
          {mountain ? (
            <>
              <div className="title-part">
                <div className="name">{title}</div>
                <h5>{subTitle}</h5>
              </div>

              <div className="list">
                {selectedData &&
                  selectedData?.trips
                    ?.filter((data) => data.category[0].slug === pageName)
                    .filter((data, idx) => idx < 6)
                    .map((data, idx) => (
                      <NewPackageCardComponent key={idx} data={data} />
                    ))}
              </div>
            </>
          ) : (
            <>
              <div className="title-part">
                <div className="name">{title}</div>
                <h5>{subTitle}</h5>
              </div>
              <div className="list">
                {selectedData &&
                  selectedData?.trips
                    ?.filter((data, idx) => idx < 6)
                    .map((data, idx) => (
                      <NewPackageCardComponent key={idx} data={data} />
                    ))}
              </div>
            </>
          )}

          {mountain ? (
            selectedData?.trips?.length > 6 ? (
              <div className="view-all">
                <Link to="/mountaineering-expedition">
                  <button>View All</button>
                </Link>
              </div>
            ) : null
          ) : selectedData?.trips?.length > 6 ? (
            <div className="view-all">
              <Link to="/trekking">
                <button>View All</button>
              </Link>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
};

export default AdVentuResComponent;
