import Navigation from "../../components/Nav/Navigation";
import Footer from "../../components/footer/Footer";

const Layout = ({ children, home }) => {
  return (
    <>
      <Navigation />
      <div className="container">{children}</div>
      {home ? " " : <Footer />}
    </>
  );
};

export default Layout;
