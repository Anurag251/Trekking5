import { useContext } from "react";
import PageBannerComponent from "../components/PageBanner.component";
import { AllDataContext } from "../context/AllData.context";
import NewPackageCardComponent from "../components/NewPackageCard.component";
import image from "../assets/images/trekking_peaks.webp";

const TrekkingInNepalPage = () => {
  const { tripDatas } = useContext(AllDataContext);

  return (
    <div className="TrekkingInNepalPage">
      <PageBannerComponent image={image}>
        Mountaineering expeditions
      </PageBannerComponent>

      <div className="AdVentuRes">
        <section>
          <div className="wrapper">
            <div className="list">
              {tripDatas &&
                tripDatas
                  .filter((data) => data.recommended === 1)
                  .map((data, idx) => (
                    <NewPackageCardComponent key={idx} data={data} />
                  ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default TrekkingInNepalPage;
