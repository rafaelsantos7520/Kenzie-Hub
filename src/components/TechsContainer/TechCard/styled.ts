import styled from "styled-components";

export const StyledTechlI = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 35px;
  border-radius: 4px;
  background-color: var(--Grey-4);
  padding: 10px;
  transition: all 0.3s;

  div {
    display: flex;
    gap: 10px;
  }
  &:hover {
    background-color: var(--Grey-2);
  }
`;
