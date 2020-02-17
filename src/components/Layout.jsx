import PropTypes from "prop-types";
import React from "react";
import Header from "./header";

function Layout({ children }) {
  return (
    <div className="flex flex-col font-sans min-h-screen text-gray-900">
      <Header />

      <main className="mt-16 text-white">{children}</main>

      <footer className="bg-skoll">
        <nav className="flex justify-between max-w-4xl mx-auto p-4 text-sm">
          <p className="text-white">© Skoll Coaching 2020</p>

          <p>
            <a
              className="font-bold no-underline text-white"
              href="https://instagram.com/skollcoaching"
            >
              Instagram
            </a>
          </p>
        </nav>
      </footer>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
