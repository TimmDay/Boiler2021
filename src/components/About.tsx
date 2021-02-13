import React, { useState } from 'react';

import styled from 'styled-components';

const StyledAbout = styled.p`
  color: var(--colorText);
  font-size: var(--baseFontSize);
`;

type AboutProps = {
  title? : string
}

const About = ({ title }: AboutProps) => {

  return (
    <StyledAbout>
      {title}
      abouty about
    </StyledAbout>
  )
}

About.defaultProps = {
  title: 'about'
}

export { About as default };