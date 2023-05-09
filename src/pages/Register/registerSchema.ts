import * as yup from "yup";

export const RegisterSchema = yup.object({
  name: yup.string().required("Campo  obrigatorio!"),
  email: yup
    .string()
    .email("Deve ser um email valido!")
    .required("Campo  obrigatorio!"),
  course_module: yup.string().required("Selecione um modulo"),
  bio: yup.string().required("Campo  obrigatorio!"),
  contact: yup.string().required("Campo  obrigatorio!"),
  password: yup
    .string()
    .min(6, "No minimo 6 caracteres")
    .required("Campo  obrigatorio!"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "As senhas devem ser iguais"),
});
