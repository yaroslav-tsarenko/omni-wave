import PropTypes from "prop-types";
import "./CountryLinks.css";

const CountryLinks = ({ className = "" }) => {
  return (
    <section className={`country-links ${className}`}>
      <div className="link1">
        <img
          className="afgpng-icon"
          loading="lazy"
          alt=""
          src="/afgpng@2x.png"
        />
        <div className="afghanistan">Afghanistan</div>
      </div>
      <div className="link2">
        <img
          className="albpng-icon"
          loading="lazy"
          alt=""
          src="/albpng@2x.png"
        />
        <div className="albania">Albania</div>
      </div>
      <div className="link3">
        <img
          className="dzapng-icon"
          loading="lazy"
          alt=""
          src="/dzapng@2x.png"
        />
        <div className="algeria">Algeria</div>
      </div>
      <div className="link4">
        <img
          className="asmpng-icon"
          loading="lazy"
          alt=""
          src="/asmpng@2x.png"
        />
        <div className="american-samoa">American Samoa</div>
      </div>
      <div className="link5">
        <img
          className="agopng-icon"
          loading="lazy"
          alt=""
          src="/agopng@2x.png"
        />
        <div className="angola">Angola</div>
      </div>
      <div className="link6">
        <img
          className="aiapng-icon"
          loading="lazy"
          alt=""
          src="/aiapng@2x.png"
        />
        <div className="anguilla">Anguilla</div>
      </div>
      <div className="link7">
        <img className="atgpng-icon" alt="" src="/atgpng@2x.png" />
        <div className="antigua-and-barbuda">Antigua and Barbuda</div>
      </div>
      <div className="link8">
        <img
          className="argpng-icon"
          loading="lazy"
          alt=""
          src="/argpng@2x.png"
        />
        <div className="argentina">Argentina</div>
      </div>
      <div className="link9">
        <img
          className="armpng-icon"
          loading="lazy"
          alt=""
          src="/armpng@2x.png"
        />
        <div className="armenia">Armenia</div>
      </div>
      <div className="link10">
        <img className="abwpng-icon" alt="" src="/abwpng@2x.png" />
        <div className="aruba">Aruba</div>
      </div>
      <div className="link11">
        <img className="auspng-icon" alt="" src="/auspng@2x.png" />
        <div className="austria">Austria</div>
      </div>
      <div className="link12">
        <img
          className="bhspng-icon"
          loading="lazy"
          alt=""
          src="/bhspng@2x.png"
        />
        <div className="bahamas">Bahamas</div>
      </div>
      <div className="link13">
        <img
          className="bhrpng-icon"
          loading="lazy"
          alt=""
          src="/bhrpng@2x.png"
        />
        <div className="bahrain">Bahrain</div>
      </div>
      <div className="link14">
        <img
          className="bgdpng-icon"
          loading="lazy"
          alt=""
          src="/bgdpng@2x.png"
        />
        <div className="bangladesh">Bangladesh</div>
      </div>
      <div className="link15">
        <img className="brbpng-icon" alt="" src="/brbpng@2x.png" />
        <div className="barbados">Barbados</div>
      </div>
      <div className="link16">
        <img className="belpng-icon" alt="" src="/belpng@2x.png" />
        <div className="belgium">Belgium</div>
      </div>
      <div className="link17">
        <img
          className="blzpng-icon"
          loading="lazy"
          alt=""
          src="/blzpng@2x.png"
        />
        <div className="belize">Belize</div>
      </div>
      <div className="link18">
        <img
          className="benpng-icon"
          loading="lazy"
          alt=""
          src="/benpng@2x.png"
        />
        <div className="benin">Benin</div>
      </div>
      <div className="link19">
        <img
          className="bmupng-icon"
          loading="lazy"
          alt=""
          src="/bmupng@2x.png"
        />
        <div className="bermuda">Bermuda</div>
      </div>
      <div className="link20">
        <img className="bolpng-icon" alt="" src="/bolpng@2x.png" />
        <div className="bolivia">Bolivia</div>
      </div>
      <div className="link21">
        <img
          className="bwapng-icon"
          loading="lazy"
          alt=""
          src="/bwapng@2x.png"
        />
        <div className="botswana">Botswana</div>
      </div>
      <div className="link22">
        <img className="brapng-icon" alt="" src="/brapng@2x.png" />
        <div className="brazil">Brazil</div>
      </div>
      <div className="link23">
        <img
          className="vgbpng-icon"
          loading="lazy"
          alt=""
          src="/vgbpng@2x.png"
        />
        <div className="british-virgin-islands">British Virgin Islands</div>
      </div>
      <div className="link24">
        <img className="bfapng-icon" alt="" src="/bfapng@2x.png" />
        <div className="burkina-faso">Burkina Faso</div>
      </div>
      <div className="link25">
        <img
          className="bdipng-icon"
          loading="lazy"
          alt=""
          src="/bdipng@2x.png"
        />
        <div className="burundi">Burundi</div>
      </div>
      <div className="link26">
        <img
          className="khmpng-icon"
          loading="lazy"
          alt=""
          src="/khmpng@2x.png"
        />
        <div className="cambodia">Cambodia</div>
      </div>
      <div className="link27">
        <img className="cmrpng-icon" alt="" src="/cmrpng@2x.png" />
        <div className="cameroon">Cameroon</div>
      </div>
      <div className="link28">
        <img className="canpng-icon" alt="" src="/canpng@2x.png" />
        <div className="canada">Canada</div>
      </div>
      <div className="link29">
        <img
          className="cpvpng-icon"
          loading="lazy"
          alt=""
          src="/cpvpng@2x.png"
        />
        <div className="cape-verde">Cape Verde</div>
      </div>
      <div className="link30">
        <img
          className="cympng-icon"
          loading="lazy"
          alt=""
          src="/cympng@2x.png"
        />
        <div className="cayman-islands">Cayman Islands</div>
      </div>
      <div className="link31">
        <img className="cafpng-icon" alt="" src="/cafpng@2x.png" />
        <div className="central-african-republic">Central African Republic</div>
      </div>
      <div className="link32">
        <img className="chlpng-icon" alt="" src="/chlpng@2x.png" />
        <div className="chile">Chile</div>
      </div>
      <div className="link33">
        <img
          className="chnpng-icon"
          loading="lazy"
          alt=""
          src="/chnpng@2x.png"
        />
        <div className="china">China</div>
      </div>
      <div className="link34">
        <img
          className="colpng-icon"
          loading="lazy"
          alt=""
          src="/colpng@2x.png"
        />
        <div className="colombia">Colombia</div>
      </div>
      <div className="link35">
        <img
          className="cripng-icon"
          loading="lazy"
          alt=""
          src="/cripng@2x.png"
        />
        <div className="costa-rica">Costa Rica</div>
      </div>
      <div className="link36">
        <img
          className="cubpng-icon"
          loading="lazy"
          alt=""
          src="/cubpng@2x.png"
        />
        <div className="cuba">Cuba</div>
      </div>
      <div className="link37">
        <img
          className="cuwpng-icon"
          loading="lazy"
          alt=""
          src="/cuwpng@2x.png"
        />
        <div className="curacao">Curacao</div>
      </div>
      <div className="link38">
        <img
          className="cyppng-icon"
          loading="lazy"
          alt=""
          src="/cyppng@2x.png"
        />
        <div className="cyprus">Cyprus</div>
      </div>
      <div className="link39">
        <img
          className="codpng-icon"
          loading="lazy"
          alt=""
          src="/codpng@2x.png"
        />
        <div className="democratic-republic-of-container">
          <span>
            <p className="democratic-republic-of">Democratic Republic of the</p>
            <p className="congo">Congo</p>
          </span>
        </div>
      </div>
      <div className="link40">
        <img
          className="dmapng-icon"
          loading="lazy"
          alt=""
          src="/dmapng@2x.png"
        />
        <div className="dominica">Dominica</div>
      </div>
    </section>
  );
};

CountryLinks.propTypes = {
  className: PropTypes.string,
};

export default CountryLinks;
