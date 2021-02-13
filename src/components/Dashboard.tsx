import React, { useState } from "react";
import styled from "styled-components";

const StyledDashboard = styled.div`
  background: green;
`;

type DashboardProps = {
  name?: string;
};

const Dashboard: React.FunctionComponent<DashboardProps> = ({
  name,
}: DashboardProps) => {
  return (
    <StyledDashboard>
      <p>{name}, this is dash</p>
    </StyledDashboard>
  );
};

Dashboard.defaultProps = {
  name: "dashboard",
};

export { Dashboard as default };
