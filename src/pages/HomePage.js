import { Button } from "@mui/material";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Categories from "../components/Categories";
import Section from "../components/Section";
import FeaturesList from "../components/FeaturesList";
import Component from "../components/Component";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage">
      <ResponsiveNavbar maskGroup="/mask-group@2x.png" />
      <section className="hero-image">
        <img className="image-37-icon" alt="" src="/image-37@2x.png" />
        <h1 className="seamless-connectivity-anywher">
          {" "}
          Seamless Connectivity, Anywhere, Anytime
        </h1>
        <div className="experience-the-future">
          {" "}
          Experience the Future of Mobile Connectivity with eSIM Technology
        </div>
        <Button
          className="component-5"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "18",
            background: "#3d160a",
            borderRadius: "50px",
            "&:hover": { background: "#3d160a" },
            width: 159,
            height: 50,
          }}
        >
          Add to Cart
        </Button>
      </section>
      <section className="section-search-block-home">
        <div className="form-search-block-form">
          <img
            className="image-icon"
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
          <div className="enter-mobile-number">
            Enter Mobile Number or Services name. For instance: netflix,
            etisalat, itunes, games.
          </div>
        </div>
      </section>
      <Categories />
      <Section />
      <FeaturesList />
      <Component maskGroup="/mask-group-1@2x.png" />
    </div>
  );
};

export default HomePage;
