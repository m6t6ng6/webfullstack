import React from 'react';
import './App.css';
import Hijo from './components/Hijo';
import Lista from './components/Lista';

function App() {
    //const numeroDeDia = 100;
    const persona = {
        nombre: "Juan",
        apellido: "Perez",
        edad: 33,
        domicilio: "Av. JB Justo 123"
    };
    const lista = [
        { id: 0, nombre: "monitor", cantidad: 160 },
        { id: 1, nombre: "teclado", cantidad: 1090 },
        { id: 2, nombre: "mouse", cantidad: 920 },
        { id: 3, nombre: "impresora", cantidad: 490 },
    ]
    const productos = [ "monitor", "teclado", "mouse", "impresora" ];
  return (
    <div className="App">
      <header className="App-header">
        <Hijo
            persona={persona}
            listaProductos={productos}
            //nombre={"Juan"} 
            //apellido={"Perez"}
            //edad={33}
            //cursando={true}
            //numeroDeDia={numeroDeDia}     
        />
        <Lista
            lista={lista}
        />
      </header>
    </div>
  );
}

export default App;
