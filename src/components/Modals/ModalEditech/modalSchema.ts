import * as yup from "yup";

export const ModalSchema = yup.object({
  status: yup.string().required(),
});
