/* eslint-disable react/no-unescaped-entities */
import PageBannerComponent from "../components/PageBanner.component";
import { Link, useLocation } from "react-router-dom";
import BloggingCardComponent from "../components/Blogging/BloggingCard.component";
import BloggingBigCardComponsnt from "../components/Blogging/BloggingBigCard.componsnt";
import NewPackageCardComponent from "../components/NewPackageCard.component";
import { AllDataContext } from "../context/AllData.context";
import { useContext, useEffect, useState } from "react";

const BloggingDetailsPage = () => {
  const { blogDatas } = useContext(AllDataContext);

  const [selectedData, setSelectedData] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (blogDatas !== null) {
      blogDatas.forEach((data) => {
        if (location.pathname.split("/")[2] == data.id) {
          setSelectedData(data);
        }
      });
    }
  }, [location, blogDatas]);

  return (
    <div className="BloggingPage BloggingDetailsPage">
      <PageBannerComponent
        image={`${selectedData && selectedData.image.original_image}`}
      ></PageBannerComponent>

      <div className="wrapper">
        <div className="blogging-area">
          <div className="blogging-cards-area">
            <h1>{selectedData && selectedData.title}</h1>

            <p
              className="desc"
              dangerouslySetInnerHTML={{
                __html: selectedData && selectedData.content,
              }}
            />
          </div>
          <div className="blogging-search-area">
            {<div className="blogging-search">
              <div className="filter-keyword-sec">
                <div className="filter-title">Previous Articles</div>
                <ul className="all-bloggign-links">
                  {blogDatas &&
                    blogDatas.map((data, idx) => (
                      <Link key={idx} to={`/blogging-details/${data.id}`}>
                        <li> {data.title}</li>
                      </Link>
                    ))}
                </ul>
              </div>
            </div>}

            {/*  <div className="blogging-search">
              <div className="filter-keyword-sec">
                <div className="filter-title">Search All</div>

                <div className="filter-group">
                  <input type="text" placeholder="Search..." />
                  <button>
                    <i className="fas fa-search"></i>
                  </button>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="blog-profile">
          <div className="image">
            <img
              src="https://img.freepik.com/free-icon/user_318-159711.jpg"
              alt=""
            />
          </div>

          <div className="profile-content">
            <h5 className="written">Written By</h5>
            <h2 className="name">
              {selectedData && selectedData.user.first_name}{" "}
              {selectedData && selectedData.user.last_name}
            </h2>
            <h4 className="role">{selectedData && selectedData.user.email}</h4>
          </div>
        </div>

        <section>
          <div className="others-package-list"></div>
        </section>
      </div>
    </div>
  );
};

export default BloggingDetailsPage;
