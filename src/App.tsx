import { RoutesMain } from "./routes/index";
import { ToastContainer } from "react-toastify";
import { UserProvider } from "./context/UserContext";
import {UserTechsProvider} from "./context/UserTechsContext"
import Global from "./components/styles/Global";

const App = () => {
  return (
    <main>
      <Global />
      <ToastContainer theme="colored" autoClose={2000} />
      <UserProvider>
        <UserTechsProvider>
          <RoutesMain />
        </UserTechsProvider>
      </UserProvider>
    </main>
  );
};

export default App;
