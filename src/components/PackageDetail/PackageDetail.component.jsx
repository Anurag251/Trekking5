/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import PackageGalleryComponent from "./PackageGallery.component";
import image1 from "../../assets/images/banner3.jpeg";
import image2 from "../../assets/images/banner2.jpeg";
import image3 from "../../assets/images/banner.jpg";
import image4 from "../../assets/images/card5.png";
import PackageBookingComponent from "./PackageBooking.component";
import { AllDataContext } from "../../context/AllData.context";
import { Link } from "react-router-dom";

const PackageDetailComponent = ({ selectedData }) => {
  const { tripDatas } = useContext(AllDataContext);
  const [choosenPrice, setChoosenPrice] = useState(null);

  const [itinerarytoggle, setItineraryToggle] = useState("");
  const [FAQstoggle, setFAQsToggle] = useState("");
  const [toggle, setToggle] = useState("OVERVIEW");

  const scrollPosition = () => {
    window.scroll(0, 840);
  };

  return (
    <div className="package-details">
      <div className="package-title">{selectedData.title}</div>

      <PackageGalleryComponent selectedData={selectedData} />

      <div className="package-main-info">
        <ul>
          <li>
            <i className="fas fa-sun"></i> {selectedData.country}
          </li>
          <li>
            <i className="fas fa-mountain"></i> {selectedData.elevation}
          </li>
          <li>
            <i className="fas fa-calendar"></i> {selectedData.duration}
          </li>
          <li>
            <i className="fas fa-tag"></i> Rs {choosenPrice}/-
          </li>
        </ul>
      </div>

      <div className="packages-details-area">
        <div className="packages-details">
          <ul className="navigate-btn">
            <li
              className={`${toggle === "OVERVIEW" ? "active" : ""}`}
              onClick={() => {
                scrollPosition();
                setToggle("OVERVIEW");
              }}
            >
              TRIP OVERVIEW
            </li>

            <li
              className={`${toggle === "ITINERARY" ? "active" : ""}`}
              onClick={() => {
                scrollPosition();
                setToggle("ITINERARY");
              }}
            >
              ITINERARY
            </li>

            <li
              className={`${toggle === "FAQs" ? "active" : ""}`}
              onClick={() => {
                scrollPosition();
                setToggle("FAQs");
              }}
            >
              FAQs
            </li>
          </ul>

          <div className={`list ${toggle === "OVERVIEW" ? "active" : ""}`}>
            <div className="item">
              <h4 className="item-name">Overview</h4>

              <p
                className="desc"
                dangerouslySetInnerHTML={{
                  __html: selectedData && selectedData.content,
                }}
              />
            </div>

            <div className="item">
              <h4 className="item-name">Highlight</h4>

              <p
                className="desc"
                dangerouslySetInnerHTML={{
                  __html: selectedData && selectedData.highlight,
                }}
              />
            </div>
          </div>

          <div className={`list ${toggle === "ITINERARY" ? "active" : ""}`}>
            <div className={`item active`}>
              <div className="inner-content">
                <ul className="faq">
                  {selectedData.itenarydetails.map((data, idx) => (
                    <li
                      key={idx}
                      className={`${
                        itinerarytoggle === data.trip_title ? "active" : ""
                      }`}
                    >
                      <div
                        className="title"
                        onClick={() => setItineraryToggle(data.trip_title)}
                      >
                        <span>{data.trip_title}</span>
                        <i className="fas fa-angle-down"></i>
                      </div>

                      <p
                        className="desc"
                        dangerouslySetInnerHTML={{
                          __html: data && data.trip_details,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className={`list ${toggle === "FAQs" ? "active" : ""}`}>
            <div className={`item active`}>
              <div className="inner-content">
                <ul className="faq">
                  {selectedData.faq.map((data, idx) => (
                    <li
                      key={idx}
                      className={`${
                        FAQstoggle === data.faq_title ? "active" : ""
                      }`}
                    >
                      <div
                        className="title"
                        onClick={() => setFAQsToggle(data.faq_title)}
                      >
                        <span>{data.faq_title}</span>
                        <i className="fas fa-angle-down"></i>
                      </div>

                      <p
                        className="desc"
                        dangerouslySetInnerHTML={{
                          __html: data && data.faq_details,
                        }}
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="package-booking-area">
          <PackageBookingComponent
            selectedData={selectedData}
            choosenPrice={choosenPrice}
            setChoosenPrice={setChoosenPrice}
            popup={true}
          />

          <div className="best-packages">
            <div className="title-sec">Best packages</div>

            <div className="list">
              {tripDatas &&
                tripDatas
                  .filter((data) => data.recommended)
                  .map((data, idx) => (
                    <div className="item" key={idx}>
                      <div className="image">
                        <img src={data.image.original_image} alt="" />
                      </div>

                      <div className="details">
                        <div className="name-sec">
                          <div className="name">
                            <Link to={`/details/${data.id}`}>
                              <h4>{data.title}</h4>
                            </Link>
                          </div>

                          <div className="price">
                            <span>From</span> <br />
                            {data.price[0].value}
                          </div>
                        </div>

                        <Link to={`/details/${data.id}`}>
                          <button>View</button>
                        </Link>
                      </div>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageDetailComponent;
