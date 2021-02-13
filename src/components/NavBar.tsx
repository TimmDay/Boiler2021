import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const StyledNav = styled.nav`
  background: #8181c2;
`;

const Nav: React.FunctionComponent = () => {
  return (
    <StyledNav>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/notfound">back</Link>
    </StyledNav>
  )
}

export { Nav as default };