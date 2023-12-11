import HeaderComponent from "./components/Header.component";
import "./assets/styles/main.sass";
import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/Home.page";
import FooterComponent from "./components/Footer.component";
import { Fragment, useContext, useEffect, useState } from "react";
import { ContactComponent } from "./components/Contact.component";
import BlogPage from "./pages/Blog.page";
import AllPackagePage from "./pages/AllPackage.page";
import LoadingComponent from "./components/Loading.component";
import { AllDataContext } from "./context/AllData.context";
import SuccessMessageComponent from "./components/SuccessMessage.component";
import BlogDetailsPage from "./pages/BlogDetails.page";
import SideNavComponent from "./components/SideNav.component";
import ReasonsToChooseUsPage from "./pages/ReasonsToChooseUs.page";
import HaveChatComponent from "./components/HaveChat.component";
import NewPackageDetailsComponent from "./components/NewPackageDetails/NewPackageDetails.component";
import MeetTheTeamPage from "./pages/MeetTheTeam.page";
import TrekkingInNepalPage from "./pages/TrekkingInNepal.page";
import DestinationDetailsPage from "./pages/DestinationDetails.page";
import DestinationPage from "./pages/Destination.page";
import ExpeditionPage from "./pages/Expedition.page";
import SearchedDataPage from "./components/PackageList.component";
import ExpeditionDetailsPage from "./pages/ExpeditionDetails.page";
import FAQsPage from "./pages/FAQs.page";
import RecommendedTrekkingGearsPage from "./pages/RecommendedTrekkingGears.page";
import RecommendedExpeditionGearsPage from "./pages/RecommendedExpeditionGears.page";
import DynamicPage from "./pages/Dynamic.page";
import favIcon from "./assets/images/Camp_to_Summit_icon.png";

function App() {
  const {
    loading,
    contactPopup,
    setContactPopup,
    categoriesDatas,
    contactDatas,
  } = useContext(AllDataContext);
  const location = useLocation();

  const [scrollingPosition, setScrollingPosition] = useState("");

  useEffect(() => {
    window.scroll(0, 0);
  }, [location]);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrollingPosition(true);
    } else {
      setScrollingPosition(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const setFavicon = (faviconUrl) => {
    const link =
      document.querySelector("link[rel*='icon']") ||
      document.createElement("link");
    link.type = "image/x-icon";
    link.rel = "icon";
    link.href = faviconUrl;
    document.head.appendChild(link);
  };

  useEffect(() => {
    setFavicon(favIcon);

    const timeout = setTimeout(() => {
      setFavicon(contactDatas && contactDatas?.branding?.logo);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="app">
      {loading ? (
        <LoadingComponent />
      ) : (
        <Fragment>
          <HeaderComponent />

          <SideNavComponent />

          <SuccessMessageComponent />

          <div className={`enquiry-sec ${contactPopup ? "active" : ""}`}>
            <button className="enquiry-icon">
              <i className="fas fa-phone"></i>
            </button>

            <p
              className="enquiry-button"
              onClick={() => setContactPopup(!contactPopup)}
            >
              Enquiry
            </p>

            <button className="enquiry-icon">
              <i className="fas fa-envelope"></i>
            </button>
          </div>

          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route
              path="/trekking-peaks"
              element={
                <DestinationPage
                  title={location?.pathname?.split("/")[1]?.replace("-", " ")}
                />
              }
            />

            <Route
              path="/activities"
              element={
                <DestinationPage
                  activities
                  title={contactDatas?.branding?.activities_title1}
                  subTitle={contactDatas?.branding?.activities_title2}
                />
              }
            />
            {/*  <Route path="/packages" element={<AllPackagePage />} />


          <Route path="/expedition" element={<TrekkingInNepalPage />} /> */}

            {categoriesDatas &&
              categoriesDatas.map((data, idx) => (
                <Route key={idx} path={data.slug} element={<DynamicPage />} />
              ))}

            <Route path="/tour" element={<ExpeditionPage />} />

            <Route path="/faqs" element={<FAQsPage />} />

            <Route
              path="/destination-details/:id"
              element={<DestinationDetailsPage />}
            />

            <Route
              path="/expedition-details/:id"
              element={<ExpeditionDetailsPage />}
            />

            <Route path="/search" element={<SearchedDataPage />} />

            <Route
              path="/package-details/:id"
              element={<NewPackageDetailsComponent />}
            />

            <Route path="/about/:id" element={<ReasonsToChooseUsPage />} />

            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog-details/:id" element={<BlogDetailsPage />} />
            <Route path="/meet-the-team" element={<MeetTheTeamPage />} />

            <Route
              path="/recommended-trekking-gears"
              element={<RecommendedTrekkingGearsPage />}
            />

            <Route
              path="/recommended-expedition-gears"
              element={<RecommendedExpeditionGearsPage />}
            />

            <Route
              path="/contact"
              element={
                <ContactComponent
                  title={contactDatas?.branding?.contact_title}
                  subTitle={contactDatas?.branding?.contact_description}
                />
              }
            />

            <Route path="*" element={<HomePage />} />
          </Routes>

          <HaveChatComponent
            title={contactDatas?.branding?.chat_title1}
            subTitle={contactDatas?.branding?.chat_title2}
            desc={contactDatas?.branding?.chat_text}
          />

          <FooterComponent title={contactDatas?.branding?.affiliation} />

          <button
            className={`scroll-to-top ${scrollingPosition ? "show" : ""}`}
            onClick={() => {
              window.scroll(0, 0);
            }}
          >
            <i className="fas fa-angle-up"></i>
          </button>
        </Fragment>
      )}
    </div>
  );
}

export default App;
