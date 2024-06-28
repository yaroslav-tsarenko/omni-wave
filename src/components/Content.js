import PropTypes from "prop-types";
import "./Content.css";

const Content = ({ className = "" }) => {
  return (
    <div className={`content ${className}`}>
      <div className="recharge-banner-parent">
        <div className="recharge-banner">
          <div className="paynetred">Paynet.Red</div>
          <div className="div">/</div>
          <div className="mobile-recharge1">Mobile Recharge</div>
        </div>
        <div className="search">
          <h1 className="heading-1">Online Mobile Recharge</h1>
          <div className="form">
            <img
              className="button-searchsvg"
              loading="lazy"
              alt=""
              src="/button--searchsvg@2x.png"
            />
            <div className="enter-mobile-number1">
              Enter Mobile Number or Services name. For instance: netflix,
              etisalat, itunes, games.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  className: PropTypes.string,
};

export default Content;
