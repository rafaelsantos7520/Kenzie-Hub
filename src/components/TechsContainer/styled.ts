import styled from "styled-components";

export const StyledTechList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:flex-start;
  background-color: var(--Grey-3);
  height: 297px;
  border-radius: 5px;
  margin: 0 120px;
  padding: 15px 16px;
  gap: 15px;
  overflow-y: auto;



  @media (max-width:720px) {
    max-width: 90%;
    margin: auto;
  }
`;
