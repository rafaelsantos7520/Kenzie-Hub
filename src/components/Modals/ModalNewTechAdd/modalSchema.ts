import * as yup from "yup";

export const ModalSchema = yup.object({
  title: yup.string().required("Campo  obrigatorio!"),
  status: yup.string().required(),
});
