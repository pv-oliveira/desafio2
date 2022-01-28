import React, { useContext, Fragment, useState } from 'react';
import { GlobalContext } from '../../AppContext/GlobalState';
import { useNavigate } from "react-router-dom";
import View from './View';
import  Alterar  from './Alterar';
import Logo from '../Logo/Logo';

export const UserList = () =>{

//Das linhas 11 até a 80 é a minha tentativa de edição dos itens cadastrados, 
//infelizmente não consegui fazer essa parte funcionar, mas ela não atrapalha o funcionamento do código,
//deixei aqui caso queira dar uma olhada

  const[editContactId, setEditContactId] = useState(null);
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  }
  
  const {produtos, removeUser, setProdutos} = useContext(GlobalContext);
  const [codigo, setCodigo]=useState('');
  const [categoria, setCategoria]=useState('');
  const [nome, setNome]=useState('');
  const [fornecedor, setFornecedor]=useState('');
  const [valor, setValor]=useState('');
  const [editFormData, setEditFormData]= useState({
    codigo,
    categoria,
    nome,
    fornecedor,
    valor
})
  
  const handleEditClick=(event, codigo) => {
    event.preventDefault();
    setEditContactId(produtos.codigo);

    const formValues = {
      codigo: produtos.codigo,
      categoria: produtos.categoria,
      nome: produtos.nome,
      fornecedor: produtos.fornecedor,
      valor: produtos.valor
    }

    setEditFormData(formValues);
  }

  const handleCancelClick = () =>{
    setEditContactId(null);
  }

  const handleEditFormChange = (e) => {
    e.preventDefault();

    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;

    const newFormData = { ...editFormData};
    newFormData [fieldName] = fieldValue;

    setEditFormData(newFormData);
  }

  const handleEditFormSubmit= (e)=>{
    e.preventDefault();

    const editedProdutos = {
      codigo: editFormData.codigo,
      categoria: editFormData.categoria,
      nome: editFormData.nome,
      fornecedor: editFormData.fornecedor,
      valor: editFormData.valor
    }
    const newProdutos = [...codigo];
    const index = ((produtos)=> produtos.codigo == editContactId);

  newProdutos[index] = editedProdutos;
    setCodigo(newProdutos);
    setEditContactId(null);
  }
  
    return(
      <div>
        <div>
      <Logo />
        </div>
        <div className='wrapper'>
          <form onSubmit={handleEditFormSubmit}>
            <div className='cads pa4 black-80 br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw7 shadow-5 tc center' onSubmit={onSubmit}>
                {produtos.length > 0 &&<>
                  <div className='table-responsive' >
                    <table className='table'>
                      <thead>
                        <tr className="tc">
                          <th>Codigo</th>
                          <th>Categoria</th>
                          <th>Produto</th>
                          <th>Fornecedor</th>
                          <th>Valor</th>
                          <th>Alterar</th>
                          <th>Deletar</th>
                        </tr> 
                      </thead>
                      <tbody>
                        <Fragment>
                          { editContactId === produtos.codigo ? (
                            <Alterar editFormData={editFormData} 
                                    handleEditFormChange={handleEditFormChange}
                                    handleCancelClick={handleCancelClick}/>
                          ) : (
                            <View produtos={produtos} removeUser={removeUser} handleEditClick={handleEditClick}/>
                          )}
                        </Fragment>
                      </tbody>
                    </table>
                  </div>
                  <button className='mt4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
                  onClick={()=>setProdutos([])}>Limpar Tudo</button>
                  {/* <button className='mt4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma3'
                  onClick={onSubmit}>Home</button> */}
                </>}
                {produtos.length < 1 && <div>Não há produtos cadastrados</div>}
            </div>
          </form>
        </div> 
      </div> 
    );
}

export default UserList;