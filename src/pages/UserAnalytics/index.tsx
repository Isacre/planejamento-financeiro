import React from "react";
import styled from "styled-components";
import PannelTitleAndSearch from "../../components/PannelTitleAndSearch";

const Component = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fcfbfc;
`;

export default function UserAnalytics() {
  return (
    <Component>
      <PannelTitleAndSearch title="Gráficos" />
    </Component>
  );
}
