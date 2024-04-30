import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Layout = (props) => {
  return (
    <div className="layout-container">
      <Header />
      <main style={{ minHeight: "70vh" }}>{props.children}</main>
      <Footer />
      <Toaster />
    </div>
  );
};

export default Layout;
