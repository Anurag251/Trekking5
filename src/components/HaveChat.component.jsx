/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const HaveChatComponent = ({ title, subTitle, desc }) => {
  const { contactDatas } = useContext(AllDataContext);

  return (
    <div className="HaveChat">
      <section>
        <div className="wrapper">
          <div className="list">
            <div className="item">
              <div className="title-part">
                <h5>{title}</h5>

                <div className="name">{subTitle}</div>
              </div>

              <p className="desc">{desc}</p>

              <div className="button-group">
                <a href={`tel:${contactDatas && contactDatas.branding.phone}`}>
                  <button className="callBtn">Book A Call Back</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HaveChatComponent;
