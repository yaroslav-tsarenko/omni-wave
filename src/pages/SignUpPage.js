import {
  TextField,
  InputAdornment,
  Icon,
  IconButton,
  Button,
} from "@mui/material";
import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Component from "../components/Component";
import "./SignUpPage.css";

const SignUpPage = () => {
  return (
    <div className="signuppage">
      <ResponsiveNavbar />
      <main className="content">
        <section className="sign-up-form-container-parent">
          <div className="sign-up-form-container">
            <div className="sign-in">
              <div className="sign-up-parent">
                <h1 className="sign-up">Sign up</h1>
                <div className="sign-up-to">
                  Sign up to get rewards, and many more
                </div>
              </div>
              <form className="input-fields">
                <div className="name-fields">
                  <TextField
                    className="name-inputs"
                    placeholder="Your Name"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#a7a7a7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                      },
                      "& .MuiInputBase-input": { color: "#3d160a" },
                    }}
                  />
                  <TextField
                    className="account-fields"
                    placeholder="Email"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#a7a7a7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                      },
                      "& .MuiInputBase-input": { color: "#3d160a" },
                    }}
                  />
                </div>
                <div className="name-fields1">
                  <TextField
                    className="name-fields-child"
                    placeholder="Address"
                    variant="outlined"
                    sx={{
                      "& fieldset": { borderColor: "#a7a7a7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                      },
                      "& .MuiInputBase-input": { color: "#3d160a" },
                    }}
                  />
                  <div className="country-parent">
                    <div className="country">Country</div>
                    <img
                      className="account-input-separator"
                      alt=""
                      src="/account-input-separator.svg"
                    />
                  </div>
                </div>
                <div className="name-fields2">
                  <TextField
                    className="name-fields-item"
                    placeholder="Username"
                    variant="outlined"
                    InputProps={{
                      endAdornment: (
                        <img
                          width="16px"
                          height="16px"
                          src="/frame-153-1.svg"
                        />
                      ),
                    }}
                    sx={{
                      "& fieldset": { borderColor: "#a7a7a7" },
                      "& .MuiInputBase-root": {
                        height: "40px",
                        backgroundColor: "#fff",
                        paddingRight: "11px",
                      },
                      "& .MuiInputBase-input": { color: "#3d160a" },
                    }}
                  />
                  <div className="password-parent">
                    <div className="password">Password</div>
                    <img
                      className="frame-child"
                      alt=""
                      src="/frame-153-2.svg"
                    />
                  </div>
                </div>
                <Button
                  className="button"
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
                  Sign Up
                </Button>
              </form>
              <div className="or-sign-up">or, sign up with</div>
              <div className="social-buttons">
                <img
                  className="social-icons"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-icons1"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
                <img
                  className="social-icons2"
                  loading="lazy"
                  alt=""
                  src="/frame-158.svg"
                />
              </div>
            </div>
          </div>
          <img
            className="background-shape-icon"
            loading="lazy"
            alt=""
            src="/rectangle-491@2x.png"
          />
        </section>
        <Component maskGroup="/mask-group-11@2x.png" />
      </main>
    </div>
  );
};

export default SignUpPage;
