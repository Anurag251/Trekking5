import React, { useContext, useEffect, useState } from "react";
import SearchBannreComponent from "./SearchBannre.component";
import FilterComponent from "./Filter.component";
import SearchResultListComponent from "./SearchResultList.component";
import { AllDataContext } from "../../context/AllData.context";
import { useLocation } from "react-router-dom";

const SearchComponent = () => {
  const {
    tripDatas,
    selectedDatas,
    setSelectedDatas,
    countPackage,
    setCountPackage,
    showFilter,
    setShowFilter,
  } = useContext(AllDataContext);

  const location = useLocation();

  useEffect(() => {
    if (location.state !== null) {
      setSelectedDatas(location.state.searchedData);
      setCountPackage(location.state.searchedData.length);
    }
  }, [location, location.state]);

  return (
    <div className="SearchComponent">
      <SearchBannreComponent countPackage={countPackage} />

      <section>
        <div className="wrapper">
          <div className="search-result-area">
            <div
              className={`filter-section-area ${showFilter ? "showFilter" : ""}`}
            >
              <div
                className="filter-section-bg"
                onClick={() => setShowFilter(false)}
              ></div>
              <FilterComponent setCountPackage={setCountPackage} />
            </div>

            {tripDatas && (
              <SearchResultListComponent
                searchData={selectedDatas !== null ? selectedDatas : tripDatas}
              />
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SearchComponent;
