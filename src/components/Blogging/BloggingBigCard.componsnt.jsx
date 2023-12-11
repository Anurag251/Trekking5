/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

const BloggingBigCardComponsnt = ({ data }) => {
  return (
    <Link to={`/blogging-details/${data.id}`}>
      <div className="BloggingBigCardComponsnt">
        <div className="image-area">
          <img
            src={data.image.original_image}
            alt=""
          />
        </div>

        <div className="content">
          <h4 className="card-name">{data.title}</h4>
          <h6 className="cate-name">CATEGORY: {data.post_type}</h6>

          <p
            className="desc"
            dangerouslySetInnerHTML={{
              __html: data && data.content,
            }}
          />

          <div className="button-area">
            <button>Read More</button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BloggingBigCardComponsnt;
