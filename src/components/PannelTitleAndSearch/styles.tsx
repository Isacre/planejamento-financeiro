import styled from "styled-components";

export const Component = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 10px;

  .PannelTitle {
    font-size: var(--fontsize-title);
    font-weight: 700;
    color: black;
  }
`;

export const Icons = styled.div`
  display: flex;
  gap: 10px;
  svg {
    font-size: 25px;
    cursor: pointer;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 5px;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 2px black;
  outline: none;
`;
