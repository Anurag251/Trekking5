/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";
import { useNavigate } from "react-router-dom";
import { apis } from "../../utils/apis";

const FilterComponent = ({ setCountPackage }) => {
  const {
    countryDatas,
    setSelectedDatas,
    setMessage,
    categoriesDatas,
    selectedCate,
    setSelectedCate,
    setSearchData,
    setShowFilter,
  } = useContext(AllDataContext);
  const [buttonLoading, setButtonLoading] = useState(false);

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    country: "",
    duration: "",
    tripYear: "",
  });

  useEffect(() => {
    if (categoriesDatas !== null) {
      categoriesDatas
        .filter((data) => data.id === selectedCate)
        .forEach((data) => {
          setSelectedDatas(data.trips);
        });
    }
  }, [categoriesDatas, selectedCate]);

  const filterData = (e) => {
    e.preventDefault();
    setButtonLoading(true);

    if (
      formValues.country !== "" ||
      formValues.duration !== "" ||
      formValues.tripYear !== ""
    ) {
      try {
        apis
          .post("/gettrip", {
            country: formValues.country,
            duration: formValues.duration,
            tripyear: formValues.tripYear.split("-")[0],
          })
          .then((res) => {
            setButtonLoading(false);
            if (res.status === 200) {
              if (res.data.data.length) {
                navigate("/search-page", {
                  state: {
                    searchedData: res.data.data,
                  },
                });
                setCountPackage(res.data.data.length);
                setShowFilter(false);
              } else {
                setShowFilter(false);
                setMessage({
                  message: true,
                  title: "No Package",
                  type: "error",
                  desc: `No Package available for ${formValues.duration}`,
                });
              }
            }
          })
          .catch((err) => {
            setMessage({
              message: true,
              title: err.code,
              type: "error",
              desc: err.message,
            });

            console.log(err);
            setButtonLoading(false);
          });
      } catch (err) {
        console.error(err);
      }
    } else {
      alert("All fields are required");
      setButtonLoading(false);
    }
  };

  return (
    <div className="FilterSection">
      <div
        className="filter-section-close"
        onClick={() => setShowFilter(false)}
      >
        <i className="fas fa-times"></i>
      </div>
      <form onSubmit={filterData} className="form">
        <div className="filter-keyword-sec">
          <div className="filter-title">Set your destination</div>

          <div className="filter-group">
            <select
              name="Destinations"
              id="Destinations"
              onChange={(e) =>
                setFormValues({ ...formValues, country: e.target.value })
              }
            >
              <option value="">-- Select Destination --</option>
              {countryDatas &&
                countryDatas.map((data, idx) => (
                  <option key={idx} value={data.country_name}>
                    {data.country_name}
                  </option>
                ))}
            </select>

            <label htmlFor="Destinations">
              <i className="fas fa-angle-down"></i>
            </label>
          </div>
        </div>

        <div className="filter-keyword-sec">
          <div className="filter-title">Number of days</div>

          <div className="filter-group">
            <select
              name="NumberOfDays"
              id="NumberOfDays"
              onChange={(e) =>
                setFormValues({ ...formValues, duration: e.target.value })
              }
            >
              <option value="">-- Number of days --</option>
              <option value="5-7 days">1-7 days</option>
              <option value="7-10 days">7-10 days</option>
              <option value="10-16 days">10-16 days</option>
              <option value="16-30 days">16-30 days</option>
            </select>

            <label htmlFor="NumberOfDays">
              <i className="fas fa-angle-down"></i>
            </label>
          </div>
        </div>

        <div className="filter-keyword-sec">
          <div className="filter-title">Dates</div>

          <div className="filter-group">
            <input
              type="date"
              id="Dates"
              onChange={(e) =>
                setFormValues({ ...formValues, tripYear: e.target.value })
              }
              placeholder="I don't mind"
            />

            <label htmlFor="Dates">
              <i className="fas fa-calendar-alt"></i>
            </label>
          </div>
        </div>
        <button className={`SearchButton ${buttonLoading ? "active" : ""}`}>
          Search
        </button>
      </form>

      <div className="filter-list-sec">
        <div className="filter-title">Categories</div>

        <ul className="filter-list">
          {categoriesDatas &&
            categoriesDatas.map((cate, idx) => (
              <li key={idx}>
                <input
                  type="checkBox"
                  id={cate.id}
                  checked={cate.id === selectedCate ? true : false}
                  onChange={() => {
                    setSearchData(null);
                    setSelectedCate(cate.id);
                    setCountPackage(cate.trips.length);
                    window.scroll(0, 70);
                    setShowFilter(false);
                  }}
                />
                <label htmlFor={cate.id}>
                  {cate.category_name} ({cate.trips.length})
                </label>
              </li>
            ))}
        </ul>
      </div>

      {/*  <div className="filter-list-sec">
        <div className="filter-title">Activity Level</div>

        <ul className="filter-list">
          <li>
            <input type="checkBox" />
            <label htmlFor="">Moderate (8)</label>
          </li>

          <li>
            <input type="checkBox" />
            <label htmlFor="">Challenging (8)</label>
          </li>

          <li>
            <input type="checkBox" />
            <label htmlFor="">Tough (6)</label>
          </li>

          <li>
            <input type="checkBox" />
            <label htmlFor="">Gentle (1)</label>
          </li>
        </ul>
      </div>

      <div className="filter-list-sec">
        <div className="filter-title">Altitude Range</div>

        <ul className="filter-list">
          <li>
            <input type="checkBox" />
            <label htmlFor="">4000 - 6000m (13)</label>
          </li>

          <li>
            <input type="checkBox" />
            <label htmlFor="">6000m + (7)</label>
          </li>

          <li>
            <input type="checkBox" />
            <label htmlFor="">100 - 1500m (2)</label>
          </li>

          <li>
            <input type="checkBox" />
            <label htmlFor="">1500 - 3000m (1)</label>
          </li>
        </ul>
      </div>

      <div className="filter-list-sec">
        <div className="filter-title">Altitude Range</div>

        <ul className="filter-list">
          <li>
            <input type="checkBox" />
            <label htmlFor=""> £0 to £499 (1)</label>
          </li>

          <li>
            <input type="checkBox" />
            <label htmlFor="">£500 to £999 (2)</label>
          </li>

          <li>
            <input type="checkBox" />
            <label htmlFor="">£1500 to £1999 (1)</label>
          </li>

          <li>
            <input type="checkBox" />
            <label htmlFor="">£2000 to £2499 (8)</label>
          </li>

          <li>
            <input type="checkBox" />
            <label htmlFor="">£2500 to £2999 (3)</label>
          </li>

          <li>
            <input type="checkBox" />
            <label htmlFor="">£3000 to £3499 (7)</label>
          </li>

          <li>
            <input type="checkBox" />
            <label htmlFor="">£5500 to £5999 (1)</label>
          </li>
        </ul>
      </div> */}
    </div>
  );
};

export default FilterComponent;
