import Header from "./Header";
import Footer from "./Footer";

const Layout = props => (
  <>
    <Header />
    <div className="Main">
      {props.children}
    </div>
    <Footer />
  </>
);

export default Layout;