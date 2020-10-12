import React from 'react';

function Persona( props ) {
    const { persona, isShow } = props;

    if ( isShow === true ) {
        return (
            <>
                <h2>Hola { persona.nombre + " " + persona.apellido } </h2>
                <h3>Edad: { persona.edad }</h3>
                <h3>Persona: { persona.domicilio } </h3>
            </>
        )
    } else {
        return (
            <>
            </>
        )
    }
}

export default Persona;