import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import PropTypes from "prop-types";
import "./CartItemDetails.css";

const CartItemDetails = ({
  className = "",
  itemBackgrounds,
  discount20OFF,
}) => {
  return (
    <div className={`cart-item-details ${className}`}>
      <div className="item-details">
        <img
          className="item-backgrounds-icon"
          loading="lazy"
          alt=""
          src={itemBackgrounds}
        />
        <div className="item-titles">
          <div className="instabridge-local">Instabridge local</div>
          <div className="discount-20-off">{discount20OFF}</div>
        </div>
        <div className="item-credits">
          <div className="credits-placeholder">$120.00</div>
          <div className="credits">12 Credits</div>
        </div>
        <div className="item-quantity">
          <div className="quantity-buttons">
            <div className="increase-quantity">
              <img
                className="icon-plus"
                loading="lazy"
                alt=""
                src="/iconplus.svg"
              />
            </div>
            <div className="quantity-placeholder">3</div>
            <div className="quantity-increase">
              <img
                className="icon-minus"
                loading="lazy"
                alt=""
                src="/iconminus.svg"
              />
            </div>
          </div>
          <FormControl
            className="item-duration"
            variant="standard"
            sx={{
              borderTopWidth: "1px",
              borderRightWidth: "1px",
              borderBottomWidth: "1px",
              borderLeftWidth: "1px",
              backgroundColor: "#3d160a",
              borderRadius: "8px",
              width: "55.1219512195122%",
              height: "38px",
              m: 0,
              p: 0,
              "& .MuiInputBase-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                justifyContent: "center",
                display: "inline-flex",
              },
              "& .MuiInputLabel-root": {
                m: 0,
                p: 0,
                minHeight: "38px",
                display: "inline-flex",
              },
              "& .MuiMenuItem-root": {
                m: 0,
                p: 0,
                height: "38px",
                display: "inline-flex",
              },
              "& .MuiSelect-select": {
                m: 0,
                p: 0,
                height: "38px",
                alignItems: "center",
                display: "inline-flex",
              },
              "& .MuiInput-input": { m: 0, p: 0 },
              "& .MuiInputBase-input": {
                color: "#fff",
                fontSize: 18,
                fontWeight: "Bold",
                fontFamily: "Apercu Pro",
                textAlign: "left",
                p: "0 !important",
                marginLeft: "16px",
              },
            }}
          >
            <InputLabel color="success" />
            <Select
              color="success"
              disableUnderline
              displayEmpty
              IconComponent={() => (
                <img
                  width="16px"
                  height="16px"
                  src="/duration-background.svg"
                  style={{ marginRight: "16px" }}
                />
              )}
            >
              <MenuItem>Hourly</MenuItem>
            </Select>
            <FormHelperText />
          </FormControl>
        </div>
        <div className="item-separator">$120.00</div>
      </div>
      <div className="item-dividers" />
    </div>
  );
};

CartItemDetails.propTypes = {
  className: PropTypes.string,
  itemBackgrounds: PropTypes.string,
  discount20OFF: PropTypes.string,
};

export default CartItemDetails;
