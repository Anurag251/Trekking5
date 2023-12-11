import React from "react";

const DownloadTripGuideComponent = () => {
  return (
    <div className="DownloadTripGuide">
      <div className="inner">
        <div className="book-image">
          <img
            src="https://i.assetzen.net/i/dqIHc16C3DwA/w:222/h:278/q:70.webp"
            alt=""
          />
        </div>

        <div className="content">
          <div className="name">
            Is <span>Everest</span> On Your Bucket List?
          </div>

          <p>
            Enter your email address to download our FREE Everest Base Camp
            Guide
          </p>

          <button className="download">DOWNLOAD TRIP GUIDE</button>
        </div>
      </div>
    </div>
  );
};

export default DownloadTripGuideComponent;
