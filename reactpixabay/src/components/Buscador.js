import React, { Component } from 'react';
// import React from 'react';
// class Buscador extends React.Component {

class Buscador extends Component {
    //state = {}
    // ref nos permite leer los valores de los inputs con react
    // le tienes que decir dónde usarlo
    busquedaRef = React.createRef();

    // ellos recomiendan handle como nombre
    obtenerDatos = (e) => {
        // previene la acción por default del formulario, si le das a buscar, previene el texto url
        e.preventDefault();

        //leer el ref, nombre del ref, current y value para leer un ref!
        console.log(this.busquedaRef.current.value);
    }

    // el único método obligatorio en cada componente, dice que se imprime en cada componente
    render() {
        return ( 
            <form onSubmit={this.obtenerDatos}>
                <div className="row">
                    <div className="form-group col-md-8">
                        <input ref={this.busquedaRef} type="text" className="form-control form-control-lg" 
                        placeholder="Busca tu img" />
                    </div>
                    <div className="form-group col-md-4">
                        <input type="submit" className="btn btn-lg btn-danger btn-block" value="buscar"/>
                    </div>
                </div>
            </form>
        );
    }
}

// como seria en js -> document.querySelector('form').addEventListener('submit', function({}))

export default Buscador;