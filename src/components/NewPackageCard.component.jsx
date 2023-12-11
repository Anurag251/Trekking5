/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const NewPackageCardComponent = ({ data }) => {
  return (
    <Link to={`/package-details/${data?.slug}`}>
      <div className="packageCardComponent">
        <div className="image-area">
          <div className="image">
            <img src={data?.image?.original_image} alt={data?.title} />
          </div>
          {data?.recommended === 1 ? (
            <div className="booking">Booking Open</div>
          ) : null}

          <button className="book-btn">See Details</button>

          <div className="time">{data?.duration}</div>
          <div className="country">{data?.country}</div>
        </div>

        <div className="content">
          <div className="name-area">
            <div className="name">{data?.title}</div>
          </div>

          <div className="card-footer">
            <div className="prices">
              {data?.price !== null ? data?.price[0]?.value : null}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default NewPackageCardComponent;
