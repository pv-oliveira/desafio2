import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./Componentes/Home";
import { AddUser } from "./Componentes/AddUser/AddUser";
import Particles from "react-tsparticles";
import { Alterar } from './Componentes/Lista/Alterar'
import { GlobalProvider } from "./AppContext/GlobalState";
import './App.css';
import UserList from './Componentes/Lista/UserList';



const App = () => {

  return (
    <div >
      <Particles className='particles'
      options={{
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
          },
          number: {
            density: {
              enable: false,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />
      <GlobalProvider>
        <Router>
          <Routes>
            {/* <Route exact path="/" component={() => <Home users={users} setUsers={setUsers} />} /> */}
            <Route exact path="/" element=<Home/> />
            <Route path="/add" element=<AddUser/> />
            <Route path="/users" element=<UserList/> />
            <Route path="/alterar" element=<Alterar/> />
            {/* <Route path="/edit/:id" component={EditUser} /> */}
          </Routes>
        </Router>
      </GlobalProvider>
    </div>
  )
}

export default App;