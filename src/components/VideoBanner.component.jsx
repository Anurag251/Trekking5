/* eslint-disable react/prop-types */
import { useContext, useState } from "react";
import { AllDataContext } from "../context/AllData.context";
import { Link } from "react-router-dom";

const VideoPopup = ({ modalIsOpen, setModalIsOpen, link }) => {
  return (
    <div className={`video-popup ${modalIsOpen ? "active" : ""}`}>
      <div className="popup-bg" onClick={() => setModalIsOpen(false)}></div>
      <div className="popup-box">
        <div className="popup-close" onClick={() => setModalIsOpen(false)}>
          <i className="fas fa-times"></i>
        </div>

        <div className="popup-container">
          <div className="loader"></div>
          <iframe
            src={modalIsOpen === true ? link : null}
            title="YouTube Video"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

const VideoBannerComponent = () => {
  const { videoDatas } = useContext(AllDataContext);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="VideoBanner">
      <VideoPopup
        modalIsOpen={modalIsOpen}
        setModalIsOpen={setModalIsOpen}
        link={videoDatas?.link}
      />
      <div className="wrapper">
        <div className="video-image-area">
          <div className="image">
            <img src={videoDatas?.image?.original_image} alt="video-image" />
          </div>

          <div className="content">
            <h1 className="video-title">{videoDatas?.title}</h1>

            <div className="button-group">
              <Link>
                <button className="explore">Exploer this Trip</button>
              </Link>

              <button
                className="video-play-btn"
                onClick={() => {
                  setModalIsOpen(true);
                }}
              >
                <i className="fas fa-play"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoBannerComponent;
