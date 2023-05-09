import styled, { css } from "styled-components";

export type ButtonVariantType =  keyof typeof  ButtonTypeVariations;

interface IButtonContainerProps {
  variant: ButtonVariantType;
}

const ButtonTypeVariations = {
  defaults: css`
  background-color:transparent;
  `,

  submit: css`
    height: 48px;
    border-radius: 4px;
    padding: 0px 22px 0px 22px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    color: var(--Color-white);
    cursor: pointer;
    background-color: var(--Color-primary);

    &:hover {
      background-color: var(--Color-primary-Focus);
    }
    &disabled {
      background-color: var(--Color-primary-Negative);
    }
  `,
  buttonModal: css`
    background-color: transparent;
    border: none;
    font-size: 17px;
    font-weight: 600;
    color: var(--Withe);
    cursor: pointer;
  `,

  buttonNewTech: css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 33px;
    height: 32px;
    border-radius: 4px;
    background-color: var(--Grey-3);
    color: var(--Withe);
    font-size: 25px;
    cursor: pointer;
    transition: all 0.2s;
    border: none;

    &:hover {
      background-color: var(--Grey-2);
    }
  `,
  buttonMedium: css`
    height: 32px;
    width: 99px;
    left: 125px;
    top: 20px;
    border-radius: 4px;
    padding: 0px 10px 0px 10px;
    background-color: var(--Grey-3);
    color: var(--Withe);
    transition: all 0.3s;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: var(--Grey-2);
    }
  `,

  buttonExcluirTech: css`
    background-color: transparent;
    border: none;
    padding: 5px;
    cursor: pointer;
  `,
};


export const Container = styled.button<IButtonContainerProps>`

   ${({ variant  } ) =>  ButtonTypeVariations[variant || "defaults"]}
   
`;
