import React from "react";
import PageBannerComponent from "../components/PageBanner.component";

const PartnershipsPage = () => {
  return (
    <div className="PartnershipsPage">
      <PageBannerComponent image="https://i.assetzen.net/i/p3yqA9G4rDFB/w:1405/h:475/q:70.webp">
        awesomeness guarantee
      </PageBannerComponent>

      <div className="partnerships-list">
        <section>
          <div className="wrapper">
            <div className="partnerships-item">
              <div className="partnerships-title">Partnerships</div>

              <p>
                Here at EverTrek we are very lucky to be working with some
                awesome brands to bring EverTrekkers additional expert content
                and info, and of course some great discounts! The brands we have
                chosen to partner with have been meticulously chosen and
                represent brands us at EverTrek HQ know and love. We pride
                ourselves on never promoting or working with a brand that we
                haven't trialled and tested ourselves.
              </p>

              <p>
                Here at EverTrek we are very lucky to be working with some
                awesome brands to bring EverTrekkers additional expert content
                and info, and of course some great discounts! The brands we have
                chosen to partner with have been meticulously chosen and
                represent brands us at EverTrek HQ know and love. We pride
                ourselves on never promoting or working with a brand that we
                haven't trialled and tested ourselves.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="wrapper">
            <div className="partnerships-item">
              <div className="content">
                <div className="partnerships-title">Osprey</div>

                <p>
                  Osprey Europe are the No. 1 leading backpack brand, leading
                  the way in innovative designs backed by science to offer
                  ultimate comfort daypack whilst still being eco-conscious. You
                  backpack is not just a bag for carrying your gear, it's a
                  trusty companion that will be with you every step of the way
                  of your trek. At EverTrek HQ, we always put our trust in
                  Osprey as they offer quality bags specifically designed to
                  ensure comfort and ultimate dependability when we are out
                  adventuring! They also cover all their products with their
                  ‘All Mighty Guarantee’ which offers complete peace of mind.
                </p>

                <p>
                  As an EverTrek customer, you recieve a 20% discount! Just head
                  over to your members area to get the code!
                  <i>
                    Heads up Summit Zoners, you get a wopping 25% off, your
                    unique code is in your Summit Zone portal!
                  </i>
                </p>
              </div>

              <div className="partnerships-image">
                <img
                  src="https://i.assetzen.net/i/hLmWurOFZzhG/w:400/h:400/q:70.webp"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PartnershipsPage;
