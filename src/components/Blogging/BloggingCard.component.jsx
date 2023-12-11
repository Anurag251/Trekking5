import { Link } from "react-router-dom";

const BloggingCardComponent = () => {
  return (
    <Link to="/blogging-details">
      <div className="BloggingCardComponent">
        <div className="inner-area">
          <div className="image-area">
            <img
              src="https://i.assetzen.net/i/7qEXqCd7V6TI/w:500/h:500/q:70.webp"
              alt=""
            />
          </div>

          <div className="name">How high is Everest Base Camp?</div>

          <button>Read More</button>
        </div>
      </div>
    </Link>
  );
};

export default BloggingCardComponent;
