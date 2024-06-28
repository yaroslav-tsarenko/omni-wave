import FrameComponent from "../components/FrameComponent";
import Content from "../components/Content";
import Component from "../components/Component";
import "./CheckoutPage.css";

const CheckoutPage = () => {
  return (
    <div className="checkoutpage">
      <FrameComponent
        maskGroup="/mask-group@2x.png"
        checkout="Checkout"
        viewOrEditYourCartBeforeC="View or edit your cart before checkout"
      />
      <Content />
      <Component maskGroup="/mask-group-1@2x.png" />
    </div>
  );
};

export default CheckoutPage;
