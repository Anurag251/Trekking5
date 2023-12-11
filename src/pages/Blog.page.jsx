import { AllDataContext } from "../context/AllData.context";
import { Fragment, useContext } from "react";
import BlogCardComponent from "../components/BlogCard.component";
import PageBannerComponent from "../components/PageBanner.component";
import image from "../assets/images/trekking_peaks.webp";

const BlogPage = () => {
  const { blogDatas } = useContext(AllDataContext);

  return (
    <Fragment>
      <PageBannerComponent image={image}>Blog</PageBannerComponent>
      <section className="other-page">
        <div className="wrapper">
          <div className="news-events">

            <div className="list">
              {blogDatas &&
                blogDatas?.map((data, idx) => {
                  return <BlogCardComponent key={idx} data={data} />;
                })}
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default BlogPage;
