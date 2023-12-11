/* eslint-disable no-unused-vars */
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import PackageListCardComponent from "./PackageListCard.component";
import PageSearchBoxComponent from "./SearchBoxBanner.component";

const SearchedDataPage = () => {
  const [cardData, setCardData] = useState(null);
  const loaction = useLocation();

  useEffect(() => {
    setCardData(loaction.state.searchedData);
  }, [loaction]);

  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className="searched-data-page">
      <PageSearchBoxComponent />

      {loaction.state !== null ? (
        <section>
          <div className="wrapper">
            {loaction.state.searchedData.map((searchedData, idx) => (
              <PackageListCardComponent key={idx} cardData={searchedData} />
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
};

export default SearchedDataPage;
