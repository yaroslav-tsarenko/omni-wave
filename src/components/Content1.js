import PropTypes from "prop-types";
import "./Content1.css";

const Content1 = ({ className = "" }) => {
  return (
    <section className={`content1 ${className}`}>
      <div className="section1">
        <div className="form1">
          <div className="button-searchsvg-wrapper">
            <img
              className="button-searchsvg1"
              loading="lazy"
              alt=""
              src="/button--searchsvg1@2x.png"
            />
          </div>
          <div className="container">
            <div className="enter-mobile-number2">
              Enter Mobile Number or Services name. For instance: netflix,
              etisalat, itunes, games.
            </div>
          </div>
        </div>
      </div>
      <div className="section2">
        <div className="heading-1-mobile-recharge-wrapper">
          <h1 className="heading-11">Mobile Recharge</h1>
        </div>
        <div className="provider-links">
          <div className="provider-link-items">
            <div className="link41">
              <div className="provider-logos">
                <img
                  className="etisalatpng-icon"
                  loading="lazy"
                  alt=""
                  src="/etisalatpng@2x.png"
                />
              </div>
              <a
                className="etisalat-online-recharge1"
                href="https://www.figma.com/design/NDVMwC7dCRQkkmPwHllGjH?node-id=2-4044"
                target="_blank"
              >
                Etisalat Online Recharge
              </a>
            </div>
            <div className="link42">
              <div className="dupng-wrapper">
                <img
                  className="dupng-icon"
                  loading="lazy"
                  alt=""
                  src="/dupng@2x.png"
                />
              </div>
              <div className="du-online-recharge1">Du Online Recharge</div>
            </div>
            <div className="link43">
              <div className="virgin-mobilepng-wrapper">
                <img
                  className="virgin-mobilepng-icon"
                  loading="lazy"
                  alt=""
                  src="/virginmobilepng@2x.png"
                />
              </div>
              <div className="virgin-mobile1">Virgin Mobile</div>
            </div>
          </div>
        </div>
        <div className="heading-2-send-a-little-happ-parent">
          <h1 className="heading-2">
            Send a Little Happiness to United Arab Emirates
          </h1>
          <div className="happiness-content">
            <div className="happiness-paragraph">
              <div className="it-is-always-good-when-there-i-parent">
                <div className="it-is-always-container">
                  <span>
                    <p className="it-is-always">
                      It is always good when there is extra money on the mobile
                      account. In this case, you do not have to worry that your
                      credit will suddenly end during an important
                    </p>
                    <p className="conversation-to-prevent">{`conversation. To prevent this from happening to you or your loved ones. You can do it easily on our website `}</p>
                  </span>
                </div>
                <div className="httpspaynetred-wrapper">
                  <div className="httpspaynetred">https://paynet.red</div>
                </div>
              </div>
              <div className="wrapper">
                <div className="div4">.</div>
              </div>
            </div>
            <div className="read-more">Read more</div>
          </div>
        </div>
      </div>
    </section>
  );
};

Content1.propTypes = {
  className: PropTypes.string,
};

export default Content1;
