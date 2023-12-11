/* eslint-disable react/no-unescaped-entities */
import PageBannerComponent from "../components/PageBanner.component";
import { useLocation } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";
import { useContext, useEffect, useState } from "react";

const BloggingDetailsPage = () => {
  const { blogDatas } = useContext(AllDataContext);

  const [selectedData, setSelectedData] = useState(null);

  const location = useLocation();

  useEffect(() => {
    if (blogDatas !== null) {
      blogDatas.forEach((data) => {
        if (location.pathname.split("/")[2] == data.slug) {
          setSelectedData(data);
        }
      });
    }
  }, [location, blogDatas]);

  return (
    <div className="BloggingPage BloggingDetailsPage">
      <PageBannerComponent
        image={`${selectedData && selectedData.image.original_image}`}
      >
        {selectedData && selectedData.title}
      </PageBannerComponent>

      <div className="wrapper">
        <div className="blogging-area">
          <div className="blogging-cards-area">
            <p
              className="desc"
              dangerouslySetInnerHTML={{
                __html: selectedData && selectedData.content,
              }}
            />

            {selectedData?.contents?.map((data, idx) => (
              <div className="with-image" key={idx}>
                <div className="image">
                  <img
                    src={data["text-image-text"]?.image?.original_image}
                    alt={data["text-image-text"]?.text}
                  />
                </div>

                <div className="about-content">
                  <h3>{data["text-image-text"]?.text}</h3>

                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{
                      __html: data["text-image-text"]?.content,
                    }}
                  ></p>
                </div>
              </div>
            ))}
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
      </div>
    </div>
  );
};

export default BloggingDetailsPage;
