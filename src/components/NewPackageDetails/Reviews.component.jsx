import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const ReviewsComponent = () => {
  const { detailsPageNav } = useContext(AllDataContext);

  return (
    <div
      className={`ReviewsSection ${
        detailsPageNav === "Reviews" ? "active" : ""
      }`}
    >
      <section>
        <div className="wrapper">
          <div className="main-title">
            Reviews
          </div>

          <div className="main-container">
            <div className="reviews-list">
              <div className="item">
                <div className="star-area">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <div className="name">Craig and Mandy</div>

                <p className="desc">
                  Wow wow wow! Our trip was excellent, in all aspects! The
                  attention to detail made us feel unique and very spec ...
                </p>

                <button>Read More</button>
              </div>

              <div className="item">
                <div className="star-area">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <div className="name">Craig and Mandy</div>

                <p className="desc">
                  Wow wow wow! Our trip was excellent, in all aspects! The
                  attention to detail made us feel unique and very spec ...
                </p>

                <button>Read More</button>
              </div>

              <div className="item">
                <div className="star-area">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <div className="name">Craig and Mandy</div>

                <p className="desc">
                  Wow wow wow! Our trip was excellent, in all aspects! The
                  attention to detail made us feel unique and very spec ...
                </p>

                <button>Read More</button>
              </div>

              <div className="item">
                <div className="star-area">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                </div>

                <div className="name">Craig and Mandy</div>

                <p className="desc">
                  Wow wow wow! Our trip was excellent, in all aspects! The
                  attention to detail made us feel unique and very spec ...
                </p>

                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ReviewsComponent;
