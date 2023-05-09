import * as yup from "yup";

export const Loginschema = yup.object({
  email: yup.string().required("Campo  obrigatorio!"),
  password: yup
    .string()
    .min(6, "senha conten seis digitos")
    .required("Digite sua senha!"),
});
