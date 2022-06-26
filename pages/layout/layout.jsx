import Navigation from "../../components/Nav/Navigation";
import Footer from "../../components/footer/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navigation />
      <div className="container">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
