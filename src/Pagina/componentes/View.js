import React from 'react';
import {Icon} from 'react-icons-kit';
import {trash} from 'react-icons-kit/feather/trash';

export const View = ({produtos, apagarProd}) => {
    return produtos.map(prod=>(

        <tr className='tc' key={prod.codigo}>
            <td>{prod.codigo}</td>
            <td>{prod.categoria}</td>
            <td>{prod.nome}</td>
            <td>{prod.fornecedor}</td>
            <td>{prod.valor}</td>
            <td></td>
            <td className='delete-btn' onClick={()=>apagarProd(prod.codigo)}>
                <Icon icon={trash}/>
            </td>
        </tr>
    ))
}

export default View;