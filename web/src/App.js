import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';


// . Componente - Bloco isolado de HTML, CSS e JS que não interfere no restante da aplicação.
//    Função que retorna algum HTML, CSS ou JS para interface. Ele retorna isso daí. 
//    Se repete muito, ou quando vc isola um pedaço da aplicação em blocos.
//    Geralmente 1 por arquivo.
// 
// . Estado - Informação mantida pelo componente. (Lembrar: Imutabilidade). 
// O React não monitora mudanças de variáveis para exibição. Quem faz isso é o State.
// 
// . Propriedade - Informações que um componente PAI passa para os FILHOS. O PAI chama dentro dele os FILHOS.

// React usa uma estrutura imperativa, ou seja, a aplicação entende que um estado foi alterado. Diferente de um paradigma 
// declarativo, que você diz exatamente o que você quer no código.

import Header from './Header';

function App() {
  // useEffect é usado quando quer disparar uma função 1 única vez. Nesse caso, quando o componente é montado e pronto.
  //  Params: 1- O que (uma função)  2- Quando? (Também chamado de dependência do useEffect())
  const [devs, setDevs] = useState([]);
  
  const [github_username, setGitHubUsername] = useState(''); 
  const [techs, setTechs] = useState('');
  const [latitude, setLatitude] = useState(''); 
  const [longitude, setLongitude] = useState(''); 


  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {   //caso de sucesso
        console.log(position);
        const { latitude, longitude } = position.coords;

        setLatitude(latitude);
        setLongitude(longitude);
      },
      (err) => {
        console.log(err);
      },
      {
        timeout: 30000,
      }
    );
  }, []) 

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, []) 
  
  async function handleAddDev(e) {
    e.preventDefault();

    const response = await api.post('/devs', {
      github_username,
      techs,
      latitude,
      longitude,
    });

    setGitHubUsername('');
    setTechs('');
    console.log(response.data);
  }
 

  return (
   <div id="app">
     <aside>
       <strong>Cadastrar</strong>
       <form onSubmit={handleAddDev}>
         <div className="input-block">
          <label htmlFor="github_username">Usuário do Github</label>
          <input 
            name="github_username" 
            id="github_username"
            required
            value={github_username}
            onChange={e => setGitHubUsername(e.target.value)}
           />
         </div>
         
         <div className="input-block">
          <label htmlFor="techs">Tecnologias</label>
          <input
           name="techs"
           id="techs" 
           required
           value={techs}
            onChange={e => setTechs(e.target.value)} 
           />
         </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input 
              type="number"
               name="latitude"
                id="latitude" 
                required 
                value={latitude}
                onChange={e => setLatitude(e.target.value)} // Espero o evendo do HTML e seto no meu setLatitude. É assim que se armazena um valor de input no React.
                />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input 
              type="number"
               name="longitude"
                id="longitude" 
                required 
                value={longitude}
                onChange={e => setLongitude(e.target.value)}
                />
            </div>
          </div>

          <button type="submit">Salvar</button>

       
       </form>

     </aside>
     <main>

       <ul>
         <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/20937435?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Renata Francelino</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Alguma Bio Aqui</p>
            <a href="https://github.com/Renatafsouza">Acessar perfil no Github</a>
         </li>

         <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/20937435?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Renata Francelino</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Alguma Bio Aqui</p>
            <a href="https://github.com/Renatafsouza">Acessar perfil no Github</a>
         </li>

         <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/20937435?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Renata Francelino</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Alguma Bio Aqui</p>
            <a href="https://github.com/Renatafsouza">Acessar perfil no Github</a>
         </li>

         <li className="dev-item">
            <header>
              <img src="https://avatars3.githubusercontent.com/u/20937435?s=460&v=4" alt=""/>
              <div className="user-info">
                <strong>Renata Francelino</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>
            <p>Alguma Bio Aqui</p>
            <a href="https://github.com/Renatafsouza">Acessar perfil no Github</a>
         </li>
       </ul>

     </main>

   </div>

  );
}

export default App;
