import { Button } from "@mui/material";
import CartItemDetails from "./CartItemDetails";
import PropTypes from "prop-types";
import "./CartItems.css";

const CartItems = ({ className = "" }) => {
  return (
    <section className={`cart-items ${className}`}>
      <div className="cart-item-parent">
        <div className="cart-item">
          <div className="header">
            <div className="header-child" />
            <div className="header-labels">
              <div className="product1">Product</div>
            </div>
            <div className="header-items">
              <div className="price">Price</div>
            </div>
            <div className="quantity">Quantity</div>
            <div className="total">Total</div>
          </div>
          <CartItemDetails
            itemBackgrounds="/rectangle-4555@2x.png"
            discount20OFF="Discount: 20% OFF"
          />
          <CartItemDetails
            itemBackgrounds="/rectangle-4554@2x.png"
            discount20OFF="Worth USD $400"
          />
          <CartItemDetails
            itemBackgrounds="/rectangle-4555@2x.png"
            discount20OFF="Worth USD $400"
          />
          <div className="cart-actions">
            <Button
              className="button"
              disableElevation
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "#3d160a",
                fontSize: "18",
                borderColor: "#3d160a",
                borderRadius: "4px",
                "&:hover": { borderColor: "#3d160a" },
                width: 129,
                height: 54,
              }}
            >
              Go Back
            </Button>
            <Button
              className="button1"
              disableElevation
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "18",
                background: "#3d160a",
                borderRadius: "4px",
                "&:hover": { background: "#3d160a" },
                width: 141,
                height: 54,
              }}
            >
              Checkout
            </Button>
          </div>
        </div>
        <div className="checkout-details">
          <div className="checkout-title">
            <div className="header1">
              <div className="checkout-details1">Checkout Details</div>
            </div>
          </div>
          <div className="subtotal-container">
            <div className="totals">
              <div className="cart-subtotal">Cart Subtotal</div>
              <div className="total-placeholder">$360.00</div>
            </div>
          </div>
          <div className="checkout-summary">
            <div className="tax-details">
              <div className="tax-labels">
                <div className="shipping-handling">{`Shipping & Handling`}</div>
                <div className="other-taxes">Other Taxes</div>
              </div>
              <div className="tax-labels1">
                <div className="div1">$0.00</div>
                <div className="div2">$0.00</div>
              </div>
            </div>
          </div>
          <div className="tax-divider-wrapper">
            <div className="tax-divider" />
          </div>
          <div className="checkout-details-inner">
            <div className="grand-total-parent">
              <div className="grand-total">Grand Total</div>
              <div className="div3">$360.00</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

CartItems.propTypes = {
  className: PropTypes.string,
};

export default CartItems;
