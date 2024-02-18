import React from "react";
import { NavLink } from "react-router-dom";
import { CATALOG, FAVORITES, HOME } from "../../constants/routes";
import { Navigation, StyledHeader, StyledNavLink } from "./Header.styled";

const Header = () => {
  return (
    <StyledHeader>
      <Navigation>
        <StyledNavLink as={NavLink} to={HOME}>
          Home
        </StyledNavLink>
        <StyledNavLink as={NavLink} to={CATALOG}>
          Catalog
        </StyledNavLink>
        <StyledNavLink as={NavLink} to={FAVORITES}>
          Favourite
        </StyledNavLink>
      </Navigation>
    </StyledHeader>
  );
};

export default Header;
