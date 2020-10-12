import React from 'react';

class Lista2 extends React.Component
{
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const { lista } = this.props;

        let cantidadMinima = 100;
        
        let comparacion = lista.filter( producto => producto.cantidad > cantidadMinima );

        return (
            <>
                <h5>No mostrar los productos con cantidad menor a: { cantidadMinima }</h5>
                <ul>
                    { comparacion.map( producto => <li key={producto.id}>{ "nombre: " + producto.nombre + ", cantidad: " + producto.cantidad }</li> ) }
                </ul>
            </>
        )
    }
}
    
export default Lista2;