import { useContext, useState } from "react";
import { AllDataContext } from "../context/AllData.context";
import logoImage from "../assets/images/DembaTrekAndTourLogoDark.png";
import { Link, useLocation } from "react-router-dom";

const SideNavComponent = () => {
  const {
    sideNavHidden,
    setSideNavHidden,
    setContactPopup,
    contactPopup,
    aboutDetails,
    contactDatas,
  } = useContext(AllDataContext);

  const location = useLocation();

  const [isOpenMenu, setIsOpenMenu] = useState("");

  return (
    <div className={`side-nav ${sideNavHidden ? "active" : ""}`}>
      <div
        className="side-nav-close-btn"
        onClick={() => {
          setSideNavHidden(false);
          setIsOpenMenu("");
        }}
      >
        <i className="fas fa-times"></i>
      </div>

      <div className="logo">
        <Link
          to="/"
          onClick={() => {
            setSideNavHidden(false);
            setIsOpenMenu("");
          }}
        >
          <img
            src={
              contactDatas &&
              contactDatas?.branding?.logo !== null &&
              contactDatas?.branding?.logo !== undefined
                ? contactDatas?.branding?.logo
                : logoImage
            }
            alt="logo"
          />
        </Link>
      </div>

      <div className="nav-links-area">
        <ul className="nav-links">
          {contactDatas?.menu[0]?.menu_item.map((data, idx) => {
            if (data?.children?.length) {
              return (
                <li
                  className={`drop-menu ${
                    isOpenMenu === data.label ? "active" : ""
                  }`}
                  key={idx}
                  onClick={() => setIsOpenMenu(data.label)}
                >
                  <button className="nav-btn">
                    {data.label} <i className="fas fa-angle-down"></i>
                  </button>

                  <div className="drop-down-area">
                    <ul
                      className="drop-down"
                      onClick={() => {
                        setSideNavHidden(false);
                        setIsOpenMenu("");
                      }}
                    >
                      {data?.children?.map((subMenu, idx) => (
                        <li key={idx}>
                          <Link
                            to={
                              subMenu?.page !== null &&
                              subMenu?.page !== undefined
                                ? subMenu?.page_id === 7 ||
                                  subMenu?.page_id === 8 ||
                                  subMenu?.page_id === 9
                                  ? `/${subMenu?.page?.slug}`
                                  : `/about/${subMenu?.page?.slug}`
                                : subMenu?.url === "/blog" ||
                                  subMenu?.url === "/meet-the-team"
                                ? `${subMenu?.url}`
                                : subMenu?.url === "/faqs"
                                ? `${subMenu?.url}`
                                : `/about${subMenu?.url}`
                            }
                          >
                            <button
                              className={`${
                                location.pathname ===
                                (subMenu?.page !== null &&
                                subMenu?.page !== undefined
                                  ? subMenu?.page_id === 7 ||
                                    subMenu?.page_id === 8 ||
                                    subMenu?.page_id === 9
                                    ? `/${subMenu?.page?.slug}`
                                    : `/about/${subMenu?.page?.slug}`
                                  : subMenu?.url === "/blog" ||
                                    subMenu?.url === "/meet-the-team"
                                  ? `${subMenu?.url}`
                                  : subMenu?.url === "/faqs"
                                  ? `${subMenu?.url}`
                                  : `/about${subMenu?.url}`)
                                  ? "active"
                                  : ""
                              }`}
                            >
                              {subMenu?.label}
                            </button>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              );
            } else {
              return (
                <li key={idx}>
                  {data?.url === "/contact" ? (
                    <button
                      onClick={() => setContactPopup(!contactPopup)}
                      className={`nav-btn`}
                    >
                      {data.label}
                    </button>
                  ) : (
                    <Link to={data?.url}>
                      <button
                        className={`nav-btn ${
                          location.pathname === data?.url ? "active" : ""
                        }`}
                        onClick={() => {
                          setSideNavHidden(false);
                          setIsOpenMenu("");
                        }}
                      >
                        {data.label}
                      </button>
                    </Link>
                  )}
                </li>
              );
            }
          })}
        </ul>
      </div>

      {/*  <div className="nav-links-area">
        <ul className="nav-links">
          <li>
            <Link to="/trekking">
              <button
                onClick={() => {
                  setSideNavHidden(false);
                  setIsOpenMenu("");
                }}
                className={`nav-btn ${
                  location.pathname === "/trekking" ? "active" : ""
                }`}
              >
                Trekking
              </button>
            </Link>
          </li>
          <li>
            <Link to="/trekking-peaks">
              <button
                onClick={() => {
                  setSideNavHidden(false);
                  setIsOpenMenu("");
                }}
                className={`nav-btn ${
                  location.pathname === "/trekking-peaks" ? "active" : ""
                }`}
              >
                Trekking Peaks
              </button>
            </Link>
          </li>
          <li>
            <Link to="/mountaineering-expedition">
              <button
                onClick={() => {
                  setSideNavHidden(false);
                  setIsOpenMenu("");
                }}
                className={`nav-btn ${
                  location.pathname === "/mountaineering-expedition"
                    ? "active"
                    : ""
                }`}
              >
                Mountaineering Expeditions
              </button>
            </Link>
          </li>

          <li
            className={`drop-menu ${isOpenMenu === "Company" ? "active" : ""}`}
            onClick={() => setIsOpenMenu("Company")}
          >
            <button className="nav-btn">
              Company <i className="fas fa-angle-down"></i>
            </button>

            <div className="drop-down-area">
              <ul
                className="drop-down"
                onClick={() => {
                  {
                    setSideNavHidden(false);
                    setIsOpenMenu("");
                  }
                }}
              >
                <li>
                  <Link to={`/about/${aboutDetails && aboutDetails[0]?.slug}`}>
                    <button
                      className={`${
                        location.pathname ===
                        `/about/${aboutDetails && aboutDetails[0]?.slug}`
                          ? "active"
                          : ""
                      }`}
                    >
                      {aboutDetails && aboutDetails[0]?.title}
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to={`/about/${aboutDetails && aboutDetails[9]?.slug}`}>
                    <button
                      className={`${
                        location.pathname ===
                        `/about/${aboutDetails && aboutDetails[9]?.slug}`
                          ? "active"
                          : ""
                      }`}
                    >
                      {aboutDetails && aboutDetails[9]?.title}
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="/meet-the-team">
                    <button
                      className={`${
                        location.pathname === "/meet-the-team" ? "active" : ""
                      }`}
                    >
                      Meet The Team
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="/blog">
                    <button
                      className={`${
                        location.pathname === "/blog" ? "active" : ""
                      }`}
                    >
                      Blog
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li
            className={`drop-menu ${
              isOpenMenu === "Useful Info" ? "active" : ""
            }`}
            onClick={() => setIsOpenMenu("Useful Info")}
          >
            <button className="nav-btn">
              Useful Info <i className="fas fa-angle-down"></i>
            </button>

            <div className="drop-down-area">
              <ul
                className="drop-down"
                onClick={() => {
                  {
                    setSideNavHidden(false);
                    setIsOpenMenu("");
                  }
                }}
              >
                {aboutDetails &&
                  aboutDetails
                    .filter(
                      (data) =>
                        data.slug !== "about-us" &&
                        data.page_type !== 4 &&
                        data.slug !== "message-from-the-director" &&
                        data.page_type !== 5 &&
                        data.page_type !== 6
                    )
                    .map((data, idx) => (
                      <li key={idx}>
                        <Link to={`/about/${data.slug}`}>
                          <button
                            className={`${
                              location.pathname === `/about/${data.slug}`
                                ? "active"
                                : ""
                            }`}
                          >
                            {data.title}
                          </button>
                        </Link>
                      </li>
                    ))}

                {aboutDetails &&
                  aboutDetails
                    .filter(
                      (data) => data.page_type === 5 || data.page_type === 6
                    )
                    .map((data, idx) => (
                      <li key={idx}>
                        <Link to={`/${data.slug}`}>
                          <button
                            className={`${
                              location.pathname === `/${data.slug}`
                                ? "active"
                                : ""
                            }`}
                          >
                            {data.title}
                          </button>
                        </Link>
                      </li>
                    ))}

                <li>
                  <Link to="/faqs">
                    <button
                      className={`${
                        location.pathname === "/faqs" ? "active" : ""
                      }`}
                    >
                      FAQ's
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </li>

          <li>
            <button
              onClick={() => {
                setSideNavHidden(false);
                setIsOpenMenu("");
                setContactPopup(!contactPopup);
              }}
              className={`nav-btn`}
            >
              Contact Us
            </button>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default SideNavComponent;
