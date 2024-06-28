import PropTypes from "prop-types";
import "./Categories.css";

const Categories = ({ className = "" }) => {
  return (
    <section className={`categories ${className}`}>
      <div className="div-cards-block-it-wrap">
        <div className="category">
          <h3 className="mobile-recharge">Mobile recharge</h3>
          <div className="category-items">
            <div className="category-item-types">
              <div className="uae-mobile-providers">UAE Mobile Providers</div>
              <div className="div-cards-block-it-items">
                <div className="link-cards-block-it-item">
                  <img
                    className="image-logo-icon"
                    loading="lazy"
                    alt=""
                    src="/image-logo@2x.png"
                  />
                  <div className="etisalat-online-recharge">
                    Etisalat Online Recharge
                  </div>
                </div>
                <div className="link-cards-block-it-item1">
                  <img
                    className="image-logo-icon1"
                    alt=""
                    src="/image-logo-1@2x.png"
                  />
                  <div className="du-online-recharge">Du Online Recharge</div>
                </div>
                <div className="link-cards-block-it-item2">
                  <img
                    className="image-logo-icon2"
                    alt=""
                    src="/image-logo-2@2x.png"
                  />
                  <div className="virgin-mobile">Virgin Mobile</div>
                </div>
              </div>
            </div>
            <div className="category-item-types1">
              <div className="international-calling-cards">
                International calling cards
              </div>
              <div className="div-cards-block-it-items1">
                <div className="link-cards-block-it-item3">
                  <img
                    className="image-logo-icon3"
                    alt=""
                    src="/image-logo-3@2x.png"
                  />
                  <div className="five-calling-cards">
                    Five Calling Cards (Etisalat only)
                  </div>
                </div>
                <div className="link-cards-block-it-item4">
                  <img
                    className="image-logo-icon4"
                    alt=""
                    src="/image-logo-4@2x.png"
                  />
                  <div className="hello-calling-cards">
                    Hello Calling Cards (Du only)
                  </div>
                </div>
              </div>
            </div>
            <div className="category1">
              <div className="international-mobile-recharge">
                International mobile recharge
              </div>
              <div className="div-cards-block-it-items2">
                <div className="link-cards-block-it-item5">
                  <img
                    className="image-logo-icon5"
                    alt=""
                    src="/image-logo-5@2x.png"
                  />
                  <div className="international-mobile-recharge1">
                    International Mobile Recharge
                  </div>
                </div>
                <div className="link-cards-block-it-item6">
                  <img
                    className="image-logo-icon6"
                    alt=""
                    src="/image-logo-6@2x.png"
                  />
                  <div className="india-mobile-recharge">
                    India Mobile Recharge
                  </div>
                </div>
                <div className="link-cards-block-it-item7">
                  <img
                    className="image-logo-icon7"
                    alt=""
                    src="/image-logo-7@2x.png"
                  />
                  <div className="pakistan-mobile-recharge">
                    Pakistan Mobile Recharge
                  </div>
                </div>
                <div className="link-cards-block-it-item8">
                  <img
                    className="image-logo-icon8"
                    alt=""
                    src="/image-logo-8@2x.png"
                  />
                  <div className="philippines-mobile-recharge">
                    Philippines Mobile Recharge
                  </div>
                </div>
                <div className="link-cards-block-it-item9">
                  <img
                    className="image-logo-icon9"
                    alt=""
                    src="/image-logo-9@2x.png"
                  />
                  <div className="nepal-mobile-recharge">
                    Nepal Mobile Recharge
                  </div>
                </div>
                <div className="link-cards-block-it-item10">
                  <img
                    className="image-logo-icon10"
                    alt=""
                    src="/image-logo-10@2x.png"
                  />
                  <div className="bangladesh-mobile-recharge">
                    Bangladesh Mobile Recharge
                  </div>
                </div>
                <div className="link-cards-block-it-item11">
                  <img
                    className="image-logo-icon11"
                    alt=""
                    src="/image-logo-11@2x.png"
                  />
                  <div className="nigeria-mobile-recharge">
                    Nigeria Mobile Recharge
                  </div>
                </div>
                <div className="link-cards-block-it-item12">
                  <img
                    className="image-logo-icon12"
                    alt=""
                    src="/image-logo-12@2x.png"
                  />
                  <div className="sri-lanka-mobile">
                    Sri Lanka Mobile Recharge
                  </div>
                </div>
                <div className="link-cards-block-it-item13">
                  <img
                    className="image-logo-icon13"
                    alt=""
                    src="/image-logo-13@2x.png"
                  />
                  <div className="egypt-mobile-recharge">
                    Egypt Mobile Recharge
                  </div>
                </div>
                <div className="link-cards-block-it-item14">
                  <img
                    className="image-logo-icon14"
                    alt=""
                    src="/image-logo-14@2x.png"
                  />
                  <div className="indonesia-mobile-recharge">
                    Indonesia Mobile Recharge
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="category2">
          <h3 className="dubai-police">Dubai Police</h3>
          <div className="category-item">
            <div className="dubai-police-fines">Dubai Police Fines</div>
            <div className="link-cards-block-it-item15">
              <img
                className="image-logo-icon15"
                alt=""
                src="/image-logo-15@2x.png"
              />
              <div className="dubai-police1">Dubai Police</div>
            </div>
          </div>
        </div>
        <div className="category3">
          <h3 className="other">Other</h3>
          <div className="link-cards-block-it-item16">
            <img
              className="image-logo-icon16"
              alt=""
              src="/image-logo-16@2x.png"
            />
            <div className="salik-recharge-online">Salik Recharge Online</div>
          </div>
        </div>
        <div className="category4">
          <h3 className="gift-cards">Gift cards</h3>
          <div className="div-cards-block-it-items3">
            <div className="link-cards-block-it-item17">
              <img
                className="image-logo-icon17"
                alt=""
                src="/image-logo-17@2x.png"
              />
              <div className="pubg-mobile">PUBG Mobile</div>
            </div>
            <div className="link-cards-block-it-item18">
              <img
                className="image-logo-icon18"
                alt=""
                src="/image-logo-18@2x.png"
              />
              <div className="netflix-gift-cards">Netflix Gift Cards</div>
            </div>
            <div className="link-cards-block-it-item19">
              <img
                className="image-logo-icon19"
                alt=""
                src="/image-logo-19@2x.png"
              />
              <div className="amazonae-gift-cards">Amazon.ae Gift Cards</div>
            </div>
            <div className="link-cards-block-it-item20">
              <img
                className="image-logo-icon20"
                alt=""
                src="/image-logo-20@2x.png"
              />
              <div className="amazoncom-gift-cards">Amazon.com Gift Cards</div>
            </div>
            <div className="link-cards-block-it-item21">
              <img
                className="image-logo-icon21"
                alt=""
                src="/image-logo-21@2x.png"
              />
              <div className="apple-gift-cards">Apple Gift Cards</div>
            </div>
            <div className="link-cards-block-it-item22">
              <img
                className="image-logo-icon22"
                alt=""
                src="/image-logo-22@2x.png"
              />
              <div className="google-play-gift">Google Play Gift Cards</div>
            </div>
            <div className="link-cards-block-it-item23">
              <img
                className="image-logo-icon23"
                alt=""
                src="/image-logo-23@2x.png"
              />
              <div className="xbox-gift-cards">Xbox Gift Cards</div>
            </div>
            <div className="link-cards-block-it-item24">
              <img
                className="image-logo-icon24"
                alt=""
                src="/image-logo-24@2x.png"
              />
              <div className="playstation-gift-cards">
                PlayStation Gift Cards
              </div>
            </div>
            <div className="link-cards-block-it-item25">
              <img
                className="image-logo-icon25"
                alt=""
                src="/image-logo-25@2x.png"
              />
              <div className="steam-gift-cards">Steam Gift Cards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Categories.propTypes = {
  className: PropTypes.string,
};

export default Categories;
