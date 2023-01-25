import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddUser } from "./Componentes/AddUser/AddUser";
import Home from "./Pagina/home";
import Alterar from "./Componentes/Lista/Alterar";
import UserList from "./Componentes/Lista/UserList";

const Router = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/add" element={<AddUser />} />
      <Route path="/users" element={<UserList />} />
      <Route path="/alterar" element={<Alterar />} />
    </Routes>
  );
};

export default Router;
