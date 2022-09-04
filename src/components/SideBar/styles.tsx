import styled from "styled-components";

export const Wrapper = styled.div`
  width: 75px;
  height: 100vh;
`;

export const LogoContainer = styled.div`
  width: 100%;
  padding: 20px;
  height: 100px;
  svg {
    width: 45px;
    fill: var(--color-main);
  }
`;

export const Menus = styled.div`
  height: 83vh;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
