import React from "react";
import styled from "styled-components";
import SideBar from "../../components/SideBar";

const Component = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fcfbfc;
`;

export default function Dashboard() {
  return (
    <Component>
      <SideBar />
      <div>aaaa</div>
    </Component>
  );
}
