import React, { useContext } from "react";
import PageBannerComponent from "../components/PageBanner.component";
import { Link } from "react-router-dom";
import BloggingCardComponent from "../components/Blogging/BloggingCard.component";
import BloggingBigCardComponsnt from "../components/Blogging/BloggingBigCard.componsnt";
import { AllDataContext } from "../context/AllData.context";

const BloggingPage = () => {
  const { blogDatas } = useContext(AllDataContext);

  return (
    <div className="BloggingPage">
      <PageBannerComponent
        contentLeft="Read the latest news and updates from the Evertrek Team."
        image="https://i.assetzen.net/i/JPlzqpfxRxey/w:1920/h:600/q:70.webp"
      >
        Knowledge centeR
      </PageBannerComponent>

      {/* <div className="shortcut-buttons">
        <div className="wrapper">
          <div className="buttons-list">
            <Link>
              <div className="item">
                <div className="name">blog</div>
                <p>Read the latest news and updates from the Evertrek Team.</p>
              </div>
            </Link>

            <Link>
              <div className="item">
                <div className="name">podcast</div>
                <p>
                  Listen to our latest ramblings on the monthly podcast
                  episodes!
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div> */}

      <div className="wrapper">
        <div className="blogging-area">
          <div className="blogging-cards-area">
            {/*  <div className="blogging-small-cards">
              <BloggingCardComponent />
              <BloggingCardComponent />
            </div> */}

            <div className="blogging-card-list">
              {blogDatas &&
                blogDatas.map((data, idx) => (
                  <BloggingBigCardComponsnt key={idx} data={data} />
                ))}
            </div>
          </div>
          <div className="blogging-search-area">
            {/* <div className="blogging-search">
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

            <div className="blogging-search">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloggingPage;
