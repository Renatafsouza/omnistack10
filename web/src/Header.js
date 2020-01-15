import React from 'react';

function Header(props) {  //props são as propriedades para ele passadas
    return <h1>{ props.title }</h1>;
}

export default Header;