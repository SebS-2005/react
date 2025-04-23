import React from 'react';
import logo from '../logo.svg';

function Home() {
  return (
    <main style={{ padding: '20px' }}>
      <h1>Proyecto Integrador</h1>
      <img src={logo} alt="Proyecto" style={{ width: '200px' }} />
      <p>Este es el proyecto integrador de mi curso de desarrollo web usando React.</p>
      <ul>
        <li>Funcionalidad 1</li>
        <li>Funcionalidad 2</li>
        <li>Funcionalidad 3</li>
      </ul>
    </main>
  );
}

export default Home;
