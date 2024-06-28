import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={`content-group ${className}`}>
      <div className="content4">
        <img
          className="mask-group-icon3"
          loading="lazy"
          alt=""
          src="/mask-group2@2x.png"
        />
        <div className="giftvoucher-wrapper">
          <h1 className="giftvoucher">giftvoucher</h1>
        </div>
      </div>
      <div className="image-block">
        <div className="image-31-parent">
          <div className="image-31" />
          <img
            className="group-icon"
            loading="lazy"
            alt=""
            src="/group-1000006283@2x.png"
          />
        </div>
      </div>
      <div className="container">
        <div className="legal-options">
          <div className="powered-by">{`Powered by `}</div>
        </div>
        <div className="payment-icons-parent">
          <img
            className="payment-icons"
            loading="lazy"
            alt=""
            src="/payment-icons@2x.png"
          />
          <div className="gift">
            <img
              className="icon-shape"
              loading="lazy"
              alt=""
              src="/vector-341.svg"
            />
          </div>
          <div className="icon-background">
            <div className="legal1">Legal</div>
          </div>
          <div className="legal-options1">
            <div className="refunds">Refunds</div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
