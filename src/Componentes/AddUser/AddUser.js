import React, { useState, useContext, useEffect } from "react";
import { GlobalContext } from "../../AppContext/GlobalState";
import { useNavigate } from "react-router-dom";
// import Logo from "../Logo/Logo";

export const AddUser = ({ oldProduto, updating }) => {
  //Fazer input dos campos
  const [codigo, setCodigo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nome, setNome] = useState("");
  const [fornecedor, setFornecedor] = useState("");
  const [valor, setValor] = useState("");
  const { addUser, editUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      codigo,
      categoria,
      nome,
      fornecedor,
      valor,
    };

    !updating ? addUser(newUser) : editUser(oldProduto.get().codigo, newUser);
    !updating ? navigate("/") : oldProduto.set("") ;
  };

  const cancelSubmit = (e) => {
    e.preventDefault();
    updating ? oldProduto.set("") : navigate("/");
  };

  useEffect(() => {
    async function fetchData() {
      if (!updating) return;
      setCodigo(oldProduto.get().codigo);
      setCategoria(oldProduto.get().categoria);
      setNome(oldProduto.get().nome);
      setFornecedor(oldProduto.get().fornecedor);
      setValor(oldProduto.get().valor);
    }
    fetchData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {/* <div>
        <Logo />
      </div> */}
      <div
        autoComplete="off"
        className="cads pa4 black-80 br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 tc center"
        // onSubmit={(e) => onSubmit(e)}
      >
        <legend className="f1 fw6 ph0 mh0">
          {!updating ? "Cadastro" : "Atualizar"}
        </legend>
        <label>Código do Produto</label>
        <input
          type="text"
          className="b pa2 input-reset ba bg-transparent hover-bg-white w-100"
          required
          onChange={(e) => setCodigo(e.target.value)}
          value={codigo}
        ></input>
        <br></br>
        <label>Categoria do Produto</label>
        <input
          type="text"
          className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
          required
          onChange={(e) => setCategoria(e.target.value)}
          value={categoria}
        ></input>
        <br></br>
        <label>Nome do Produto</label>
        <input
          type="text"
          className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
          required
          onChange={(e) => setNome(e.target.value)}
          value={nome}
        ></input>
        <br></br>
        <label>Nome do Fornecedor</label>
        <input
          type="text"
          className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
          required
          onChange={(e) => setFornecedor(e.target.value)}
          value={fornecedor}
        ></input>
        <br></br>
        <label>Valor do produto</label>
        <input
          type="text"
          className="b pa2 input-reset ba bg-transparent hover-bg-black w-100"
          required
          onChange={(e) => setValor(e.target.value)}
          value={valor}
        ></input>
        <br></br>

        <button
          onClick={onSubmit}
          className="mt4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
        >
          {!updating ? "Adicionar" : "Atualizar"}
        </button>
        <button
          onClick={(e) => cancelSubmit(e)}
          className="mt4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma3"
        >
          Cancelar
        </button>
      </div>
    </div>
  );
};
