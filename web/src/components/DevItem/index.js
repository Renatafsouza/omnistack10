import React from 'react';
import './styles.css';

// Outra forma de ser feita:
// function DevItem(props) {
// const { dev } = props; ou desestrutura diretamente no parâmetro

function DevItem({ dev }) {
    return (
        <li key={dev._id} className="dev-item">
           <header>
             <img src={dev.avatar_url} alt={dev.name}/>
             <div className="user-info">
               <strong>{dev.name}</strong>
               <span>{dev.techs.join(', ')}</span>
             </div>
           </header>
           <p>{dev.bio}</p>
           <a href={`https://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
          </li>
    );
}

export default DevItem;