import { StyledTechList } from "./styled";
import { useContext } from "react";
import { TechCard } from "./TechCard";
import { UserContext } from "../../context/UserContext";
import { iTech } from './../../context/UserContext';



export const TechsList = () => {
  const { userTechs } = useContext(UserContext);
  
  return (
    <StyledTechList>
      {userTechs.map((tech:iTech) => (
        <TechCard key={tech.id} tech={tech} />
      ))}
    </StyledTechList>
  );
};
