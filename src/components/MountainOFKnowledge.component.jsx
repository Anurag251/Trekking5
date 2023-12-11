/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";

const MountainOFKnowledgeComponent = ({ title, subTitle, link }) => {
  const { categoriesDatas } = useContext(AllDataContext);

  const handleBlur = (e) => {
    const inputValue = e.target.value;

    if (inputValue.length >= 10) {
      alert(inputValue);
    }
  };

  return (
    <div className="MountainOFKnowledge">
      <section className="bg-color">
        <div className="wrapper">
          <div className="title-part">
            <div className="name">{title}</div>
            <h5>{subTitle}</h5>
          </div>

          <input type="text" onBlur={handleBlur} />

          <div className="list">
            {categoriesDatas &&
              categoriesDatas
                .filter((data) => data.trips.length)
                .filter((data, idx) => idx < 4)
                .map((data, idx) => (
                  <Link to={`${data?.slug}`} key={idx}>
                    <div className="item" title={data?.category_name}>
                      <div className="image-area">
                        <img
                          src={data?.image?.original_image}
                          alt={data?.category_name}
                        />
                      </div>

                      <div className="content">
                        <div className="name">{data?.category_name}</div>
                      </div>
                    </div>
                  </Link>
                ))}
          </div>
        </div>

        {/* categoriesDatas?.length > 4 ? (
          <div className="view-all">
            <Link to={link}>
              <button>View All</button>
            </Link>
          </div>
        ) : null */}
      </section>
    </div>
  );
};

export default MountainOFKnowledgeComponent;
