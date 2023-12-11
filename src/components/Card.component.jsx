/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardComponent = ({ cardData }) => {
  return (
    <div className="item">
      <div className="image-sec">
        <img src={cardData.image.original_image} alt="" />
      </div>

      <div className="text-sec">
        <div className="days">{cardData.duration}</div>

        <Link to={`/details/${cardData.id}`}>
          <div className="name">{cardData.title}</div>
        </Link>

        <div className="price">
          <span>From</span>
          <h4>
            ${cardData.price[0].value} <span>/ person</span>
          </h4>
        </div>

        <p
          dangerouslySetInnerHTML={{
            __html: cardData && cardData.content,
          }}
        />

        <Link to={`/details/${cardData.id}`}>
          <button>Details</button>
        </Link>
      </div>
    </div>
  );
};

export default CardComponent;
