import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const VideosComponent = () => {
  const { detailsPageNav } = useContext(AllDataContext);

  return (
    <div
      className={`VideosSection ${
        detailsPageNav === "Videos" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div className="main-title">Videos</div>

          <div className="main-container">
            <div className="videos-list">
              <div className="video-area">
                <iframe
                  src="https://www.youtube.com/embed/aTJncWndUB8"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>

              <div className="video-area">
                <iframe
                  src="https://www.youtube.com/embed/Vk8UEWHYfEg"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VideosComponent;
