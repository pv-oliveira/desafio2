import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from "../../AppContext/GlobalState";
import { useNavigate } from "react-router-dom";
import Logo from '../Logo/Logo';

export const AddUser = () => {
    //Fazer input dos campos
  const [codigo, setCodigo]=useState('');
  const [categoria, setCategoria]=useState('');
  const [nome, setNome]=useState('');
  const [fornecedor, setFornecedor]=useState('');
  const [valor, setValor]=useState('');
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = {
        codigo,
        categoria,
        nome,
        fornecedor,
        valor
    }
    addUser(newUser);
    navigate("/");
  }

  return (
    <div>
    <div>
      <Logo />
    </div>
      <form autoComplete='off' className='cads pa4 black-80 br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 tc center' onSubmit={onSubmit}>
        <legend className="f1 fw6 ph0 mh0">Cadastro</legend>
        <label>Código do Produto</label>
          <input type='text' 
                className='b pa2 input-reset ba bg-transparent hover-bg-white w-100' required
                onChange={(e)=>setCodigo(e.target.value)} 
                value={codigo}></input>
                  <br></br>
        <label>Categoria do Produto</label>
          <input type='text' className='b pa2 input-reset ba bg-transparent hover-bg-black w-100' required
                onChange={(e)=>setCategoria(e.target.value)} 
                value={categoria}></input>
                  <br></br>
        <label>Nome do Produto</label>
          <input type='text' 
                className='b pa2 input-reset ba bg-transparent hover-bg-black w-100' required
                onChange={(e)=>setNome(e.target.value)} 
                value={nome}></input>
                  <br></br>
        <label>Nome do Fornecedor</label>
          <input type='text' 
                className='b pa2 input-reset ba bg-transparent hover-bg-black w-100' required
                onChange={(e)=>setFornecedor(e.target.value)} value={fornecedor}></input>
                  <br></br>
        <label>Valor do produto</label>
          <input type='text' 
                className='b pa2 input-reset ba bg-transparent hover-bg-black w-100' required
                onChange={(e)=>setValor(e.target.value)} value={valor}></input>
                  <br></br>
        <button type='submit' 
                className='mt4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'>Adicionar</button>
      </form>
    </div>
  )
}
