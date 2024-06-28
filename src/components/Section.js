import Feature from "./Feature";
import PropTypes from "prop-types";
import "./Section.css";

const Section = ({ className = "" }) => {
  return (
    <section className={`section ${className}`}>
      <div className="features-title">
        <h1 className="why-choose-us">Why choose us?</h1>
      </div>
      <div className="features-grid">
        <Feature
          securePayments="100% secure payments"
          pCIDSSSecurityCertificati="PCI DSS security certification - we're providing the secure environment for transactions processing in real time."
        />
        <div className="features-grid1">
          <Feature
            securePayments="Faster money transfer"
            pCIDSSSecurityCertificati="Download our mobile app for even faster and more convenient top-ups any time, anywhere"
            propWidth="unset"
            propMinWidth="149px"
            propFlex="1"
          />
          <Feature
            securePayments="Affordable prices"
            pCIDSSSecurityCertificati="We don’t have any hidden or confusing fees - you will always know how much balance your loved ones will receive"
            propWidth="unset"
            propMinWidth="149px"
            propFlex="1"
          />
        </div>
      </div>
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
