import React, { useState, useContext, useEffect } from 'react';
import {Icon} from 'react-icons-kit';
import {save} from 'react-icons-kit/feather/save';
import {androidCancel} from 'react-icons-kit/ionicons/androidCancel'
import { useNavigate } from 'react-router-dom';


export const Alterar = ({editFormData, handleEditFormChange, handleCancelClick}) => {
    console.log(editFormData)
    const navigate = useNavigate()
    return (<>
    <tr>
        <td>
            <input  type="text" 
                    placeholder='Escreva o codigo' 
                    name='codigo'
                    value={editFormData.codigo}
                    onChange={handleEditFormChange} />
        </td>
        <td>
            <input  type="text" 
                    placeholder='Escreva a categoria' 
                    name='categoria'
                    value={editFormData.categoria}
                    onChange={handleEditFormChange}
                    />
        </td>
        <td>
            <input  type="text" 
                    placeholder='Escreva o nome' 
                    name='nome'
                    value={editFormData.nome}
                    onChange={handleEditFormChange}
                    />
        </td>
        <td>
            <input type="text" 
                    placeholder='Escreva o fornecedor' 
                    name='fornecedor'
                    value={editFormData.fornecedor}
                    onChange={handleEditFormChange}/>
        </td>
        <td>
            <input  type="text" 
                        placeholder='Escreva o valor' 
                        name='valor'
                        value={editFormData.valor}
                        onChange={handleEditFormChange}/>
        </td>
            <td className='Submit'>
                <Icon icon={save}/>
            </td>
            <td type='button' onClick={handleCancelClick}>
                <Icon icon={androidCancel}/>
            </td>
    </tr>
    <button onClick={navigate(-1)}>voltar</button>
    </> )
}

export default Alterar;