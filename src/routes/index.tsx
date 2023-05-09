import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { RotasProtegidas } from "../components/RotasProtegidas";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route element={<RotasProtegidas />}>
      <Route path="/Dashboard" element={<Dashboard />} />
    </Route>
  </Routes>
);
