import PropTypes from "prop-types";
import "./Component.css";

const Component = ({ className = "", maskGroup }) => {
  return (
    <footer className={`component-7 ${className}`}>
      <div className="footer-links-container">
        <div className="links-wrapper">
          <div className="mask-group-group">
            <img className="mask-group-icon1" alt="" src={maskGroup} />
            <h1 className="omniwavecloud1">OmniWaveCloud</h1>
          </div>
          <div className="copyright">
            <h3 className="about">About</h3>
            <div className="about1">About</div>
            <div className="faq">FAQ</div>
            <div className="contact">Contact</div>
            <div className="press">Press</div>
            <div className="reviews">Reviews</div>
          </div>
          <div className="link-columns">
            <h3 className="product">Product</h3>
            <div className="businesses">Businesses</div>
            <div className="gift-card-incentives">Gift Card Incentives</div>
          </div>
          <div className="link-columns1">
            <h3 className="legal">Legal</h3>
            <div className="site-terms">Site Terms</div>
            <div className="privacy">Privacy</div>
          </div>
          <div className="link-columns2">
            <h3 className="use-giftvoucher">Use Giftvoucher</h3>
            <div className="how-it-works">How it works</div>
            <div className="why-us">Why Us?</div>
            <div className="redeem">Redeem</div>
          </div>
          <div className="link-columns3">
            <h3 className="other-stuff">Other stuff</h3>
            <div className="blog">Blog</div>
            <div className="gift-card-worth">Gift Card Worth</div>
            <div className="sitemap">Sitemap</div>
          </div>
        </div>
        <div className="categories1">
          <div className="categories2">Categories</div>
          <div className="restaurants-bars-spas-shopping">{`Restaurants Bars Spas Shopping Night Life Food Active Life Arts Hotels & Travel Event Planning & Services`}</div>
        </div>
      </div>
    </footer>
  );
};

Component.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
};

export default Component;
