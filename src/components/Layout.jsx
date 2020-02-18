import PropTypes from "prop-types";
import React from "react";
import Header from "./header";
import { Link } from "gatsby";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="mt-16 text-white">{children}</main>

      <footer className="bg-skoll">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 text-sm items-center">
          <p className="text-white text-sm">© Skoll Coaching 2020</p>

          <div>
            <a
              className="no-underline text-white mr-4"
              href="https://instagram.com/skollcoaching"
            >
              Instagram
            </a>
            <Link
              className="no-underline text-white mr-4"
              to="/datenschutzerklaerung"
            >
              Datenschutzerklärung
            </Link>
            <Link className="no-underline text-white" to="/impressum">
              Impressum
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
