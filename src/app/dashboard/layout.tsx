
import React from "react";

import Dashboardwarpper from "./dashboardwrapper";

type Props = {};

const DashboardRootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div >
      <Dashboardwarpper>
      {children}
     </Dashboardwarpper>
      
    </div>
  );
};

export default DashboardRootLayout;
