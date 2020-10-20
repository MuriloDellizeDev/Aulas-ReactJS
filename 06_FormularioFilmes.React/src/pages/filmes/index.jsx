import React, { Component } from 'react';
import Menu from '../../components/menu';
import Jumbotron from '../../components/jumbotron';

class Filmes extends Component{
    
    constructor(){
        super();

        //Define os valores do State
        this.state = {

            url : 'https://5f83c1686b97440016f4e998.mockapi.io/api/filme',
            id : '',
            nome : '',
            categoria : '',
            ano : '',
            filmes : []
        }

    }

    componentDidMount(){

        this.listar();

    }

    listar(){

         fetch(this.state.url)
        .then(response => response.json()) 
            .then(dados => {

          //Altera o valor do State Filmes
          this.setState({filmes : dados});

          this.limparCampos()
          console.log(this.state.filmes);

          ;
        })
        .catch(err => console.error(err));

    }


    remover(event){

        event.preventDefault();

        console.log(event.target.value)

            fetch(this.state.url + '/' + event.target.value, {
  
              method : 'DELETE'
  
            })
            .then(response => response.json()) 
            .then(dados => {
  
                  alert('Filme Removido');
  
                  this.listar();
  
            })
            .catch(err => console.error(err));


        

    }


    editar(event){

        event.preventDefault();

        fetch(this.state.url + '/' + event.target.value, {

          method : 'GET'

        })
        .then(response => response.json()) 
        .then(dado => {

            console.log(dado);

            this.setState({id : dado.id});
            this.setState({nome : dado.nome});
            this.setState({categoria : dado.categoria});
            this.setState({lancamento : dado.lancamento});
        
             
        })
        .catch(err => console.error(err));

    }

    salvar(event){

        event.preventDefault();

            const filme = {
              nome : this.state.nome,
              categoria : this.state.categoria,
              lancamento : this.state.lancamento,
            }

            //if ternário, testa a condição, se é válida ? senão :
            let method = (this.state.id === "" ? 'POST' : 'PUT')
            let urlRequest = (this.state.id === "" ? this.state.url : this.state.url + '/' + this.state.id);

            fetch(urlRequest, {
                method : method,
                body : JSON.stringify(filme),
                headers : {
                    'content-type' : 'application/json'
                }
            })
            .then(response => response.json())
            .then(dado => {
              alert('Filme salvo')

              this.listar();
            })
            .catch(err => console.error(err))

    }

    limparCampos(){
       

        this.setState({id : ''});
            this.setState({nome : ''});
            this.setState({categoria : ''});
            this.setState({lancamento : ''});


    }
    render(){

        return(

            <div>

                <Menu/>
                <Jumbotron titulo='Filmes' descricao='Gerencie seus Filmes'/>

                    <div className="container">

                        <div className="bd-example" >

                        <form id="formFilme" onSubmit={this.salvar.bind(this)}>
                            <div className="form-group">
                            <label htmlFor="nome">Nome</label>
                            <input type="text" className="form-control" value={this.state.nome} onChange={e => { this.setState({nome : e.target.value})}} id="nome" aria-describedby="nome" placeholder="Informe o Nome"/>
                            </div>
                         <div className="form-group">
                            <label htmlFor="categoria">Categoria</label>
                            <input type="text" className="form-control" value={this.state.categoria} onChange={e => { this.setState({categoria : e.target.value})}} id="categoria" placeholder="Informe a Categoria"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="ano">Ano de Lançamento</label>
                                <input type="text" className="form-control small" value={this.state.lancamento} onChange={e => { this.setState({lancamento : e.target.value})}} id="lancamento" placeholder="Informe o Ano de Lançamento"/>
                            </div>
                            <button type="button" onClick={this.limparCampos.bind(this)} className="btn btn-secondary">Cancelar</button>
                            <button type="submit"  className="btn btn-success">Salvar</button>
                        </form>

                        <table className="table" style={{marginTop : '40px'}}>
                            <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Categoria</th>
                                <th scope="col">Ano Lançamento</th>
                                <th scope="col">Ações</th>
                                <th scope="col"><button type="reset" onClick={this.limparCampos.bind(this)} className="btn btn-primary" >Novo Filme</button></th>
                            </tr>
                            </thead>
                            <tbody id="tabela-lista-corpo">

                                {

                                    this.state.filmes.map((item, index) => {
                                        
                                        return(
                                       <tr key={index}>

                                           <td>{item.id}</td>
                                           <td>{item.nome}</td>
                                           <td>{item.categoria}</td>
                                           <td>{item.lancamento}</td>
                                            <td>
                                                <button type='button' onClick={this.remover.bind(this)} value={item.id} className='btn btn-danger'>Remover</button>
                                                <button type='button' onClick={this.editar.bind(this)} value={item.id} className='btn btn-warning'>Editar</button>

                                            </td>
                                       </tr>

                                        )   
                                    })

                                }

                            </tbody>
                        </table>
                    </div>
                </div>


            </div>

        )

    }

}

export default Filmes;