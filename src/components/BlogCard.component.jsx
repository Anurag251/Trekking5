/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import HtmlToParagraphs from "./HtmlToParagraphs.component";

const BlogCardComponent = ({ data }) => {
  return (
    <Link to={`/blog-details/${data.slug}`}>
      <div className="BlogCardComponent">
        <div className="image-area">
          <img src={data.image.original_image} alt="" />

          <div className="time">
            <i className="far fa-clock"></i>
            16 AUG
          </div>
        </div>

        <div className="content">
          <div className="name">{data.title}</div>

          <HtmlToParagraphs data={data?.content} length={300} />

          <button>
            Read More <i className="fas fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BlogCardComponent;
