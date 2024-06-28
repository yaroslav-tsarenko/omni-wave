import { Button } from "@mui/material";
import PropTypes from "prop-types";
import "./ResponsiveNavbar.css";

const ResponsiveNavbar = ({ className = "", maskGroup }) => {
  return (
    <header className={`responsive-navbar ${className}`}>
      <div className="navbar-container">
        <div className="mask-group-parent">
          <img
            className="mask-group-icon"
            loading="lazy"
            alt=""
            src={maskGroup}
          />
          <h1 className="omniwavecloud">OmniWaveCloud</h1>
        </div>
        <div className="nav-links">
          <div className="links-list">
            <div className="item-link">Home</div>
          </div>
          <div className="links-list1">
            <div className="item-link1">About Us</div>
          </div>
          <div className="links-list2">
            <div className="item-link2">Contact us</div>
          </div>
          <div className="links-list3">
            <div className="item-link3">For Business</div>
          </div>
          <div className="empty-links">
            <img className="link-icon" loading="lazy" alt="" src="/link.svg" />
            <img className="link-icon1" alt="" src="/link-1.svg" />
            <img className="link-icon2" alt="" src="/link-2.svg" />
          </div>
        </div>
      </div>
      <div className="cart-button">
        <div className="item-link4">Create An Account</div>
        <Button
          className="component-51"
          disableElevation
          variant="contained"
          sx={{
            textTransform: "none",
            color: "#fff",
            fontSize: "16",
            background: "#3d160a",
            borderRadius: "50px",
            "&:hover": { background: "#3d160a" },
            height: 46,
          }}
        >
          Login
        </Button>
      </div>
    </header>
  );
};

ResponsiveNavbar.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
};

export default ResponsiveNavbar;
