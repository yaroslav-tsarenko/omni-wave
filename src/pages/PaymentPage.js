import FrameComponent1 from "../components/FrameComponent1";
import Contact from "../components/Contact";
import "./PaymentPage.css";

const PaymentPage = () => {
  return (
    <div className="paymentpage">
      <div className="copyright">
        <FrameComponent1 />
      </div>
      <div className="rectangle-parent">
        <div className="frame-item" />
        <Contact />
      </div>
    </div>
  );
};

export default PaymentPage;
