import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

 export type LinkVariantType = keyof typeof LinkTypeVariations;

interface ILinlContainerProps {
  variant: LinkVariantType;
}
const LinkTypeVariations = {
  Defalt: css`
    text-decoration: none;
  `,
  linkBig: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 48px;
    width: 324px;
    max-width: 99%;
    border-radius: 4px;
    padding: 0px 22px 0px 22px;
    border: none;
    font-weight: 500;
    font-size: 16px;
    color: var(--Color-white);
    cursor: pointer;
    background-color: var(--Grey-1);
    &:hover {
      background-color: var(--Grey-2);
    }
  `,

  LinkSmall: css`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 32px;
    width: 99px;
    left: 125px;
    top: 20px;
    border-radius: 4px;
    padding: 0px 10px 0px 10px;
    background-color: var(--Grey-3);
    color: var(--Withe);
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      background-color: var(--Grey-2);
    }
  `,
};
export const Container = styled(Link)<ILinlContainerProps>`
  ${({ variant }) => LinkTypeVariations[variant || "defalt"]}
`;
