
import React from "react";
import DashboardWrapper from "./dashboardwrapper";



type Props = {};

const DashboardRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div >
     <DashboardWrapper>
      {children}
      </DashboardWrapper> 
    </div>
  );
};

export default DashboardRootLayout;
