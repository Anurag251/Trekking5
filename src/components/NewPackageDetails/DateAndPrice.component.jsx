/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";

const DateAndPriceComponent = ({ data }) => {
  const {
    detailsPageNav,
    setDetailsPageNav,
    bookingPopupForm,
    setBookingPopupForm,
  } = useContext(AllDataContext);
  const [selectedYear, setSelectedYear] = useState();
  const [allYears, setAllYears] = useState([]);

  useEffect(() => {
    setSelectedYear(data?.price !== null ? data?.price[0]?.label : 0);

    const years = [];
    if (data.price !== null) {
      data?.price?.forEach((data) => {
        if (!years.includes(data.label)) {
          years.push(data.label);
        }
      });
    }
    setAllYears(years);
  }, [data]);

  return (
    <div
      className={`DateAndPriceSection ${
        detailsPageNav === "Departure Date & Price" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div
            className={`inner-details-button ${
              detailsPageNav === "Departure Date & Price" ? "show-details" : ""
            }`}
          >
            <div
              className="main-title"
              onClick={() => {
                window.scroll(0, 370);
                setDetailsPageNav("Departure Date & Price");
              }}
            >
              Dates & Prices <i className="fas fa-angle-down"></i>
            </div>

            <div className="inner-details">
              <div className="main-container">
                <div className="year-list">
                  {allYears?.map((year, idx) => (
                    <div
                      className={`item ${
                        selectedYear === year ? "active" : ""
                      }`}
                      key={idx}
                    >
                      <div
                        className="item-title"
                        onClick={() => setSelectedYear(year)}
                      >
                        <div className="day">{year}</div>
                        <div className="arrow">
                          <i className="fas fa-angle-down"></i>
                        </div>
                      </div>
                      <div className={`item-body`}>
                        <div className="date-list">
                          {data?.price !== null
                            ? data?.price
                                .filter((data) => data.label === year)
                                .map((priceData, idx) => {
                                  return (
                                    <div
                                      key={idx}
                                      className={`date-item-list ${
                                        priceData.space === 0
                                          ? "sold-out"
                                          : priceData.space <= 4
                                          ? "little"
                                          : "available"
                                      }`}
                                    >
                                      <div className="date-sec">
                                        <span>{priceData.date}</span>
                                      </div>
                                      <div className="status-sec ">
                                        <span>
                                          {priceData.space} Available Spaces
                                        </span>
                                      </div>
                                      <div className="price-sec">
                                        <span>{priceData.value}</span>
                                      </div>
                                      <div className="button-sec">
                                        <button
                                          onClick={() =>
                                            setBookingPopupForm({
                                              ...bookingPopupForm,
                                              isBookingPopupForm: true,
                                              date: priceData.date,
                                              price: priceData.value,
                                              index: idx,
                                            })
                                          }
                                          disabled={
                                            priceData.space === 0 ? true : false
                                          }
                                        >
                                          {priceData.space === 0
                                            ? "Sold Out"
                                            : "Book Now"}
                                        </button>
                                      </div>
                                    </div>
                                  );
                                })
                            : null}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DateAndPriceComponent;
