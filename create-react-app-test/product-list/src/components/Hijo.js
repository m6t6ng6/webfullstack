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
                <ul>
                    { listaProductos.map( (producto, index) => <li key={index}>{ producto }</li>)}
                </ul>
            </>
        )
    }    
}

export default Hijo;