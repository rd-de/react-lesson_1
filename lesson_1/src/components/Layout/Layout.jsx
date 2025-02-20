import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./Layout.css";
import PropTypes from 'prop-types';
function Layout({ children }) {
  return (
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;