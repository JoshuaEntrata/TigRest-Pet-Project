import React from "react";
import { Navbar } from "../components";

const PageLayout = ({ children }) => {
  return (
    <div className="w-screen min-h-screen bg-slate-100 flex flex-col">
      <Navbar />
      <div className="px-20 py-10 w-screen flex justify-center">{children}</div>
    </div>
  );
};

export default PageLayout;
