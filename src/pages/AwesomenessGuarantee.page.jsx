import React from "react";
import PageBannerComponent from "../components/PageBanner.component";

const AwesomenessGuaranteePage = () => {
  return (
    <div className="AwesomenessGuaranteePage">
      <PageBannerComponent image="https://i.assetzen.net/i/p3yqA9G4rDFB/w:1405/h:475/q:70.webp">
        awesomeness guarantee
      </PageBannerComponent>

      <section>
        <div className="wrapper">
          <div className="awesomeness-guarantee-list">
            <div className="awesomeness-guarantee-item">
              <div className="guarantee-title">
                When you book and become, you are covered by our
                'awesomeness guarantee'
              </div>
              
              <div className="guarantee-image">
                <img
                  src="https://i.assetzen.net/i/hLmWurOFZzhG/w:400/h:400/q:70.webp"
                  alt=""
                />
              </div>

              <p>
                We are not ones to hide behind complicated rules or the old T &
                C’s. That's why we came up with our Awesomeness Guarantee. This
                is something that's created and based on trust, transparency and
                a little bit of common sense added into the mix.
              </p>
            </div>

            <div className="awesomeness-guarantee-item">
              <div className="guarantee-title">Here's how it works</div>

              <p>
                If you feel that you were let down by our experience and that
                your trip was not awesome then contact us. We will then gather
                all of the details from you, talk to our staff on the ground to
                locate and validate any problems and completely understand why
                things went wrong.
              </p>

              <p>
                If we find that something was completely wrong and wasn’t as
                described and we establish the fault or problem was within our
                control or our staff on the ground then we’ll work out a refund
                that’s proportional to the scale of the issue.{" "}
              </p>

              <p>
                As ever, and in line with the way in which we work, fairness and
                transparency is needed from both sides including you. We just
                ask that if you do spot anything that isn’t quite right, you
                mention this to the staff on the ground, give them the chance to
                rectify the situation whilst you’re on the trip. Without having
                done that, it’s way more difficult to put things right. This
                would be taking into account when looking at the case.
              </p>

              <p>
                We want all of your adventures with us to be 'AWESOME' which is
                why we are proud to cover your bookings with the 'Awesomeness
                Guarantee'. If on the hugely outside chance that you want to
                claim then email info@evertrek.co.uk and we will open an
                investigation into why your trip wasn't awesome.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AwesomenessGuaranteePage;
