import { useContext, useEffect, useState } from "react";
import PageBannerComponent from "../components/PageBanner.component";
import { useLocation } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";
import NewPackageCardComponent from "../components/NewPackageCard.component";

import LoadingComponent from "../components/Loading.component";

const ExpeditionDetailsPage = () => {
  const { categoriesDatas } = useContext(AllDataContext);
  const [selectedData, setSelectedData] = useState(null);

  const location = useLocation();

  useEffect(() => {
    categoriesDatas?.forEach((data) => {
      if (data.slug === location.pathname.split("/")[2]) {
        setSelectedData(data);
      }
    });
  }, [categoriesDatas, location.pathname]);

  return (
    <div className="ToursInNepalPage">
      {/*  <PageBannerComponent
        image={
          location.pathname.split("/")[2] === "nepal"
            ? nepalImage
            : location.pathname.split("/")[2] === "bhutan"
            ? bhutanImage
            : location.pathname.split("/")[2] === "tibet"
            ? tibetImage
            : null
        }
      >
        Trekking Package in {location.pathname.split("/")[2]}
      </PageBannerComponent> */}

      <PageBannerComponent image={selectedData?.image?.original_image}>
        Trekking Package in {selectedData?.category_name}
      </PageBannerComponent>

      <div className="AdVentuRes">
        <section>
          <div className="wrapper">
            <div className="list">
              {selectedData !== null ? (
                selectedData?.trips?.length !== 0 ? (
                  selectedData?.trips?.map((data, idx) => (
                    <NewPackageCardComponent key={idx} data={data} />
                  ))
                ) : (
                  <h3>No Data Found</h3>
                )
              ) : (
                <LoadingComponent />
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ExpeditionDetailsPage;
