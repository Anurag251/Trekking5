import { useContext, useEffect, useState } from "react";
import { AllDataContext } from "../../context/AllData.context";
import SearchPackageCardComponent from "./SearchPackageCard.component";

const SearchResultListComponent = ({ searchData }) => {
  const {
    tripDatas,
    categoriesDatas,
    selectedCate,
    setSelectedCate,
    setSearchData,
    selectedDatas,
    setSelectedDatas,
    setShowFilter,
  } = useContext(AllDataContext);

  useEffect(() => {
    if (categoriesDatas !== null) {
      categoriesDatas
        .filter((data) => data.id === selectedCate)
        .forEach((data) => {
          setSelectedDatas(data.trips);
        });
    }
  }, [categoriesDatas, selectedCate]);

  return (
    <div className="SearchResultListComponent">
      <div className="search-filter-title-area">
        <h4 className="search-filter-title">Tours</h4>

        <button
          className="search-filter-btn"
          onClick={() => setShowFilter(true)}
        >
          <i className="fas fa-filter"></i>
        </button>
      </div>
      {selectedDatas !== null
        ? selectedDatas.map((data, idx) => (
            <SearchPackageCardComponent key={idx} data={data} />
          ))
        : tripDatas &&
          tripDatas
            // .filter((data, idx) => idx < 10)
            .map((data, idx) => (
              <SearchPackageCardComponent key={idx} data={data} />
            ))}
    </div>
  );
};

export default SearchResultListComponent;
