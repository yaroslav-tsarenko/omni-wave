import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Content1 from "../components/Content1";
import Component from "../components/Component";
import "./MobileRechargePage.css";

const MobileRechargePage = () => {
  return (
    <div className="mobilerechargepage">
      <ResponsiveNavbar maskGroup="/mask-group@2x.png" />
      <Content1 />
      <Component maskGroup="/mask-group-11@2x.png" />
    </div>
  );
};

export default MobileRechargePage;
