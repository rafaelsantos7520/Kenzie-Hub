import styled from "styled-components";

export const Form = styled.form`
  /* Auto layout */

  display: flex;
  flex-direction: column;
  text-align: start;
  padding: 42px 22px;
  margin: 20px auto ;
  gap: 10px;
  overflow-y:scroll;


  width: 370px;
  max-width: 95%;
  box-sizing: border-box;
  max-height: 700px;
  border-radius: 6px;
  overflow-y: auto;
  background-color: var(--Grey-3);

  label {
    font-size: 12px;
    font-weight: 400;
    color: var(--Grey-0);
  }
  input {
    height: 48px;
    max-width: 329;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
    font-size: 16px;

    background-color: var(--Grey-2);
    border: 1.22px solid var(--Grey-2);

    ::placeholder {
      color: var(--Grey-1);
    }
  }

  input:focus {
    border: 1.22px solid var(--Grey-0);
    color: var(--Withe);

    ::placeholder {
      color: var(--Grey-0);
    }
  }

  select {
    height: 48px;
    max-width: 329;
    border-radius: 4px;
    padding: 0px 16px 0px 16px;
    font-size: 16px;
    background-color: var(--Grey-2);
    border: 1.22px solid var(--Grey-2);
    color: var(--Grey-1);
  }
  @media (max-width: 720px) {
    max-height: 650px;
    
  }
`;
