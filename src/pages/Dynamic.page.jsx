import { useContext, useEffect, useState } from "react";
import PageBannerComponent from "../components/PageBanner.component";
import { AllDataContext } from "../context/AllData.context";
import NewPackageCardComponent from "../components/NewPackageCard.component";
import image from "../assets/images/trekking_peaks.webp";
import { useLocation } from "react-router-dom";

const DynamicPage = () => {
  const { categoriesDatas } = useContext(AllDataContext);
  const location = useLocation();

  const [selectedData, setSelectedData] = useState(null);

  useEffect(() => {
    setSelectedData(null);
    categoriesDatas?.forEach((data) => {
      if (data.slug === location.pathname.split("/")[1]) {
        setSelectedData(data);
      }
    });
  }, [categoriesDatas, location.pathname]);

  return (
    <div className="TrekkingInNepalPage">
      <PageBannerComponent
        image={
          selectedData?.image !== null
            ? selectedData?.image?.original_image
            : image
        }
      >
        {location.pathname.split("/")[1].replace(/-/g, " ")}
      </PageBannerComponent>

      <div className="AdVentuRes">
        <section>
          <div className="wrapper">
            <div className="list">
              {selectedData &&
                selectedData?.trips?.map((data, idx) => (
                  <NewPackageCardComponent key={idx} data={data} />
                ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DynamicPage;
