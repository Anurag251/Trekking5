/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const TrekkingRegionsWorldwideComponent = ({ datas }) => {
  return (
    <div className="TrekkingRegionsWorldwide">
      <section>
        <div className="wrapper">
          <div className="title-part">
            <h5>CHECK OUT</h5>

            <div className="name">our trekking Regions Worldwide</div>
          </div>

          <div className="list">
            {datas?.map((data, idx) => (
              <Link
                to={`/destination-details/${data?.country_name.toLowerCase()}`}
                key={idx}
              >
                <div className="item">
                  <div className="image-area">
                    <img src={data?.icon} alt="" />
                  </div>

                  <div className="name">{data?.country_name}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrekkingRegionsWorldwideComponent;
