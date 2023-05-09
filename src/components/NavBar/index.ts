import styled from "styled-components";

export const NavBar = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
  box-sizing: border-box;
  margin: 0 auto;
  max-width: 100%;
  border: 1px solid var(--Grey-3);
  justify-content: space-between;
  padding: 30px 120px;

  img {
    height: 22px;
    width: 105px;
    
  }
    .imgCentralizada{
      margin: auto;
    }
  @media (max-width: 720px) {
    justify-content: space-between;
    padding: 10px;
  }
`;
