import { createContext, useState, useEffect } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useLocation, useNavigate } from "react-router-dom";
import { iLoginFormData } from "./../pages/Login/index";
import { iRegisterFormData } from "../pages/Register";
import { AxiosError } from "axios";

export const UserContext = createContext({} as iUserContext);

export interface iUserContext {
  user: iUser | null;
  userTechs: iTech[];
  setUserTechs: React.Dispatch<React.SetStateAction<iTech[]>>;
  userLogin: (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  userLogout: () => void;
  userRegister: (
    data: iRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => void;
  loading: boolean;
}

export interface iLoginResponse {
  user: iUser;
  token: string;
}
export interface iUser {
  id: string;
  name: string;
  course_module: string;
  bio: string;
  techs: iTech[];
}
export interface iTech {
  id: string;
  title: string;
  status: string;
}
export interface iPropsContext {
  children: React.ReactNode;
}
export interface iApiError {
  message: string;
}

export const UserProvider = ({ children }: iPropsContext) => {
  const [user, setUser] = useState<iUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [userTechs, setUserTechs] = useState([] as iTech[]);
  const navigate = useNavigate();
  const location = useLocation();

  const userLogin = async (
    data: iLoginFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      const response = await api.post("sessions", data);
      window.localStorage.setItem("@TOKEN", response.data.token);
      const toLocation = location.state?.from.pathname || "Dashboard";
      setUser(response.data.user);
      navigate(toLocation);
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.message);
      setLoading(false)
    }
  };

  const userLogout = () => {
    setUser(null);
    localStorage.clear();
  };

  useEffect(() => {
    if (user !== null) {
      navigate("/Dashboard");
    }
  }, [navigate, user]);

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    async function getProfile() {
      if (token) {
        api.defaults.headers.authorization = `Bearer ${token}`;
        try {
          const { data } = await api.get("profile");
          setUser(data);
          setUserTechs(data.techs);
        } catch (error) {
          console.log(error);
          localStorage.clear();
        }
      }
      setLoading(false);
    }
    getProfile();
  }, []);

  const userRegister = async (
    data: iRegisterFormData,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    try {
      setLoading(true);
      // eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
      const response = await api.post("users", data);
      toast.success("Cadastro realizado com Sucesso");
      navigate("/");
    } catch (error) {
      const requestError = error as AxiosError<iApiError>;
      toast.error(requestError.response?.data.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <UserContext.Provider
      value={{
        user,
        userLogin,
        userRegister,
        userLogout,
        loading,
        userTechs,
        setUserTechs,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
