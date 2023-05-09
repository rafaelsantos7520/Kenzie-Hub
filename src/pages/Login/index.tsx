import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Form } from "../../components/Form/index";
import { ParagrafoErro  } from "../../components/ParagrafoErro/index";
// import Logo from "../../assets/img/Logo.png";
import { useState } from "react";
import { Loginschema } from "./loginSchema";
import { NavBar } from "../../components/NavBar";
import { Headline, Titulo1 } from "../../components/styles/Textos";
import { UserContext } from "../../context/UserContext";
import { useContext } from "react";
import { Button } from "../../components/Button/index";
import { Link } from "../../components/Link/index";
import { logo } from './../Dashboard/index';



export interface iLoginFormData{
  email: string;
  password: string;
  name: string;
  bio:string;
  contact:string;
  course_module:string;
}

export const Login = () => {
  const [loading, setLoading] = useState(false);

  const { userLogin } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginFormData>({
    resolver: yupResolver(Loginschema),
  });

  const onSubmit = async (data:iLoginFormData) => {
    userLogin(data, setLoading);
  };

  return (
    <>
      <NavBar>
        <img className="imgCentralizada" src={logo} alt="logo kenzie hub" />
      </NavBar>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Titulo1>Login</Titulo1>
        <label htmlFor="email">E-mail</label>
        <input
          placeholder="Email"
          id="email"
          type="email"
          {...register("email")}
        />
        <ParagrafoErro>{errors.email?.message}</ParagrafoErro >
        <label htmlFor="password">Password</label>
        <input
          placeholder="senha"
          id="password"
          type="password"
          {...register("password")}
        />
        <ParagrafoErro>{errors.password?.message}</ParagrafoErro>
        <Button type="submit" variant={"submit"} disabled={loading}>
          {loading ? "Entrando..." : "Entrar"}
        </Button>
        <Headline>Ainda não possui conta?</Headline>
        <Link variant="linkBig" rota="/register">
          Cadastrar
        </Link>
      </Form>
    </>
  );
};
