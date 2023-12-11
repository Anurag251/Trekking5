import { useContext } from "react";
import { Link } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";

const AboutPage = () => {
  const { aboutDetails, galleryDatas } = useContext(AllDataContext);

  return (
    <section>
      <div className="wrapper">
        <div className="about-page thisIsPage">
          <div className="title">Making the Adventure Happen</div>

          <div className="section">
            <div className="text-sec">
              <div className="sec-title">
                {aboutDetails && aboutDetails[0].title}
              </div>

              <p
                dangerouslySetInnerHTML={{
                  __html: aboutDetails && aboutDetails[0].description,
                }}
              />
            </div>

            <div className="image-sec">
              <img
                src={aboutDetails && aboutDetails[0].image.original_image}
                alt="about-image"
              />

              {galleryDatas &&
                galleryDatas
                  .filter((data, idx) => idx < 3)
                  .map((data, idx) => (
                    <img
                      key={idx}
                      src={data.original_image}
                      alt="about-image"
                    />
                  ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
