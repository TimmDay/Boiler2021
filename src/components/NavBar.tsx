import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  background: #8181c2;
`;

const Nav: React.FunctionComponent = () => {
  return (
    <StyledNav>
      <NavLink to="/">home</NavLink>
      <NavLink to="/about">about</NavLink>
      <NavLink to="/notfound">back</NavLink>
    </StyledNav>
  );
};

export { Nav as default };
