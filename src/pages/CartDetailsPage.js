import FrameComponent from "../components/FrameComponent";
import CartItems from "../components/CartItems";
import Component from "../components/Component";
import "./CartDetailsPage.css";

const CartDetailsPage = () => {
  return (
    <div className="cartdetailspage">
      <FrameComponent />
      <CartItems />
      <Component maskGroup="/mask-group-11@2x.png" />
    </div>
  );
};

export default CartDetailsPage;
