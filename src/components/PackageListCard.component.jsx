/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import HtmlToParagraphs from "./HtmlToParagraphs.component";

const PackageListCardComponent = ({ cardData, cateData }) => {
  const [choosenPrice, setChoosenPrice] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (cardData !== null) {
      setChoosenPrice(cardData.price[0].value);
    }
  }, [cardData]);

  return (
    <div className="package-list-card">
      <div className="item-body">
        <picture
          className="image-area"
          onClick={() => {
            navigate(`/package-details/${cardData.id}`, {
              state: {
                id: cardData.id,
              },
            });
          }}
        >
          <img
            className="item-image"
            src={cardData.image !== null ? cardData.image.original_image : ""}
            alt="package-image"
          />
        </picture>

        <div className="content">
          <div className="inner">
            <div className="infos">
              <div
                className="package-name"
                onClick={() => {
                  navigate(`/package-details/${cardData.id}`, {
                    state: {
                      id: cardData.id,
                    },
                  });
                }}
              >
                {cardData.title}
              </div>
              <div className="package-time">{cardData.duration}</div>

              <HtmlToParagraphs
                data={
                  cardData !== ""
                    ? cardData.content !== null
                      ? cardData.content
                      : "No Descriptions"
                    : ""
                }
                length={300}
              />
            </div>

            <div className="package-price">
              <p>Starting from :</p>
              <span>{choosenPrice}</span>
            </div>
          </div>

          <div className="more-button">
            <button
              onClick={() => {
                navigate(`/package-details/${cardData.id}`, {
                  state: {
                    id: cardData.id,
                  },
                });
              }}
            >
              More info
            </button>
          </div>
        </div>
      </div>

      <div className="item-footer">
        <div className="item">
          <div className="icon">
            <i className="fas fa-hotel"></i>
          </div>
          <div className="name">Hotel</div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fas fa-utensils"></i>
          </div>
          <div className="name">Meals</div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fas fa-jet-fighter-up"></i>
          </div>
          <div className="name">Flight</div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fa-solid fa-binoculars"></i>
          </div>
          <div className="name">Sightseeing</div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fa-solid fa-van-shuttle"></i>
          </div>
          <div className="name">Transportation</div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fas fa-solid fa-address-card"></i>
          </div>
          <div className="name">Permit</div>
        </div>

        <div className="item">
          <div className="icon">
            <i className="fas fa-user-tie"></i>
          </div>
          <div className="name">Guide/Porters</div>
        </div>
      </div>
    </div>
  );
};

export default PackageListCardComponent;
