/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";
import BlogCardComponent from "./BlogCard.component";

const SacredCommunityComponent = ({ title, subTitle }) => {
  const { blogDatas } = useContext(AllDataContext);

  return (
    <div className="blog_page">
      <section>
        <div className="wrapper">
          <div className="title-part">
            <div className="name">{title}</div>
            <h5>{subTitle}</h5>
          </div>

          <div className="list">
            {blogDatas &&
              blogDatas
                .filter((data, idx) => idx < 3)
                .map((data, idx) => (
                  <BlogCardComponent key={idx} data={data} />
                ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SacredCommunityComponent;
