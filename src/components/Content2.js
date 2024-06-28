import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import PropTypes from "prop-types";
import "./Content2.css";

const Content2 = ({ className = "" }) => {
  return (
    <section className={`content3 ${className}`}>
      <div className="sign-in-wrapper">
        <div className="sign-in1">
          <div className="frame-group">
            <div className="sign-in-parent">
              <h1 className="sign-in2">Sign in</h1>
              <div className="sign-in-to">
                Sign in to your account to see products catered to you
              </div>
            </div>
            <form className="frame-container">
              <TextField
                className="frame-inner"
                placeholder="Username"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="16px" height="16px" src="/input-fields.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#c6c6c6" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                    paddingRight: "27px",
                  },
                  "& .MuiInputBase-input": { color: "#3d160a" },
                }}
              />
              <TextField
                className="frame-textfield"
                placeholder="Password"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <img width="16px" height="16px" src="/frame-153-1.svg" />
                  ),
                }}
                sx={{
                  "& fieldset": { borderColor: "#c6c6c6" },
                  "& .MuiInputBase-root": {
                    height: "40px",
                    backgroundColor: "#fff",
                    paddingRight: "30px",
                  },
                  "& .MuiInputBase-input": { color: "#3d160a" },
                }}
              />
              <Button
                className="button4"
                disableElevation
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#fff",
                  fontSize: "16",
                  background: "#3d160a",
                  borderRadius: "4px",
                  "&:hover": { background: "#3d160a" },
                }}
              >
                Sign In
              </Button>
            </form>
            <div className="or-sign-in">or, sign in with</div>
            <div className="frame-parent1">
              <img
                className="frame-icon"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="frame-child1"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
              <img
                className="frame-child2"
                loading="lazy"
                alt=""
                src="/frame-158.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <img
        className="background-icon"
        loading="lazy"
        alt=""
        src="/rectangle-49@2x.png"
      />
    </section>
  );
};

Content2.propTypes = {
  className: PropTypes.string,
};

export default Content2;
