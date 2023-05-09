import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;

  .headerModal {
    width: 370px;
    display: flex;
    justify-content: space-between;
    background-color: var(--Grey-2);
    margin: 0;
    padding: 10px;
    @media (max-width: 720px) {
      margin: auto;
      max-width: 90%;
    }
  }
  .conteudoModal {
    background-color: var(--Grey-2);
    border-radius: 8px;
    padding: 10px;
    @media (max-width: 720px) {
      margin: auto;
      max-width: 90%;
    }

    form {
      background-color: var(--Grey-3);
      width: 100%;
      margin: 0 auto;
    }
  }
`;
