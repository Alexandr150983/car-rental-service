import React from "react";

import { StyledLayout } from "./layout.styled";
import Header from "../Header/Header";

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      <main>{children}</main>
    </StyledLayout>
  );
};

export default Layout;
