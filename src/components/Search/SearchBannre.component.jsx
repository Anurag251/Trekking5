/* eslint-disable react/prop-types */
import { useContext } from "react";
import { AllDataContext } from "../../context/AllData.context";

const SearchBannreComponent = ({ countPackage }) => {
  return (
    <div className="SearchBannreComponent">
      <div className="wrapper">
        <h3>{countPackage} Tours found</h3>
      </div>
    </div>
  );
};

export default SearchBannreComponent;
