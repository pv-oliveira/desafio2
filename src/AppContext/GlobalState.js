import React, { useEffect, useState } from "react";

const GlobalContext = React.createContext();

// Pegando os dados em Local Storage
const getDatafromLocalStorage = () => {
  const data = localStorage.getItem("produtos");
  if (data) {
    return JSON.parse(data);
  } else {
    return [];
  }
};

function GlobalProvider({ children }) {
  const [produtos, setProdutos] = useState(getDatafromLocalStorage());

  //Definindo os dados
  useEffect(() => {
    localStorage.setItem("produtos", JSON.stringify(produtos));
  }, [produtos]);

  //Função para edição de produtos
  const editUser = (id, data) => {
    const updatedProdutos = produtos.map((element) => {
      return element.codigo === id ? data : element;
    });
    setProdutos(updatedProdutos);
  };

  //Função para adicionar um novo produto
  function addUser(newItem) {
    setProdutos((prevItems) => [...prevItems, newItem]);
  }

  //Função para remover um produto
  const removeUser = (codigo) => {
    const filtProdutos = produtos.filter((element, index) => {
      return element.codigo !== codigo;
    });

    setProdutos(filtProdutos);
  };

  return (
    <GlobalContext.Provider
      value={{
        addUser,
        produtos,
        removeUser,
        setProdutos,
        editUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

export { GlobalProvider, GlobalContext };
