/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AllDataContext } from "../context/AllData.context";

const WhyChooseUsComponent = ({ title, subTitle }) => {
  const { whyChooseUs } = useContext(AllDataContext);

  const icons = [
    {
      id: 0,
      icon: "fa-award",
    },
    {
      id: 1,
      icon: "fa-shoe-prints",
    },
    {
      id: 2,
      icon: "fa-shoe-prints",
    },
    {
      id: 3,
      icon: "fa-people-group",
    },
  ];

  return (
    <div className="why-choose-us">
      <section className="bg-color">
        <div className="wrapper">
          <div className="title-part">
            <div className="name">{title}</div>
            <h5>{subTitle}</h5>
          </div>

          <div className="list">
            {whyChooseUs &&
              whyChooseUs?.map((data, idx) => (
                <div className="item" key={idx}>
                  <div className="image">
                    <img src={data.image} alt={data.title} />
                  </div>

                  <div className="content">
                    {/* <i className="fa-solid fa-hand-holding-dollar"></i> */}
                    <i className={`fa-solid ${icons[idx].icon}`}></i>

                    <div className="name">{data.title}</div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUsComponent;
