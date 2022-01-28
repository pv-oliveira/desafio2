import React from 'react';
import { Link } from "react-router-dom";
import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  Container
} from "reactstrap";

export const Heading = () => {
  return (
    <Navbar  className='cads br3 ba b--black-10 mv7 w-100 w-50-m w-25-l mw6 shadow-5 tc center'>
      <Container>
        <div href="/">Cadastro de produtos</div>
        <div className='tc center'>
          <ul className='pl0'>
            <Link className="btn btn-primary ma1" to="/add">Cadastrar Produto</Link>

            <Link className="btn btn-primary" to="/users">Produtos</Link>
          </ul>
        </div>

      </Container>
    </Navbar>
  )
}
