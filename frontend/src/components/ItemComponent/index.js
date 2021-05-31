import React from 'react';

function ItemComponent({name, status}) {
  return (
    <li>{name} - Status: {status ? <b style={{color: 'green'}}>Finalizado</b> : <b style={{color: 'red'}}>Pendente</b>}</li>
  )
}

export default ItemComponent;