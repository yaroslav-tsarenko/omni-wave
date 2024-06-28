import FrameComponent from "../components/FrameComponent";
import Content1 from "../components/Content1";
import Component from "../components/Component";
import "./AccountPage.css";

const AccountPage = () => {
  return (
    <div className="accountpage">
      <FrameComponent
        maskGroup="/mask-group1@2x.png"
        checkout="Welcome, Darnell"
        viewOrEditYourCartBeforeC="Your Personal Dashboard"
      />
      <Content1 />
      <Component maskGroup="/mask-group-11@2x.png" />
    </div>
  );
};

export default AccountPage;
