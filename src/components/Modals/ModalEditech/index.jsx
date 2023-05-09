import { Form } from "../../Form/index";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Titulo1 } from "../../styles/Textos";
import { Button } from "../../Button/index.js";
import { ModalContainer } from "./styled";
import { ModalSchema } from "./modalSchema";
import { ParagrafoErro } from "../../ParagrafoErro";
import { useState, useContext } from "react";
import { UserTechscontext } from "../../../context/UserTechsContext";

export const Modal = ({ onClose }) => {
  const [loading, setLoading] = useState(false);
  const { atualizarTech } = useContext(UserTechscontext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ModalSchema),
  });

  const onSubmit = async (data) => {
    atualizarTech(data, setLoading, onClose);
  };
  return (
    <ModalContainer>
      <div className="conteudoModal">
        <div className="headerModal">
          <Titulo1>Cadastrar Tecnologia</Titulo1>
          <Button variant={"buttonModal"} onClick={onClose}>
            X
          </Button>
        </div>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="nome">Nome</label>
          <input disabled
            placeholder="nome da tecnologia"
            id="nome"
            type="text"
            
          />
          <ParagrafoErro>{errors.title?.message}</ParagrafoErro>
          <label htmlFor="nivelSelect">Selecionar status</label>
          <select id="nivelSelect" type="text" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>
          <Button variant={"submit"} type="submit">
            {loading ? "Cadastrando..." : "Cadastrar Tecnologia"}
          </Button>
        </Form>
      </div>
    </ModalContainer>
  );
};
