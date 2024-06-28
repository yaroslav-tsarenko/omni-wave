import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "" }) => {
  return (
    <section className={`hero ${className}`}>
      <img className="image-20-icon" alt="" src="/image-20@2x.png" />
      <div className="image-21" />
      <div className="hero-content">
        <div className="hero-title">
          <h1 className="get-in-touch">Get in Touch</h1>
          <div className="we-value-your">
            We value your feedback, inquiries, and the opportunity to assist
            you. Stay connected with us on social media for the latest updates,
            promotions, and sweet moments.
          </div>
        </div>
        <form className="hero-form">
          <div className="form-container">
            <div className="form-fields">
              <div className="form-inputs">
                <div className="name-inputs">
                  <TextField
                    className="name-fields"
                    placeholder="First Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#3d160a" },
                      "& .MuiInputBase-root": {
                        height: "55px",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": { color: "#3d160a" },
                    }}
                  />
                  <TextField
                    className="name-fields1"
                    placeholder="Last Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#3d160a" },
                      "& .MuiInputBase-root": {
                        height: "55px",
                        borderRadius: "8px",
                      },
                      "& .MuiInputBase-input": { color: "#3d160a" },
                    }}
                  />
                </div>
                <TextField
                  className="contact-info"
                  placeholder="Email"
                  variant="outlined"
                  sx={{
                    "& fieldset": { borderColor: "#3d160a" },
                    "& .MuiInputBase-root": {
                      height: "55px",
                      borderRadius: "8px",
                    },
                    "& .MuiInputBase-input": { color: "#3d160a" },
                  }}
                />
                <div className="contact-info1">
                  <div className="your-message">Your Message</div>
                </div>
              </div>
            </div>
          </div>
          <Button
            className="component-3"
            disableElevation
            variant="contained"
            sx={{
              textTransform: "none",
              color: "#fff",
              fontSize: "16",
              background: "#3d160a",
              borderRadius: "8px",
              "&:hover": { background: "#3d160a" },
              height: 50,
            }}
          >
            Send Message
          </Button>
        </form>
      </div>
    </section>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
};

export default Hero;
