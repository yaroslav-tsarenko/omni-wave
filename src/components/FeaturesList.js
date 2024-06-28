import PropTypes from "prop-types";
import "./FeaturesList.css";

const FeaturesList = ({ className = "" }) => {
  return (
    <section className={`features-list ${className}`}>
      <div className="features-list-items-parent">
        <div className="features-list-items">
          <h3 className="instant-mobile-recharge">
            Instant mobile recharge online
          </h3>
          <div className="instant-recharge-of-container">
            <span>
              <p className="instant-recharge-of">{`Instant Recharge of Du & Etisalat online, anytime`}</p>
              <p className="and-anywhere-with">
                and anywhere with Apple Pay, PayPal Wallet, Credit
              </p>
              <p className="card-or-crypto">
                Card or Crypto payment. Recharging your airtime
              </p>
              <p className="balance-will-take">
                balance will take only a couple of minutes!
              </p>
              <p className="blank-line">&nbsp;</p>
              <p className="save-time-and">
                Save time and money with a convenient recharge
              </p>
              <p className="with-your-gcc-issued">
                with your GCC-issued Visa/Mastercard payment
              </p>
              <p className="card">{`card. `}</p>
              <p className="blank-line1">&nbsp;</p>
              <p className="surprise-your-loved">
                Surprise your loved ones by giving them extra
              </p>
              <p className="minutes-to-talk">
                minutes to talk. It's simple. Just select a service on
              </p>
              <p className="paynetred-and-enter">
                Paynet.Red and enter their phone number.
              </p>
            </span>
          </div>
        </div>
        <div className="features-list-items1">
          <h3 className="convenient-mobile-bill">
            Convenient mobile bill payments
          </h3>
          <div className="need-a-quick-container">
            <span>
              <p className="need-a">
                Need a quick top-up of your mobile account? No problem!
                Paynet.Red payment service allows you to instantly put money on
                your mobile account via a payment card.
              </p>
              <p className="blank-line2">&nbsp;</p>
              <p className="the-service-is">
                The service is available for subscribers of all mobile operators
                in UAE.
              </p>
              <p className="blank-line3">&nbsp;</p>
              <p className="we-accept-apple">
                We accept Apple Pay, PayPal and UAE or GCC issued credit cards.
              </p>
            </span>
          </div>
        </div>
        <div className="features-list-items2">
          <h3 className="uae-gift-cards">UAE Gift Cards</h3>
          <div className="we-are-pleased-container">
            <span>
              <p className="we-are-pleased">
                We are pleased to offer a wide range and various
              </p>
              <p className="denominations-of-gift">
                denominations of Gift Cards to meet all your needs.
              </p>
              <p className="make-a-present">
                Make a present for yourself and your loved ones.
              </p>
              <p className="blank-line4">&nbsp;</p>
              <p className="our-gift-cards">
                Our Gift Cards include: iTunes Gift Cards, Google
              </p>
              <p className="play-netflix-playstation">
                Play, Netflix, PlayStation Gift Cards and much more. You will
                receive the code to your email immediately after the payment
                which is faster than any other
              </p>
              <p className="service">service.</p>
            </span>
          </div>
        </div>
        <div className="features-list-items3">
          <h3 className="convenient-mobile-bill1">
            Convenient mobile bill payments
          </h3>
          <div className="uae-calling-cards-container">
            <span>
              <p className="uae-calling-cards">
                UAE Calling cards might be just what you need to
              </p>
              <p className="call-to-india">
                call to India, Pakistan or any other country from the
              </p>
              <p className="uae">UAE.</p>
              <p className="blank-line5">&nbsp;</p>
              <p className="choose-five-calling">
                Choose Five Calling Cards of Hello Calling Cards to
              </p>
              <p className="get-the-cheapest">
                get the cheapest international calling rates when
              </p>
              <p className="you-are-calling">
                you are calling from Du, Etisalat, Virgin and Swyp
              </p>
              <p className="mobile-operators">mobile operators.</p>
              <p className="blank-line6">&nbsp;</p>
              <p className="try-international-calling">
                Try international calling cards service and check for yourself
                that this is quick, reliable and cheap.
              </p>
              <p className="blank-line7">&nbsp;</p>
              <p className="blank-line8">&nbsp;</p>
            </span>
          </div>
        </div>
        <div className="features-list-items4">
          <div className="gaming-gift-cards">Gaming Gift Cards</div>
          <div className="gaming-gift-cards-container">
            <span>
              <p className="gaming-gift-cards1">
                Gaming Gift Cards are present in a separate section with a wide
                range of face values. PlayStation
              </p>
              <p className="network-xbox-steam">
                Network, Xbox, Steam you can choose according to
              </p>
              <p className="your-personal-preferences">
                your personal preferences. Just add the required
              </p>
              <p className="amount-to-your">
                amount to your gaming gift cards account and enjoy.
              </p>
            </span>
          </div>
        </div>
        <div className="link" />
      </div>
    </section>
  );
};

FeaturesList.propTypes = {
  className: PropTypes.string,
};

export default FeaturesList;
