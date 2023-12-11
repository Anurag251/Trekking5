import { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IconSearch } from "./Icons.component";
import { AllDataContext } from "../context/AllData.context";

const SearchFilterBoxComponent = () => {
  const { tripDatas } = useContext(AllDataContext);

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(tripDatas);
  const [isFocused, setIsFocused] = useState(false);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchQuery(value);

    // Filter data based on the search query for title, country, and season
    const filtered = tripDatas.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        (item.country &&
          item.country.toLowerCase().includes(value.toLowerCase())) ||
        (item.season && item.season.toLowerCase().includes(value.toLowerCase()))
    );
    setFilteredData(filtered);
  };

  const handleSelectItem = (item) => {
    setSearchQuery(item.title); // Set the selected item in the input
    setIsFocused(false); // Hide the suggestion list
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const suggestionBox = document.getElementById("suggest-box");
      const inputBox = document.getElementById("search-input");

      if (
        suggestionBox &&
        !suggestionBox.contains(event.target) &&
        inputBox &&
        !inputBox.contains(event.target)
      ) {
        setIsFocused(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="wrapper">
      <div className="package-search-area">
        <div className="form">
          <div className="package-search">
            <div className="group">
              <div className="icon">
                <IconSearch />
              </div>

              <input
                type="search"
                placeholder="Search by package, country, or season"
                value={searchQuery}
                onChange={handleSearch}
                onFocus={() => setIsFocused(true)}
                id="search-input"
                autoComplete="off"
              />
            </div>
          </div>
          {isFocused && filteredData.length > 0 && (
            <div className="suggest-list" id="suggest-box">
              <ul>
                {filteredData.map((item) => (
                  <li key={item.id} onClick={() => handleSelectItem(item)}>
                    <Link to={`/package-details/${item.slug}`}>
                      <button>{item.title}</button>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchFilterBoxComponent;
