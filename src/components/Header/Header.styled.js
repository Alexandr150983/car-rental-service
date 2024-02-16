import styled from "styled-components";
import { NavLink as RouterNavLink } from "react-router-dom";

export const StyledHeader = styled.header``;

export const Navigation = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 24px auto;
  max-width: 1184px;
`;

export const StyledNavLink = styled(RouterNavLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 274px;
  height: 44px;
  color: white;
  font-weight: 500;
  background-color: rgb(52, 112, 255);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.6s;

  &:hover {
    background-color: rgb(11, 68, 205);
  }
`;
