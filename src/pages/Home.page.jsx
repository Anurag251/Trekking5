import BannerComponent from "../components/Banner.component";
import TestinomialComponent from "../components/Testinomial.component";
import WhyChooseUsComponent from "../components/WhyChooseUs.component";
import MountainOFKnowledgeComponent from "../components/MountainOFKnowledge.component";
import AdVentuResComponent from "../components/AdVentuRes.component";
import SacredCommunityComponent from "../components/SacredCommunity.component";
import HelpfulYetisComponent from "../components/HelpfulYetis.component";
import AboutSacredComponent from "../components/AboutSacred.component";
import SearchBoxComponent from "../components/SearchBox.component";
import VideoBannerComponent from "../components/VideoBanner.component";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const HomePage = () => {
  const {
    bannerDatas,
    tripDatas,
    aboutDetails,
    categoriesDatas,
    blogDatas,
    videoDatas,
    whyChooseUs,
    reviewDatas,
    teamDatas,
    contactDatas,
  } = useContext(AllDataContext);

  const currentYear = new Date().getFullYear();

  console.log(tripDatas);

  return (
    <div className="home-page">
      {bannerDatas?.length ? <BannerComponent /> : null}
      {tripDatas?.length ? <SearchBoxComponent /> : null}

      {aboutDetails?.length ? <AboutSacredComponent /> : null}

      {tripDatas?.length ? (
        <AdVentuResComponent
          title={`${contactDatas?.branding?.adventure_title1} ${currentYear}`}
          subTitle={contactDatas?.branding?.adventure_title2}
          pageName="trekking"
        />
      ) : null}

      {categoriesDatas?.length ? (
        <MountainOFKnowledgeComponent
          title={contactDatas?.branding?.activities_title1}
          subTitle={contactDatas?.branding?.activities_title2}
          link="/activities"
        />
      ) : null}

      {tripDatas?.length ? (
        <AdVentuResComponent
          title={contactDatas?.branding?.recommend_title1}
          subTitle={contactDatas?.branding?.recommend_title2}
          pageName="mountaineering-expedition"
          mountain
        />
      ) : null}

      {blogDatas?.length ? (
        <SacredCommunityComponent
          title={contactDatas?.branding?.blogs1}
          subTitle={contactDatas?.branding?.blogs2}
        />
      ) : null}

      {videoDatas !== null && videoDatas !== undefined ? (
        <VideoBannerComponent />
      ) : null}

      {whyChooseUs?.length ? (
        <WhyChooseUsComponent
          title={contactDatas?.branding?.whyCamp2summit1}
          subTitle={contactDatas?.branding?.whyCamp2summit2}
        />
      ) : null}

      {reviewDatas?.length ? (
        <TestinomialComponent
          title={contactDatas?.branding?.review_title1}
          subTitle={contactDatas?.branding?.review_title2}
        />
      ) : null}

      {teamDatas?.length ? (
        <HelpfulYetisComponent
          title={contactDatas?.branding?.team1}
          subTitle={contactDatas?.branding?.team2}
        />
      ) : null}
    </div>
  );
};

export default HomePage;
