import { Link } from "react-router-dom";
import PageBannerComponent from "../components/PageBanner.component";
import TrekkingRegionsWorldwideComponent from "../components/TrekkingRegionsWorldwide.component";
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const DestinationsPage = () => {
  const { aboutDetails, countryDatas } = useContext(AllDataContext);

  return (
    <div className="Destinations">
      <PageBannerComponent
        contentLeft="View All Our"
        image="https://i.assetzen.net/i/JPlzqpfxRxey/w:1920/h:600/q:70.webp"
      >
        destinations
      </PageBannerComponent>

      <section>
        <div className="wrapper">
          <div className="about-destinations">
            <p
              className="desc"
              dangerouslySetInnerHTML={{
                __html:
                  aboutDetails !== null
                    ? aboutDetails[1].description.length > 500
                      ? `${aboutDetails[1].description.slice(0, 500)}...`
                      : aboutDetails[1].description
                    : "",
              }}
            />
            <Link to="/reasons-to-choose-us">
              <button>Why Choose Sacred</button>
            </Link>
          </div>
        </div>
      </section>

      <TrekkingRegionsWorldwideComponent datas={countryDatas} />

      <section>
        <div className="wrapper">
          <div className="package-footer">
            <h2>
              Secure your <span>lifetime deposit</span> today
            </h2>

            <p>
              Book onto a TREK. Once you pay your deposit, it NEVER expires!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationsPage;
