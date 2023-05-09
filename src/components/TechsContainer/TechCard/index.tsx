import { Headline, Titulo1 } from "../../styles/Textos";
import { StyledTechlI } from "./styled";
import { Button } from "../../Button/index";
// import imgLixeira from "../../../assets/img/imgLixeira.png";
import { UserTechscontext } from "../../../context/UserTechsContext";
import { useContext } from "react";
import { iTech } from "../../../context/UserContext";

interface iTechProps {
  tech: iTech;
}
export const TechCard = ({ tech }: iTechProps) => {
  const { deletarTech } = useContext(UserTechscontext);

  return (
    <StyledTechlI>
      <Titulo1>{tech.title}</Titulo1>
      <div>
        <Headline>{tech.status}</Headline>
        <Button
          onClick={() => deletarTech(tech.id)}
          variant="buttonExcluirTech"
          type="button"
        >
          <img
            src={require("../../../assets/img/imgLixeira.png")}
            alt="button delete"
          />
        </Button>
      </div>
    </StyledTechlI>
  );
};
