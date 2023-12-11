import React from "react";
import FlexibilityPromiseComponent from "../components/FlexibilityPromise.component";
import BreconMountainRescueComponent from "../components/BreconMountainRescue.component";
import PageBannerComponent from "../components/PageBanner.component";

const FlexibilityPromisePage = () => {
  return (
    <div className="FlexibilityPromisePage">
      <PageBannerComponent image="https://i.assetzen.net/i/Cull2QUZyWCT/w:1920/h:500/q:70.webp">
        flexibility promise
      </PageBannerComponent>

      <section>
        <div className="wrapper">
          <div className="FlexibilityPromiseList">
            <FlexibilityPromiseComponent />
          </div>
        </div>
      </section>

      <BreconMountainRescueComponent />
    </div>
  );
};

export default FlexibilityPromisePage;
