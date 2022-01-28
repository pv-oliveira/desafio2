import React from "react";
import View from './componentes/View';
import App from "../App";



export const Tabela = ({produtos, apagarProd}) =>{

    return(
        <div className='view-container flex flex-center'>
            {produtos.length > 0 &&<>
              <div className='table-responsive'>
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
                    <View produtos={produtos} apagarProd={apagarProd}/>
                  </tbody>
                </table>
              </div>
              <button className='btn btn-danger btn-md'
                onClick={()=>setProdutos([])}>Limpar Tudo</button>
            </>}
            {produtos.length < 1 && <div>Não há produtos cadastrados</div>}
        </div>
        
    );
}

export default Tabela;