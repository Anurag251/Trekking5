/* eslint-disable react/prop-types */
import iconClimb from "../../assets/images/hiking.png";
import iconMountain from "../../assets/images/mountain.png";
import iconPrice from "../../assets/images/price-tag.png";
import iconCalendar from "../../assets/images/calendar.png";
import iconTimeTable from "../../assets/images/timeTable.png";
import iconSeason from "../../assets/images/season.png";

const PackageMainDetailsComponent = ({ data }) => {
  return (
    <div className="PackageMainDetails">
      <ul className="item-list">
        {data?.groupsize !== null && data?.groupsize !== "" ? (
          <li>
            <img src={iconClimb} alt="climbing-image" />
            <div className="content">
              <div className="name">Group Size</div>
              <span>{data.groupsize}</span>
            </div>
          </li>
        ) : null}

        {data?.elevation !== null && data?.elevation !== "" ? (
          <li>
            <img src={iconMountain} alt="mountain-image" />
            <div className="content">
              <div className="name">Max. Altitude</div>
              <span> {data.elevation}</span>
            </div>
          </li>
        ) : null}

        {data?.duration !== null && data?.duration !== "" ? (
          <li>
            <img src={iconCalendar} alt="calendar-image" />
            <div className="content">
              <div className="name">Duration</div>
              <span> {data.duration}</span>
            </div>
          </li>
        ) : null}

        {data?.finalprice !== null && data?.finalprice !== "" ? (
          <li>
            <img src={iconPrice} alt="price-tag-image" />

            <div className="content">
              <div className="name">Price start with</div>
              <span>
                <strong>{data?.finalprice}</strong>
              </span>
            </div>
          </li>
        ) : null}

        {data?.season !== null && data?.season !== "" ? (
          <li>
            <img src={iconSeason} alt="price-tag-image" />

            <div className="content">
              <div className="name">Season</div>
              <span>{data?.season}</span>
            </div>
          </li>
        ) : null}

        {data?.startfrom !== null && data?.startfrom !== "" ? (
          <li>
            <img src={iconTimeTable} alt="price-tag-image" />

            <div className="content">
              <div className="name">Start from</div>
              <span>{data?.startfrom}</span>
            </div>
          </li>
        ) : null}
        {/* 
        <li>
          <img src={iconPrice} alt="price-tag-image" />

          <div className="content">
            <div className="name">Elevation</div>
            <span>{data?.elevation}</span>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default PackageMainDetailsComponent;
