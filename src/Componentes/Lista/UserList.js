import React, { useContext, Fragment, useState } from "react";
import { GlobalContext } from "../../AppContext/GlobalState";
import { useNavigate } from "react-router-dom";
import View from "./View";
// import Alterar from "./Alterar";
// import Logo from "../Logo/Logo";
import { AddUser } from "../AddUser/AddUser";

export const UserList = () => {
  const [productsUpdate, setProductsUpdate] = useState("");
  const [updating, setUpdating] = useState(false);

  const { produtos, removeUser, setProdutos } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleEditClick = (event, codigo) => {
    event.preventDefault();
    setUpdating(true);
    setProductsUpdate(produtos[codigo]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <div>
      {/* <div>
        <Logo />
      </div> */}
      <div className="wrapper">
        <form>
          <div
            className="cads pa4 black-80 br3 ba b--black-10 mv4 w-auto w-50-m w-25-l mw7 shadow-5 tc center"
            onSubmit={onSubmit}
          >
            {!productsUpdate ? (
              produtos.length > 0 ? (
                <>
                  <div className="table-responsive">
                    <table className="table">
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
                          {
                            // productsUpdate ? (
                            //   <Alterar
                            //     oldProduto={{
                            //       get: () => productsUpdate,
                            //       set: setProductsUpdate,
                            //     }}
                            //   />
                            // ) : (
                            <View
                              produtos={produtos}
                              removeUser={removeUser}
                              handleEditClick={handleEditClick}
                            />
                            // )
                          }
                        </Fragment>
                      </tbody>
                    </table>
                  </div>
                  <button
                    className="mt4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                    onClick={() => setProdutos([])}
                  >
                    Limpar Tudo
                  </button>
                  <button
                    className="mt4 b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib ma3"
                    onClick={onSubmit}
                  >
                    Home
                  </button>
                </>
              ) : (
                <div>Não há produtos cadastrados</div>
              )
            ) : (
              <Fragment>
                <AddUser
                  updating={updating}
                  oldProduto={{
                    get: () => productsUpdate,
                    set: setProductsUpdate,
                  }}
                />
              </Fragment>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserList;
