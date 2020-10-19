import React, { Component } from 'react';
import './index.css'

//Titulo herda as propriedades de Component assim dando para trabalhar com as props = propriedades
class Titulo extends Component{

    constructor(){

        super();

    }
    render(){

        return(

            <div className='cor'>

                <h1> {this.props.texto} </h1>
                <p>  {this.props.descricao || 'Não passou a descrição'}</p>
                                            {/* Verifica se a descrição foi passada || = nula */}
            </div>
        )

    }

}

export default Titulo