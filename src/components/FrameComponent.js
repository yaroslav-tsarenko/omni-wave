import ResponsiveNavbar from "./ResponsiveNavbar";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`responsive-navbar-parent ${className}`}>
      <ResponsiveNavbar maskGroup="/mask-group1@2x.png" />
      <div className="frame-wrapper">
        <div className="frame-container">
          <div className="frame-parent">
            <div className="your-cart-wrapper">
              <h1 className="your-cart">Your Cart</h1>
            </div>
            <div className="view-or-edit">
              View or edit your cart before checkout
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
