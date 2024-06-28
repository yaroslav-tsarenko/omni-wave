import ResponsiveNavbar from "../components/ResponsiveNavbar";
import Content2 from "../components/Content2";
import Component from "../components/Component";
import "./SignInPage.css";

const SignInPage = () => {
  return (
    <div className="signinpage">
      <ResponsiveNavbar />
      <main className="content-parent">
        <Content2 />
        <Component maskGroup="/mask-group-11@2x.png" />
      </main>
    </div>
  );
};

export default SignInPage;
