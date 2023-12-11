import { useContext } from "react";

import { AllDataContext } from "../context/AllData.context";
import HtmlToParagraphs from "./HtmlToParagraphs.component";
import { Link } from "react-router-dom";

const AboutSacredComponent = () => {
  const { aboutDetails } = useContext(AllDataContext);

  return (
    <div className="About_us">
      <section className="bg-color">
        <div className="wrapper">
          {aboutDetails
            ?.filter((data) => data.slug === "message-from-the-director")
            .map((data, idx) => (
              <div className="item" key={idx}>
                <div className="images-area">
                  <img src={data?.image?.original_image} alt={data.title} />
                </div>

                <div className="content">
                  <h1>{data.title}</h1>
                  {/* <p
                  className="desc"
                  dangerouslySetInnerHTML={{
                    __html:
                      aboutDetails !== null
                        ? aboutDetails[1].description.length > 500
                          ? `${aboutDetails[1].description.slice(0, 500)}...`
                          : aboutDetails[1].description
                        : "",
                  }}
                /> */}

                  <HtmlToParagraphs data={data?.description} length={700} />

                  <Link to={`/about/${data.slug}`}>
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default AboutSacredComponent;
