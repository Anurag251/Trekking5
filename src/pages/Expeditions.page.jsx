import { Link } from "react-router-dom";
import PageBannerComponent from "../components/PageBanner.component";
import TrekkingRegionsWorldwideComponent from "../components/TrekkingRegionsWorldwide.component";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const ExpeditionsPage = () => {
  const { countryDatas } = useContext(AllDataContext);

  return (
    <div className="Destinations">
      <PageBannerComponent
        contentLeft="View All Our"
        image="https://8kexpeditions.com/uploads/pages/page-1643970709.JPG"
      >
        Expeditions
      </PageBannerComponent>

      <TrekkingRegionsWorldwideComponent datas={countryDatas} />
    </div>
  );
};

export default ExpeditionsPage;
