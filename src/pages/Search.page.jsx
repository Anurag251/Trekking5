import React, { useContext, useEffect, useState } from "react";
import SearchBoxComponent from "../components/SearchBox.component";
import PackageListComponent from "../components/PackageList.component";
import { useLocation } from "react-router-dom";
import { AllDataContext } from "../context/AllData.context";

const SearchPage = () => {
  const { tripDatas, selectedDatas, setSelectedDatas } =
    useContext(AllDataContext);

  const location = useLocation();

  useEffect(() => {
    if (location.state !== null) {
      setSelectedDatas(location.state.searchedData);
    }
  }, [location, location.state]);

  return (
    <div className="search-page">
      <div className="search-package">
        <div className="wrapper">
          <div className="search-area">
            <div className="search-title"></div>

            <SearchBoxComponent />

            {tripDatas && (
              <PackageListComponent
                searchData={selectedDatas !== null ? selectedDatas : tripDatas}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
