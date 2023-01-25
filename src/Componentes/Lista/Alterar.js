import React, { useState, useContext } from "react";
import { Icon } from "react-icons-kit";
import { save } from "react-icons-kit/feather/save";
import { androidCancel } from "react-icons-kit/ionicons/androidCancel";
import { GlobalContext } from "../../AppContext/GlobalState";

export const Alterar = ({ oldProduto, handleCancelClick }) => {
  const { editUser } = useContext(GlobalContext);

  const [formFields, setFormFields] = useState(oldProduto.get());

  const { codigo, categoria, nome, fornecedor, valor } = formFields;
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      codigo,
      categoria,
      nome,
      fornecedor,
      valor,
    };

    editUser(oldProduto.get().codigo, data);
    oldProduto.set("");
  };

  return (
    <>
      <tr>
        <td>
          <input
            type="text"
            placeholder="Escreva o codigo"
            name="codigo"
            value={codigo}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Escreva a categoria"
            name="categoria"
            value={categoria}
            onChange={(e) => handleChange(e)}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Escreva o nome"
            name="nome"
            value={nome}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Escreva o fornecedor"
            name="fornecedor"
            value={fornecedor}
            onChange={handleChange}
          />
        </td>
        <td>
          <input
            type="text"
            placeholder="Escreva o valor"
            name="valor"
            value={valor}
            onChange={handleChange}
          />
        </td>
        <td className="Submit" onClick={(e) => handleSubmit(e)}>
          <Icon icon={save} />
        </td>
        <td type="button" onClick={handleCancelClick}>
          <Icon icon={androidCancel} />
        </td>
      </tr>
    </>
  );
};

export default Alterar;
