/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";

const PackageBannerComponent = ({ contentLeft, image, children }) => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;

      return (
        <div className="crumb" key={crumb}>
          /{crumb}
        </div>
      );
    });

  return (
    <div className="PageBanner" style={{ backgroundImage: `url(${image})` }}>
      <div className="wrapper">
        {contentLeft ? <h4>{contentLeft}</h4> : null}
        <h1 className={contentLeft ? "contentLeft" : ""}>{children}</h1>

        <p className="breadcrumbs">
          <Link to="/">Home </Link> {crumbs}
        </p>
      </div>
    </div>
  );
};

export default PackageBannerComponent;
