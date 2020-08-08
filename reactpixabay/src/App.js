import React, {Component} from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';
class App extends Component {
  // uno de los términos más importantes
  state = {
    termino : 'lul',
    imagenes : [],
    pagina: 0
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth', 'start');
  }

  paginaAnterior = () => {
    //leer el state de la página actual
    let pagina = this.state.pagina;
    // leer si la página es 1, ya no ir hacia atrás
    if(pagina === 1) return null;
    // Sumar uno a la página actual
    pagina--;
    // Agregar el cambio al state
    this.setState({
      pagina : pagina
    }, () =>{
      this.consultarApi();
      this.scroll();
    });
  }

  paginaSiguiente = () => {
    //leer el state de la página actual
    let pagina = this.state.pagina;
    // Sumar uno a la página actual
    pagina++;
    // Agregar el cambio al state
    this.setState({
      pagina : pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
  }

  consultarApi = () => {
    const termino = this.state.termino;
    const pagina = this.state.pagina;
    const url = `http://pixabay.com/api/?key=1732750-d45b5378879d1e877cd1d35a6&q=${termino}&per_page=30&page=${pagina}`;
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))
  }

  datosBusqueda = (termino) => {
    this.setState({
      termino : termino,
      pagina : 1
    }, () => {
      this.consultarApi();
    })
  }
  
  render() {
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de imágenes</p>
          <Buscador datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes={this.state.imagenes}
            paginaAnterior={this.paginaAnterior}
            paginaSiguiente={this.paginaSiguiente}
          />
        </div>
        {this.state.termino}
      </div>
    )
  }
}

export default App;
