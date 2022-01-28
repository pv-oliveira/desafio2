import React from "react";
import Tilt from 'react-tilt';
import edit from './edit.png';
import { useNavigate } from "react-router-dom";

//Coloquei essa função aqui para servir de butão clicável para retornar a Página Inicial
const Logo = () => {
    const navigate = useNavigate();

const onSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  }

    return(
        <div className="ma4 mt3">
            <Tilt onClick={onSubmit} className="Tilt br2 shadow-2"  options={{ max : 55 }} style={{ height: 150, width: 150 }} >
            <div className="Tilt-inner pa3"><img alt='logo' src={edit} onClick={onSubmit}/>  </div>
            </Tilt>
        </div>
    );
}

export default Logo;