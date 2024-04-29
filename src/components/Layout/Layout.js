import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = (props) => {
  return (
    <div className="text-center">
      <Header />
      <main style={{ height: "70vh" }}>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
