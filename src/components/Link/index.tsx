import { Container, LinkVariantType } from "./styled";
import React, { HtmlHTMLAttributes, ReactNode } from "react";

interface ILinkProps {
  variant: LinkVariantType;
  rota: string;
  children: ReactNode;
}
export const Link = ({ variant, children, rota }: ILinkProps) => (
  <Container to={rota} variant={variant}>
    {children}
  </Container>
);
