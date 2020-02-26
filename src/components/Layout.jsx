import PropTypes from "prop-types";
import React from "react";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer></Footer>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
