import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import Logo from "../assets/images/sherpa-tech-logo.svg";
import telephoneImage from "../assets/images/profile1.jpeg";

const HeaderComponent = () => {
  const {
    categoriesDatas,
    setSideNavHidden,
    sideNavHidden,
    contactPopup,
    setContactPopup,
    contactDatas,
  } = useContext(AllDataContext);
  const [selectedCat, setSelectedCat] = useState(null);
  const [selectedCatId, setSelectedCatId] = useState(null);
  const [destinationsSelected, setDestinationsSelected] = useState(false);

  useEffect(() => {
    setSelectedCat(categoriesDatas && categoriesDatas[0].trips);
    setSelectedCatId(categoriesDatas && categoriesDatas[0].id);
  }, [categoriesDatas]);

  const location = useLocation();

  useEffect(() => {
    setDestinationsSelected(false);
  }, [location]);

  // console.log(contactDatas);

  return (
    <React.Fragment>
      <header>
        <div className="wrapper">
          <div className="logo-area">
            <Link to="/">
              <div className="logo">
                <img src={Logo} alt="logo" />
              </div>
            </Link>
          </div>

          <div className="header-area">
            <div className="inner">
              <ul className="nav-links">
                <li>
                  <Link to="/destinations">
                    <button
                      className={`nav-btn ${
                        location.pathname === "/destinations" ? "active" : ""
                      }`}
                    >
                      Destinations
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="/destination-details/nepal">
                    <button
                      className={`nav-btn ${
                        location.pathname === "/destination-details/nepal"
                          ? "active"
                          : ""
                      }`}
                    >
                      Peak climbing
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="/search-page">
                    <button
                      className={`nav-btn ${
                        location.pathname === "/search-page" ? "active" : ""
                      }`}
                    >
                      Tour
                    </button>
                  </Link>
                </li>

                <li>
                  <Link to="/expeditions">
                    <button
                      className={`nav-btn ${
                        location.pathname === "/expeditions" ? "active" : ""
                      }`}
                    >
                      Expedition
                    </button>
                  </Link>
                </li>

                <li className="drop-menu">
                  <button className="nav-btn">
                    About <i className="fas fa-angle-down"></i>
                  </button>

                  <ul className="drop-down">
                    <li>
                      <Link to="/meet-the-team">
                        <button
                          className={`${
                            location.pathname === "/meet-the-team"
                              ? "active"
                              : ""
                          }`}
                        >
                          Meet The Team
                        </button>
                      </Link>
                    </li>

                    <li>
                      <Link to="/reasons-to-choose-us">
                        <button
                          className={`${
                            location.pathname === "/reasons-to-choose-us"
                              ? "active"
                              : ""
                          }`}
                        >
                          Reasons To Choose Us
                        </button>
                      </Link>
                    </li>

                    <li>
                      <Link to="/flexibility-promise">
                        <button
                          className={`${
                            location.pathname === "/flexibility-promise"
                              ? "active"
                              : ""
                          }`}
                        >
                          Flexibility Promise
                        </button>
                      </Link>
                    </li>

                    <li>
                      <Link to="/awesomeness-guarantee">
                        <button
                          className={`${
                            location.pathname === "/awesomeness-guarantee"
                              ? "active"
                              : ""
                          }`}
                        >
                          Awesomeness Guarantee
                        </button>
                      </Link>
                    </li>
                  </ul>
                </li>

                <li>
                  <button
                    onClick={() => setContactPopup(!contactPopup)}
                    className={`nav-btn`}
                  >
                    Contact Us
                  </button>
                </li>

                {/* <li className="loginMember">
              <a href="#">
                <button
                  onClick={() => setContactPopup(!contactPopup)}
                  className={`nav-btn`}
                >
                  Members <br /> Login
                </button>
              </a>
            </li> */}
              </ul>

              <div className="header-other">
                <div
                  className={`side-nav-btn ${sideNavHidden ? "active" : ""}`}
                  onClick={() => setSideNavHidden(!sideNavHidden)}
                >
                  <div className="das"></div>
                </div>
              </div>
            </div>

            <div className="whatsAppProfile">
              <div className="image">
                <img src={telephoneImage} alt="" />
              </div>

              <div className="centent">
                <p>WhatsApp, Viber</p>
                <h4 className="number">+977-9851005129</h4>
              </div>
            </div>
          </div>
        </div>
      </header>

      <div className={`big-drop-down ${destinationsSelected ? "active" : ""}`}>
        <div className="link-cagtegory">
          <ul>
            {categoriesDatas &&
              categoriesDatas.map((data, idx) => (
                <li
                  className={`${data.id === selectedCatId ? "active" : ""}`}
                  style={{
                    backgroundImage: `url(${data.image.original_image})`,
                  }}
                  key={idx}
                  onClick={() => {
                    setSelectedCat(data.trips);
                    setSelectedCatId(data.id);
                  }}
                >
                  <span>{data.category_name}</span>
                </li>
              ))}
          </ul>
        </div>

        <div className="link-details">
          <div className="link-title">
            <h4>Package</h4>
            <button>
              <Link to="/packages">View All</Link>
            </button>
          </div>

          <ul>
            {selectedCat &&
              selectedCat
                .filter((data, idx) => idx < 15)
                .map((data, idx) => (
                  <li key={idx}>
                    <Link to={`/package-details/${data.id}`}>{data.title}</Link>
                  </li>
                ))}
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

export default HeaderComponent;
