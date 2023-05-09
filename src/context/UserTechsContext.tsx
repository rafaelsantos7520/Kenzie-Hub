import { createContext, useContext } from "react";
import { iApiError, iPropsContext, iTech, UserContext } from "./UserContext";
import { api } from "../services/api";
import { toast } from "react-toastify";
import { AxiosError } from "axios";

export interface iUserTechsContext {
  deletarTech:(techId: string) => void;
  userTechs:iTech[]
  setUserTechs:React.Dispatch<React.SetStateAction<iTech[]>>
  cadastrarTech:(
    data: iTech,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    onClose: React.Dispatch<React.SetStateAction<boolean>>,
    ) => void
}

export const UserTechscontext = createContext({} as iUserTechsContext);

export const UserTechsProvider = ({ children }: iPropsContext) => {
  const { userTechs, setUserTechs } = useContext(UserContext);

  const cadastrarTech = async (data: iTech, 
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    onClose: React.Dispatch<React.SetStateAction<boolean>>) => {
    try {
      setLoading(true);
      const response = await api.post("users/techs", data);
      toast.success("Tecnlogia cadastrada com sucesso");
      const newTechsList = [
        ...userTechs,
        {
          id: response.data.id,
          title: response.data.title,
          status: response.data.status,
        },
      ];
      setUserTechs(newTechsList);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.message);
      setLoading(false);
    } finally {
      setLoading(false);
      onClose(true);
    }
  };

  const deletarTech = async (techId:string) => {
    const newTechsList = userTechs.filter((tech) => tech.id !== techId);
    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const response = await api.delete(`users/techs/${techId}`);
      toast.success("Tecnlogia Deletada com sucesso");
      setUserTechs(newTechsList);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.message);
    }
  };

  return (
    <UserTechscontext.Provider
      value={{
        userTechs,
        setUserTechs,
        cadastrarTech,
        deletarTech,
      }}
    >
      {children}
    </UserTechscontext.Provider>
  );
};
