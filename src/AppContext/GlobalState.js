import React, { useEffect, useState } from 'react';

const GlobalContext = React.createContext()


// Pegando os dados em Local Storage
const getDatafromLocalStorage=()=>{
      const data = localStorage.getItem('produtos');
      if(data){
        return JSON.parse(data);
      }
      else{
        return []
      }
    }

function GlobalProvider ({ children }) {
    const [produtos, setProdutos]=useState(getDatafromLocalStorage())

    //Definindo os dados
    useEffect(()=>{
        localStorage.setItem('produtos', JSON.stringify(produtos));
        },[produtos])

    //Função para adicionar um novo produto
    function addUser(newItem){
        setProdutos(prevItems => [...prevItems, newItem])
    }
    
    //Função para remover um produto
    const removeUser=(codigo) => {
      const filtProdutos = produtos.filter((element,index)=>{
        return element.codigo !== codigo
      })
      setProdutos(filtProdutos);
    }
    
  return (
    <GlobalContext.Provider value={{
        addUser,
      produtos,
      removeUser,
      setProdutos,
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export {GlobalProvider, GlobalContext}