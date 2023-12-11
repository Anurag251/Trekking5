import SearchFilterBoxComponent from "./SearchBox.component";

const PageSearchBoxComponent = () => {
  return (
    <div
      className="page-banner"
      // style={{ backgroundImage: `url(${bannerImage})` }}
    >
      <div className="wrapper">
        <SearchFilterBoxComponent />
      </div>
    </div>
  );
};

export default PageSearchBoxComponent;
