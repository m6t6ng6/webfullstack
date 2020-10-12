import React from 'react';
import './App.css';
import Hijo from './components/Hijo';
import Lista from './components/Lista';
import Persona from './components/Persona';
import Input from './components/Input';
import Lista2 from './components/Lista2';

class App extends React.Component {

    valoresIniciales = [
      { id: 0, nombre: "monitor", cantidad: 160 },
      { id: 1, nombre: "teclado", cantidad: 1090 },
      { id: 2, nombre: "mouse", cantidad: 920 },
      { id: 3, nombre: "impresora", cantidad: 490 },
    ]

    constructor() {
      super();
      this.state = {
        showPersona: true,
        otroEstado: "Estado de muestra",
        todo: [],
        producto: "",
        cantidad: 0,
        productos: this.valoresIniciales
      }
    }

    showPersona = true;
    //const numeroDeDia = 100;
    persona = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 33,
        domicilio: "Av. JB Justo 123"
    };
    lista = [
        { id: 0, nombre: "monitor", cantidad: 160 },
        { id: 1, nombre: "teclado", cantidad: 1090 },
        { id: 2, nombre: "mouse", cantidad: 920 },
        { id: 3, nombre: "impresora", cantidad: 490 },
    ]
    productos = [ "monitor", "teclado", "mouse", "impresora" ];

    handleClick = () => {
      if ( this.state.showPersona === true ) {
        //this.state.showPersona = false;
        this.setState({ showPersona: false })
        this.setState({ otroEstado: "false" })
      } else {
        //this.state.showPersona = true;
        this.setState({ showPersona: true })
        this.setState({ otroEstado: "true" })
      }
      console.log("showPersona: ", this.state.showPersona);
    }

    agregarItemLista = ( evento ) => {
      const { producto, cantidad } = this.state;
      const { productos } = this.state;
      const productoNuevo = {
        id: this.state.productos.length + 1,
        nombre: producto,
        cantidad: cantidad 
      }
      this.setState({ productos: [...this.state.productos, productoNuevo] });
    }

    handleChange = ( evento ) => {
      const {name, value} = evento.target;
      this.setState({ [name]: value });
    }

    render() {
      return (
        <div className="App">
          <header className="App-header">
            <Input/>
            <button onClick={this.agregarItemLista}>Añadir a la lista</button>
            <p>Producto</p>
            <input type="text" onChange={ this.handleChange } name="producto" value={ this.state.producto } />
            <p>Cantidad</p>
            <input type="number" onChange={ this.handleChange } name="cantidad" value={ this.state.cantidad } />
            <button onClick={this.agregarItemLista}>Agregar</button>
            <Lista2
              lista={this.state.todo}
            />
            <Hijo
              //persona={persona}
              listaProductos={this.productos}
              //nombre={"Juan"} 
              //apellido={"Perez"}
              //edad={33}
              //cursando={true}
              //numeroDeDia={numeroDeDia}     
            />
            <Lista
              //lista={this.lista}
              lista={this.state.productos}
            />
            <p>{ this.state.otroEstado}</p>
            <button onClick={this.handleClick}>Toggle</button>
            <Persona
              persona={this.persona} isShow={this.state.showPersona}
            />
          </header>
        </div>
      );
    }
}

export default App;
