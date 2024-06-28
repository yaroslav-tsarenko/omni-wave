import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductListingPage from "./pages/ProductListingPage";
import ContactUsPage from "./pages/ContactUsPage";
import CartDetailsPage from "./pages/CartDetailsPage";
import MobileRechargePage from "./pages/MobileRechargePage";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/productlistingpage":
        title = "";
        metaDescription = "";
        break;
      case "/contactuspage":
        title = "";
        metaDescription = "";
        break;
      case "/cartdetailspage":
        title = "";
        metaDescription = "";
        break;
      case "/mobilerechargepage":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/productlistingpage" element={<ProductListingPage />} />
      <Route path="/contactuspage" element={<ContactUsPage />} />
      <Route path="/cartdetailspage" element={<CartDetailsPage />} />
      <Route path="/mobilerechargepage" element={<MobileRechargePage />} />
    </Routes>
  );
}
export default App;
