import React, { useState, useEffect } from 'react';
import api from './services/api';
import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

import DevItem from './components/DevItem';
import DevForm from './components/DevForm';



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
  
  // const [github_username, setGitHubUsername] = useState(''); 
  // const [techs, setTechs] = useState('');
  // const [latitude, setLatitude] = useState(''); 
  // const [longitude, setLongitude] = useState(''); 
  

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs');

      setDevs(response.data);
    }
    loadDevs();
  }, []) 
  
  // --- Versão antes de componentizar: ----
  // async function handleAddDev(e) {
  //   e.preventDefault();

  //   const response = await api.post('/devs', {
  //     github_username,
  //     techs,
  //     latitude,
  //     longitude,
  //   });

  //   setGitHubUsername('');
  //   setTechs('');

  //   setDevs([...devs, response.data]); //no react não existe devs.push, devido o conceito de imutabilidade. então criou um novo array e copiou os valores "...dev"
  //   console.log(response.data);
  // }

// Após a componentização:
 
async function handleAddDev(data) {
    const response = await api.post('/devs', data);

    setDevs([...devs, response.data]); //no react não existe devs.push, devido o conceito de imutabilidade. então criou um novo array e copiou os valores "...dev"
    console.log(response.data);
  }


  return (
   <div id="app">
     <aside>
       <strong>Cadastrar</strong>
        <DevForm onSubmit={handleAddDev} />

     </aside>
     <main>

       <ul>
         {devs.map(dev => (
            <DevItem key={dev._id} dev={dev}/>  // eu dei o nome da propriedade de Dev lá no arquivo do DevItem ;) E a declaração de chave necessita ficar aqui
         ))}   

       </ul>

     </main>

   </div>

  );
}

export default App;
