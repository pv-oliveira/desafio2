# README

<p align="center">        
    <a href='#Tecnologias'>Tecnologias</a>
    <a href='#Projeto'>Projetos</a>
    <a href='#Como Executar'>Como executar</a>
</p>


<p align="center">Esse projeto é desafio Front-End para o processo seletivo.</p>


## ✨ Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org)

## 💻 Projeto

- A página é um sistema de cadastro simples, onde você pode entrar os produtos desejados e depois visualizar esse produtos em uma página separada.
- A maior parte das instalações que fiz foram para compor o visual, deixando-o intuitivo e resposivo.
- Como foi requisitado utilizei o Local Storage para ter a capacidade de escrever, registrar e apagar as inscrições e o Context API para poder criar e navegar entre diferentes páginas.
- Com essas duas ferramentas pude criar a maior parte das aplicações necessárias para construir a página.
- A maior parte das funções utilizadas, como parte da utilização do Context API, estão escritas dentro de '/AppContex/GlobalState' e fui apenas aproveitando para não precisar reescrever em cada uma.
- Utilizei `Tachyons` para poder configurar os styles de cada área de dentro do campo "className", pois são uma solução mais elegante.
-`react-router-dom` foi para poder utilizar o Context API.
-`react-icons-kit` serviu para a estilização dos símbolos, `react-tilt` foi para o efeito que há na página 'Logo' e `react-tsparticles` serviu para criar o efeito de fundo que se encontra em todas as páginas.

## 🚀 Como executar

- Clone o repositório
- Instale as dependências com `npm install`
- As principais são: `Tachyons`, `react-router-dom`, `react-icons-kit`, `react-tsparticles`, `react-tilt`
- Inicie o servidor com `npm start`

Agora você pode acessar [`localhost:3000`](http://localhost:3000) do seu navegador.