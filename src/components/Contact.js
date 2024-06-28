import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Contact.css";

const Contact = ({ className = "" }) => {
  return (
    <div className={`contact1 ${className}`}>
      <div className="contact-details">
        <div className="contact-information">Contact Information</div>
        <TextField
          className="form-field"
          placeholder="Email"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#d9d9d9" },
            "& .MuiInputBase-root": { height: "54px", backgroundColor: "#fff" },
            "& .MuiInputBase-input": { color: "#3d160a" },
          }}
        />
      </div>
      <h3 className="payment-information">Payment Information</h3>
      <div className="card">
        <div className="card-information">Card Information</div>
        <div className="form-field1">
          <div className="card-number-placeholder">1234 1234 1234 1234</div>
          <div className="card-details">
            <img
              className="card-date-icon"
              loading="lazy"
              alt=""
              src="/frame-1000006882@2x.png"
            />
            <img
              className="card-date-icon1"
              loading="lazy"
              alt=""
              src="/frame-1000006883@2x.png"
            />
            <img
              className="card-date-icon2"
              loading="lazy"
              alt=""
              src="/frame-1000006884@2x.png"
            />
          </div>
          <img className="icon1" alt="" src="/icon1.svg" />
        </div>
        <div className="expiry">
          <TextField
            className="form-field2"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d9d9d9" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
          <TextField
            className="form-field3"
            placeholder="MM/YY"
            variant="outlined"
            sx={{
              "& fieldset": { borderColor: "#d9d9d9" },
              "& .MuiInputBase-root": {
                height: "54px",
                backgroundColor: "#fff",
              },
              "& .MuiInputBase-input": { color: "#d9d9d9" },
            }}
          />
        </div>
      </div>
      <div className="contact-details1">
        <div className="carholder-name">Carholder Name</div>
        <TextField
          className="form-field4"
          placeholder="Name on Card"
          variant="outlined"
          sx={{
            "& fieldset": { borderColor: "#d9d9d9" },
            "& .MuiInputBase-root": { height: "54px", backgroundColor: "#fff" },
            "& .MuiInputBase-input": { color: "#d9d9d9" },
          }}
        />
      </div>
      <div className="region">
        <div className="country-or-region">Country or region</div>
        <div className="form-field5">
          <div className="usa">USA</div>
          <img
            className="region-dropdown-icon"
            alt=""
            src="/region-dropdown.svg"
          />
          <img className="icon2" alt="" src="/icon1.svg" />
        </div>
      </div>
      <div className="disclaimer">
        <input className="disclaimer-placeholder" type="checkbox" />
        <div className="i-verified-that">
          I verified that my device is eSIM compatible and is not carrier locked
          and i agree to the refund policy.
        </div>
      </div>
      <img
        className="disclaimer-icon"
        loading="lazy"
        alt=""
        src="/vector-342.svg"
      />
      <div className="i-verified-that1">
        I verified that my device is eSIM compatible and is not carrier locked
        and i agree to the refund policy.
      </div>
      <Button
        className="button5"
        disableElevation
        variant="contained"
        sx={{
          textTransform: "none",
          color: "#fff",
          fontSize: "16",
          background: "#3d160a",
          borderRadius: "4px",
          "&:hover": { background: "#3d160a" },
          height: 54,
        }}
      >
        Pay Now
      </Button>
    </div>
  );
};

Contact.propTypes = {
  className: PropTypes.string,
};

export default Contact;
