import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";
import PageBannerComponent from "../components/PageBanner.component";

import image from "../assets/images/about-img2.jpg";

const RecommendedExpeditionGearsPage = () => {
  const { aboutDetails } = useContext(AllDataContext);

  return (
    <div className="recommended-trekking-gears">
      <PageBannerComponent image="https://i.assetzen.net/i/p3yqA9G4rDFB/w:1405/h:475/q:70.webp">
        {aboutDetails &&
          aboutDetails
            .filter((data) => data.page_type === 6)
            .map((data, idx) => <div key={idx}>{data.title}</div>)}
      </PageBannerComponent>

      <section>
        <div className="wrapper">
          <div className="gear-list">
            {aboutDetails &&
              aboutDetails
                .filter((data) => data.page_type === 6)
                .map((data) =>
                  data.contents?.map((data, idx) => (
                    <div className="item" key={idx}>
                      <div className="team-image">
                        <img src={data.image.original_image} alt={data.title} />
                      </div>

                      <div className="details">
                        <div className="name">{data.text}</div>

                        <p
                          className="desc"
                          dangerouslySetInnerHTML={{
                            __html: data.content,
                          }}
                        ></p>
                      </div>
                    </div>
                  ))
                )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RecommendedExpeditionGearsPage;
