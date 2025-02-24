import PropTypes from "prop-types";
import "./Usage.css";

const Usage = ({ className = "" }) => {
  return (
    <div className={`usage ${className}`}>
      <h1 className="how-we-use-container">
        <ol className="how-we-use-your-information">
          <li>How We Use Your Information</li>
        </ol>
      </h1>
      <div className="usage-types">
        <div className="usage-subtypes">
          <div className="providing-services">2.1 Providing Services</div>
          <div className="we-use-your">
            We use your information to provide, maintain, and improve our
            services, including server hosting, customer support, and technical
            assistance.
          </div>
        </div>
        <div className="usage-subtypes1">
          <div className="communication">2.2 Communication</div>
          <div className="we-may-use1">
            We may use your contact information to send you important updates,
            notifications, and information related to your account or our
            services.
          </div>
        </div>
        <div className="usage-subtypes2">
          <div className="analytics">2.3 Analytics</div>
          <div className="we-use-analytics">
            We use analytics tools to analyze usage patterns and trends,
            allowing us to enhance the performance and user experience of our
            services.
          </div>
        </div>
      </div>
    </div>
  );
};

Usage.propTypes = {
  className: PropTypes.string,
};

export default Usage;
