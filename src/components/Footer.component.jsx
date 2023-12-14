/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import Logo from "../assets/images/DembaTrekAndTourLogoMain.png";
import footerBg from "../assets/images/footer_bg.jpeg";
import OurPartnersComponent from "./OurPartners.component";

const FooterComponent = ({ title }) => {
  const {
    categoriesDatas,
    contactDatas,
    aboutDetails,
    contactPopup,
    setContactPopup,
  } = useContext(AllDataContext);

  const navigate = useNavigate();

  return (
    <footer
      style={{
        backgroundImage: `url(${footerBg})`,
      }}
    >
      <div className="wrapper">
        <OurPartnersComponent title={title} />

        <div className="footer-list">
          <div className="item">
            <Link to="/">
              <div className="logo">
                <img
                  src={
                    contactDatas &&
                    contactDatas?.branding?.logo !== null &&
                    contactDatas?.branding?.logo !== undefined
                      ? contactDatas?.branding?.logo
                      : Logo
                  }
                  alt="logo"
                />
              </div>
            </Link>

            <ul>
              <li>
                <i className="fas fa-map-marker-alt"></i>
                {contactDatas && contactDatas.branding.address}
              </li>
              <li>
                <i className="fas fa-phone"></i>

                <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                  {contactDatas && contactDatas.branding.phone}
                </a>
              </li>
              <li>
                <i className="fas fa-envelope"></i>
                {/*  <a
                  href={`mailto:${contactDatas && contactDatas.branding.email}`}
                >
                  {contactDatas && contactDatas.branding.email}
                </a> */}

                <a
                  href={`mailto:${contactDatas && contactDatas.branding.email}`}
                >
                  {contactDatas && contactDatas.branding.email}
                </a>
              </li>
            </ul>

            {/* <HtmlToParagraphs
              data={
                aboutDetails !== ""
                  ? aboutDetails !== null
                    ? aboutDetails[0].description
                    : "No Descriptions"
                  : ""
              }
              length={200}
            /> */}
          </div>

          <div className="item">
            <div className="f-title">Useful Links</div>

            <ul>
              {aboutDetails
                ?.filter(
                  (data) =>
                    data.slug !== "about-us" &&
                    data.page_type !== 4 &&
                    data.slug !== "message-from-the-director" &&
                    data.page_type !== 5 &&
                    data.page_type !== 6
                )
                .map((data, idx) => (
                  <li key={idx}>
                    <Link to={`/about/${data.slug}`}>{data.title}</Link>
                  </li>
                ))}
            </ul>
          </div>

          <div className="item">
            <div className="f-title">Activities</div>

            <ul>
              {categoriesDatas &&
                categoriesDatas.map((data, idx) => (
                  <li
                    key={idx}
                    onClick={() => {
                      navigate(data.slug);
                    }}
                  >
                    {data.category_name}
                  </li>
                ))}
            </ul>
          </div>

          <div className="item">
            <div className="f-title">Company</div>

            {contactDatas?.menu[0]?.menu_item
              ?.filter((data) => data.label === "Company")
              .map((data, idx) => (
                <ul key={idx}>
                  {data.children.map((subMenu, idx) => (
                    <li key={idx}>
                      <Link
                        to={
                          subMenu?.url === "/meet-the-team" ||
                          subMenu?.url === "/blog"
                            ? `${subMenu?.url}`
                            : `/about${subMenu?.url}`
                        }
                      >
                        {subMenu.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ))}

            <ul>
              {aboutDetails
                ?.filter((data) => data.page_type === 4)
                .map((data, idx) => (
                  <li key={idx}>
                    <Link to={`/${data.slug}`}>{data.title}</Link>
                  </li>
                ))}

              {contactDatas?.menu[0]?.menu_item
                ?.filter((data) => data?.url === "/contact")
                .map((data, idx) => (
                  <li key={idx} onClick={() => setContactPopup(!contactPopup)}>
                    {data?.label}
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* <HelpfulYetisComponent /> */}

        <div className="copyright">
          <span> {contactDatas && contactDatas.branding.copyright_text} </span>

          <div className="icons">
            {contactDatas && contactDatas.social_media.fb_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.fb_url}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            ) : null}

            {contactDatas && contactDatas.social_media.google_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.google_url}>
                  <i className="fab fa-google"></i>
                </a>
              </div>
            ) : null}

            {contactDatas &&
            contactDatas.social_media.instagram_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.instagram_url}>
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            ) : null}

            {contactDatas && contactDatas.social_media.linkedin_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.linkedin_url}>
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            ) : null}

            {contactDatas && contactDatas.social_media.fb_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.fb_url}>
                  <i className="fab fa-facebook-f"></i>
                </a>
              </div>
            ) : null}

            {contactDatas &&
            contactDatas.social_media.pinterest_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.pinterest_url}>
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>
            ) : null}

            {contactDatas && contactDatas.social_media.twitter_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.twitter_url}>
                  <i className="fab fa-twitter"></i>
                </a>
              </div>
            ) : null}

            {contactDatas && contactDatas.social_media.youtube_url !== null ? (
              <div className="icon">
                <a href={contactDatas.social_media.youtube_url}>
                  <i className="fab fa-youtube"></i>
                </a>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
