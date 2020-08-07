// componente principal
// con props comunicas tus componentes
import React from 'react';
import Buscador from './components/Buscador';
import { render } from '@testing-library/react';

//{} => en react significa código de js
const datosBusqueda = (termino) => {
  console.log(termino);
}
function App() {

  // pasar de hijo a padre
  
  return (
    <div className="app container">
      <div className="jumbotron">
        <p className="lead text-center">Buscador de Imágenes</p>

        {/*mensaje es un prop, para pasar de padre a hijo, le puedes pasar un string ="Busqu  eda..." o una función que tome un argumento*/}
        <Buscador 
        datosBusqueda={this.datosBusqueda}/>

      </div>
    </div>
  );
  
}

export default App;
