import React, { useState, useContext, useEffect } from 'react';
import {Icon} from 'react-icons-kit';
import {save} from 'react-icons-kit/feather/save';
import {androidCancel} from 'react-icons-kit/ionicons/androidCancel'


export const Alterar = ({editFormData, handleEditFormChange, handleCancelClick}) => {
  return (
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
                    required='required' 
                    placeholder='Escreva a categoria' 
                    name='categoria'
                    value={editFormData.categoria}
                    onChange={handleEditFormChange}
                    />
        </td>
        <td>
            <input  type="text" 
                    required='required' 
                    placeholder='Escreva o nome' 
                    name='nome'
                    value={editFormData.nome}
                    onChange={handleEditFormChange}
                    />
        </td>
        <td>
            <input type="text" 
                    required='required' 
                    placeholder='Escreva o fornecedor' 
                    name='fornecedor'
                    value={editFormData.fornecedor}
                    onChange={handleEditFormChange}/>
        </td>
        <td>
            <input  type="text" 
                        required='required' 
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
  )
}

export default Alterar;