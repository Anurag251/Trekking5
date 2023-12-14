import { Fragment, useContext, useEffect, useState } from "react";
import PackageBannerComponent from "./PackageBanner.component";
import NavigateButtonsComponent from "./NavigateButtons.component";
import TripOverviewComponent from "./TripOverview.component";
import ItineraryComponent from "./Itinerary.component";
import DateAndPriceComponent from "./DateAndPrice.component";
import TripExtensionsComponent from "./TripExtensions.component";
import MoreInfoComponent from "./MoreInfo.component";
import GalleryComponent from "./Gallery.component";
import { AllDataContext } from "../../context/AllData.context";
import { useLocation } from "react-router-dom";
import LoadingComponent from "../Loading.component";
import PackageBookingComponent from "../PackageDetail/PackageBooking.component";
import YouMightAlsoLikeComponent from "./YouMightAlsoLike.component";

const NewPackageDetailsComponent = () => {
  const { tripDatas, setDetailsPageNav } = useContext(AllDataContext);
  const [choosenPrice, setChoosenPrice] = useState(null);

  const [selectedData, setSelectedData] = useState(null);

  const location = useLocation();

  useEffect(() => {
    setDetailsPageNav("TripOverview");
    if (tripDatas !== null) {
      tripDatas?.forEach((data) => {
        if (location.pathname.split("/")[2] == data.slug) {
          setSelectedData(data);
        }
      });
    }
  }, [location, tripDatas]);

  console.log(selectedData);

  return (
    <Fragment>
      {selectedData !== null ? (
        <div className="NewPackageDetails">
          <PackageBannerComponent image={selectedData?.image?.original_image}>
            {selectedData?.title.toLowerCase()}
          </PackageBannerComponent>

          <PackageBookingComponent
            selectedData={selectedData}
            choosenPrice={choosenPrice}
            setChoosenPrice={setChoosenPrice}
            popup={true}
          />

          <NavigateButtonsComponent data={selectedData} />

          <TripOverviewComponent data={selectedData} />

          {(selectedData.itenarydetails !== null &&
            selectedData.itenarydetails !== undefined) ||
          selectedData.itenarydetails.length ? (
            selectedData.itenarydetails[0]?.trip_title !== null ? (
              <ItineraryComponent data={selectedData} />
            ) : null
          ) : null}

          {(selectedData.exclude !== null || selectedData.include !== null) &&
          (selectedData.exclude !== undefined ||
            selectedData.include !== undefined) &&
          (selectedData.exclude !== "" || selectedData.include !== "") ? (
            <MoreInfoComponent data={selectedData} />
          ) : null}

          {(selectedData.price !== null && selectedData.price !== undefined) ||
          selectedData.price.length ? (
            selectedData.price[0]?.date !== null ||
            selectedData.price[0]?.label !== null ||
            selectedData.price[0]?.space !== null ||
            selectedData.price[0]?.value !== null ? (
              <DateAndPriceComponent data={selectedData} />
            ) : null
          ) : null}

          {selectedData.equipments !== null &&
          selectedData.equipments !== undefined &&
          selectedData.equipments !== "" ? (
            <TripExtensionsComponent data={selectedData} />
          ) : null}

          {selectedData.galleryimage !== null &&
          selectedData.galleryimage !== undefined &&
          selectedData.galleryimage.length ? (
            <GalleryComponent data={selectedData} />
          ) : null}

          <YouMightAlsoLikeComponent data={selectedData} />
        </div>
      ) : (
        <LoadingComponent />
      )}
    </Fragment>
  );
};

export default NewPackageDetailsComponent;
