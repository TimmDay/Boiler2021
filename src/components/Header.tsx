import React, { useState } from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
  color: var(--colorPrimary);
  font-size: var(--xtra-big-ass-heading);
`;

type HeaderProps = {
  title?: string;
};

const Header: React.FunctionComponent<HeaderProps> = ({
  title,
}: HeaderProps) => {
  return <StyledHeader>{title}</StyledHeader>;
};

Header.defaultProps = {
  title: "Tim M Day",
};

export { Header as default };
