import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Feature.css";

const Feature = ({
  className = "",
  securePayments,
  pCIDSSSecurityCertificati,
  propWidth,
  propMinWidth,
  propFlex,
}) => {
  const featureStyle = useMemo(() => {
    return {
      width: propWidth,
      minWidth: propMinWidth,
      flex: propFlex,
    };
  }, [propWidth, propMinWidth, propFlex]);

  return (
    <div className={`feature ${className}`} style={featureStyle}>
      <div className="feature-content">
        <div className="feature-icon">
          <img className="image-icon1" alt="" src="/image-1@2x.png" />
        </div>
        <div className="secure-payments">{securePayments}</div>
      </div>
      <div className="pci-dss-security">{pCIDSSSecurityCertificati}</div>
    </div>
  );
};

Feature.propTypes = {
  className: PropTypes.string,
  securePayments: PropTypes.string,
  pCIDSSSecurityCertificati: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default Feature;
