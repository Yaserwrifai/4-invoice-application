import React, { Fragment } from "react";


import MainNavigation from './main-navigation';

import Sidebar from "../Sidebar/Sidebar";
import StartingPageContent from "../starting-page/StartingPageContent"






const Layout = (props: { children: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal; }) => {
  return (
    <Fragment>
     
      <Sidebar />
     
      <MainNavigation />
      
      <div>{props.children}</div>
      
    </Fragment>
  );
};

export default Layout;
