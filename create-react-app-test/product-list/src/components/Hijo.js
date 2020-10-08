import React from 'react';

class Hijo extends React.Component
{
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        //const { nombre, apellido, edad, persona } = this.props;
        const { persona } = this.props;
        const { listaProductos } = this.props;
        return (
            <>
                <h2>Hola { persona.nombre + " " + persona.apellido } </h2>
                <h3>Edad: { persona.edad }</h3>
                <h3>Persona: { persona.domicilio } </h3>
                
                <ul>
                    { listaProductos.map( (producto, index) => <li key={index}>{ producto }</li>)}
                </ul>
            </>
        )
    }    
}

export default Hijo;