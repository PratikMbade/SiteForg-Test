import { Dashboard } from "./components/dashboardstructure";

import React from "react";
import Sidebar from "./components/sidebar";

type Props = {};

const Dashboardwarpper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="grid min-h-screen w-full  md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]" >
      <Sidebar />

      <div className="]">
      <Dashboard> {children}</Dashboard>

      </div>
       
    </div>
  );
};

export default Dashboardwarpper;
