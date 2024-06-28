import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Hero from "../components/Hero";
import Component from "../components/Component";
import "./ContactUsPage.css";

const ContactUsPage = () => {
  return (
    <div className="contactuspage">
      <ResponsiveNavbar maskGroup="/mask-group@2x.png" />
      <Hero />
      <Component maskGroup="/mask-group-1@2x.png" />
    </div>
  );
};

export default ContactUsPage;
