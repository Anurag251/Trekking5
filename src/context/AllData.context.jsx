/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import { apis } from "../utils/apis";

export const AllDataContext = createContext();

export const AllDataProvider = ({ children }) => {
  const [bannerDatas, setBannerDatas] = useState(null);
  const [blogDatas, setBlogDatas] = useState(null);
  const [tripDatas, setTripDatas] = useState(null);
  const [teamDatas, setTeamDatas] = useState(null);
  const [reviewDatas, setReviewDatas] = useState(null);
  const [countryDatas, setCountryDatas] = useState(null);
  const [categoriesDatas, setCategoriesDatas] = useState(null);
  const [galleryDatas, setGalleryDatas] = useState(null);
  const [aboutDetails, setAboutDetails] = useState(null);
  const [sideNavHidden, setSideNavHidden] = useState(false);
  const [filterPackage, setFilterPackage] = useState(false);
  const [contactDatas, setContactDatas] = useState(null);
  const [quickLinkDatas, setQuickLinkDatas] = useState(null);
  const [whyChooseUs, setWhyChooseUs] = useState(null);
  const [partnersDatas, setPartnersDatas] = useState(null);
  const [videoDatas, setVideoDatas] = useState(null);
  const [contactPopup, setContactPopup] = useState(false);
  const [countPackage, setCountPackage] = useState(null);
  const [showFilter, setShowFilter] = useState(false);
  const [bookingPopupForm, setBookingPopupForm] = useState({
    isBookingPopupForm: false,
    date: "",
    price: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({
    message: false,
    title: "",
    type: "",
    desc: "",
  });

  const [selectedCate, setSelectedCate] = useState(null);
  const [searchData, setSearchData] = useState(null);
  const [selectedDatas, setSelectedDatas] = useState(null);
  const [detailsPageNav, setDetailsPageNav] = useState("TripOverview");
  const [hitAgain, setHitAgain] = useState(false);

  useEffect(() => {
    if (
      bannerDatas === null &&
      blogDatas === null &&
      tripDatas === null &&
      teamDatas === null &&
      reviewDatas === null &&
      countryDatas === null &&
      categoriesDatas === null
    ) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [
    bannerDatas,
    blogDatas,
    tripDatas,
    teamDatas,
    reviewDatas,
    countryDatas,
    categoriesDatas,
  ]);

  // console.log(bannerDatas);
  // console.log(blogDatas);
  // console.log(tripDatas);
  // console.log(teamDatas);
  // console.log(reviewDatas);
  // console.log(countryDatas);
  // console.log(categoriesDatas);

  useEffect(() => {
    /****** banner ******/
    {
      /* const apiCall = async () => {
    const bannerResponse = await apis.get("/banner");
    const tripResponse = await apis.get("/trip");
    const contentResponse = await apis.get("/home/content");
    const teamsResponse = await apis.get("/teams");
    const reviewResponse = await apis.get("/review");
    const countryResponse = await apis.get("/country");
    const tripcategoryResponse = await apis.get("/tripcategory");
    const galleryResponse = await apis.get("/gallery");
    const pageResponse = await apis.get("/page");
    const quicklinkResponse = await apis.get("/quicklink");
    const settingsResponse = await apis.get("/settings");
    const sacredResponse = await apis.get("/sacred");
    const bookResponse = await apis.get("/book");
    const videobannerResponse = await apis.get("/videobanner");

    if (bannerResponse.status === 200) {
      setBannerDatas(bannerResponse.data.data);
    }

    if (tripResponse.status === 200) {
      setTripDatas(tripResponse.data.data);
    }

    if (contentResponse.status === 200) {
      setBlogDatas(contentResponse.data.data);
    }

    if (teamsResponse.status === 200) {
      setTeamDatas(teamsResponse.data.data);
    }

    if (reviewResponse.status === 200) {
      setReviewDatas(reviewResponse.data.data);
    }

    if (countryResponse.status === 200) {
      setCountryDatas(countryResponse.data.data);
    }

    if (tripcategoryResponse.status === 200) {
      setCategoriesDatas(tripcategoryResponse.data.data);
    }

    if (galleryResponse.status === 200) {
      setGalleryDatas(galleryResponse.data.data);
    }

    if (pageResponse.status === 200) {
      setAboutDetails(pageResponse.data.data);
    }

    if (quicklinkResponse.status === 200) {
      setQuickLinkDatas(quicklinkResponse.data.data);
    }

    if (settingsResponse.status === 200) {
      setContactDatas(settingsResponse.data.data);
    }

    if (sacredResponse.status === 200) {
      setWhyChooseUs(sacredResponse.data.data);
    }

    if (bookResponse.status === 200) {
      setPartnersDatas(bookResponse.data.data);
    }

    if (videobannerResponse.status === 200) {
      setVideoDatas(videobannerResponse.data.data);
    }
  };

  apiCall(); */
    }

    /****** banner ******/
    apis
      .get("/banner")
      .then((res) => {
        if (res.status === 200) {
          setBannerDatas(res.data.data);
          // console.log("trip: ");
          // console.log(res);

          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    /****** trip ******/
    apis
      .get("/trip")
      .then((res) => {
        if (res.status === 200) {
          setTripDatas(res.data.data);
          setCountPackage(res.data.data?.length);
          // console.log("trip: ");
          // console.log(res.data.data);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    /****** blog ******/
    apis
      .get("/home/content")
      .then((res) => {
        if (res.status === 200) {
          setBlogDatas(res.data.data && res.data.data.latest_post);
          // console.log("blog: ");
          // console.log(res.data.data.latest_post);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    /****** teams ******/
    apis
      .get("/teams")
      .then((res) => {
        if (res.status === 200) {
          setTeamDatas(res.data.data);
          // console.log("teams: ");
          // console.log(res.data.data);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    /****** review ******/
    apis
      .get("/review")
      .then((res) => {
        if (res.status === 200) {
          setReviewDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    /****** country ******/
    apis
      .get("/country")
      .then((res) => {
        if (res.status === 200) {
          setCountryDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/tripcategory")
      .then((res) => {
        if (res.status === 200) {
          setCategoriesDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/gallery")
      .then((res) => {
        if (res.status === 200) {
          setGalleryDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/page")
      .then((res) => {
        if (res.status === 200) {
          setAboutDetails(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/quicklink")
      .then((res) => {
        if (res.status === 200) {
          setQuickLinkDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/settings")
      .then((res) => {
        if (res.status === 200) {
          setContactDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/sacred")
      .then((res) => {
        if (res.status === 200) {
          setWhyChooseUs(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/book")
      .then((res) => {
        if (res.status === 200) {
          setPartnersDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.log(err);
      });

    apis
      .get("/videobanner")
      .then((res) => {
        if (res.status === 200) {
          setVideoDatas(res.data.data);
          // console.log("review: ");
          // console.log(res.data.data);
          if (res.data === "") {
            setTimeout(() => {
              setHitAgain(!hitAgain);
            }, 1000);
          }
        }
      })
      .catch((err) => {
        console.error(err);
      });
  }, [hitAgain]);

  return (
    <AllDataContext.Provider
      value={{
        loading,
        setLoading,
        bannerDatas,
        setBannerDatas,
        blogDatas,
        setBlogDatas,
        tripDatas,
        setTripDatas,
        reviewDatas,
        setReviewDatas,
        teamDatas,
        setTeamDatas,
        countryDatas,
        setCountryDatas,
        categoriesDatas,
        setCategoriesDatas,
        message,
        setMessage,
        selectedCate,
        setSelectedCate,
        galleryDatas,
        setGalleryDatas,
        aboutDetails,
        setAboutDetails,
        sideNavHidden,
        setSideNavHidden,
        filterPackage,
        setFilterPackage,
        searchData,
        setSearchData,
        selectedDatas,
        setSelectedDatas,
        contactDatas,
        setContactDatas,
        quickLinkDatas,
        setQuickLinkDatas,
        contactPopup,
        setContactPopup,
        detailsPageNav,
        setDetailsPageNav,
        countPackage,
        setCountPackage,
        showFilter,
        setShowFilter,
        bookingPopupForm,
        setBookingPopupForm,
        whyChooseUs,
        partnersDatas,
        videoDatas,
      }}
    >
      {children}
    </AllDataContext.Provider>
  );
};
