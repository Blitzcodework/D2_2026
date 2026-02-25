// src/Common/Components/CommonLayouts/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../layouts/Navbar"; // ✅ Fixed: relative path
import Footer from "../layouts/Footer"; // ✅ Fixed: relative path


const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;