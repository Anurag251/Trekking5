/* eslint-disable react/prop-types */

import { Link, useLocation } from "react-router-dom";

const PageBannerComponent = ({ contentLeft, image, children }) => {
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

        <div className={`breadcrumbs ${contentLeft ? "contentLeft" : ""}`}>
          <Link to="/">Home </Link> {crumbs}
        </div>
      </div>
    </div>
  );
};

export default PageBannerComponent;
