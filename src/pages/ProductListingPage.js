import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Content from "../components/Content";
import CountryLinks from "../components/CountryLinks";
import Component from "../components/Component";
import "./ProductListingPage.css";

const ProductListingPage = () => {
  return (
    <div className="productlistingpage">
      <ResponsiveNavbar maskGroup="/mask-group@2x.png" />
      <Content />
      <main className="countries">
        <CountryLinks />
      </main>
      <Component maskGroup="/mask-group-1@2x.png" />
    </div>
  );
};

export default ProductListingPage;
