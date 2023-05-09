import  {  ReactNode } from "react";
import { Container,ButtonVariantType } from "./styled";

interface IButtonProps {
  variant: ButtonVariantType;
  onClick?: () => void;
  children: ReactNode;
  type: "button" | "submit" | "reset" | undefined
  disabled?: true | false

}

export const Button = ({ variant, onClick, type, children, }: IButtonProps) => {
  return (
    <Container variant={variant} type={type} onClick={onClick}>
      {children}
    </Container>
  );
};
