import React from 'react';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';
import {edit} from 'react-icons-kit/feather/edit';

//Aqui fica a tabela onde os dados que foram salvos são exibidos
//o método map(), do objeto Array, que nos permite percorrer um vetor 
//e obter um novo array cujos itens são o resultado de uma função de 
//callback que recebe como parâmetro cada item original.

export const View = ({produtos, removeUser, handleEditClick}) => {
    console.log(produtos)
    return produtos.map((prod, index)=>(
        <tr className='tc' key={prod.codigo}>
            <td>{prod.codigo}</td>
            <td>{prod.categoria}</td>
            <td>{prod.nome}</td>
            <td>{prod.fornecedor}</td>
            <td>{prod.valor}</td>
            <td className='edit-btn' onClick={(event)=>handleEditClick(event, index)}>
                <Icon icon={edit}/>
            </td>
            <td className='delete-btn' onClick={()=>removeUser(prod.codigo)}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
}

export default View;