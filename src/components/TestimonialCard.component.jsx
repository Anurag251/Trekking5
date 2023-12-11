/* eslint-disable react/prop-types */
import { useState } from "react";
import HtmlToParagraphs from "./HtmlToParagraphs.component";

const TestimonialCardComponent = ({ data }) => {

  return (
    <div className="item">
      <div className="text-sec">
        <HtmlToParagraphs
          data={
            data !== ""
              ? data.description !== null
                ? data.description
                : "No Descriptions"
              : ""
          }
          readMore
          length={300}
        />

        <div className="name">{data.name}</div>
        <div className="post">{data.title}</div>
      </div>
    </div>
  );
};

export default TestimonialCardComponent;
