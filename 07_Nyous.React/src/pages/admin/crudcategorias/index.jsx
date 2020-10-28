import React, {useEffect, useState} from 'react';
import { Card, Container, Form, Button, Table } from 'react-bootstrap';
import Menu from '../../../components/menu';
import Rodape from '../../../components/rodape';
import Titulo from '../../../components/titulo';
import {url} from '../../../utils/constants'

const CrudCategorias = () => {

    const [ id, setId ] = useState(0);
    const [ nome, setNome ] = useState('');
    const [ urlImagem, setUrlImagem ] = useState('');
    const [ categoria, setCategorias ] = useState([]);

    useEffect(() => {
        listar();
    }, [])

    const listar = () => {

        fetch(`${url}/categorias`)
            .then(response => response.json()) 
            .then(dados => {

                setCategorias(dados)
                
                limparCampos();
                
            })
            .catch(err => console.error(err));

    }

    const salvar = (event) => {
        event.preventDefault();

        const categoria = {
            nome : nome,
            urlImagem : urlImagem,
          }

          //if ternário, testa a condição, se é válida ? senão :
          let method = (id === 0 ? 'POST' : 'PUT')
          let urlRequest = (id === 0 ? `${url}/categorias` : `${url}/categorias/${id}`);

          fetch(urlRequest, {
              method : method,
              body : JSON.stringify(categoria),
              headers : {
                  'content-type' : 'application/json',
                  'authorization' : 'Bearer ' + localStorage.getItem('token-nyous-tarde')

              }
          })
          .then(response => response.json())
          .then(dado => {
            alert('Categoria salvo')

            listar();
          })
          .catch(err => console.error(err))
    }

    const uploadFile = (event) => {
        event.preventDefault();

        //Formulário para envio de arquivos.
        let formData = new FormData();
        formData.append("arquivo", event.target.files[0]); 

        if(event.target.files[0].lenght > 1288){
            alert('Tamanho maio que o permitido');
            return;
        }

        fetch(`${url}/upload`, 
        {
            method: "POST",
            body: formData
        })
        .then(response => response.json())
        .then(data => {

            setUrlImagem(data.url);

        })
        .catch(err => alert(err + ". Mande um email para a nossa equipe de suporte: event.suport@gmail.com"));
    }
    
    const editar = (event) => {

        event.preventDefault();

        console.log(event.target.value);

    }

    const remover = (event) => {
        event.preventDefault();

        fetch(url + "/categorias/"  + event.target.value, { 
            method: "DELETE",
            headers: {
                "authorization": "Bearer " + localStorage.getItem("token-nyous-tarde")
            }
        })
        .then(response => response.json())
        .then(response => {
            alert("Categoria deletado com sucesso.");
            listar(); 
        })
        .catch(err => console.error(err))

    }

    const limparCampos = () => {

        setId(0);
        setNome('');
        setUrlImagem('');

    }

    return(

        <div>

            <Menu/>

            <Container>

                <Titulo titulo='Categoria' chamada='Gerencie as Categorias do sistema'/>

             <Card>
                 <Card.Body>
                    <Form onSubmit={ event => salvar(event)}>
                       <Form.Group controlId='formNome'>
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type='text' value={nome} onChange={event => setNome(event.target.value)}/>
                       </Form.Group>
  
                       <Form.Group controlId='formNome'>
                           <Form.File id="fileCategoria" label="Imagem da Categoria" onChange={event => uploadFile(event)} />
                            {urlImagem && <img src={urlImagem} style={{width : '120px'}}/> }
                       </Form.Group>

                       <Button type='submit'>Salvar</Button>

                    </Form>  
                 </Card.Body>
             </Card>  
            <Table bordered>
            <thead>
                 <tr>
                    <th>Imagem</th>
                    <th>Nomes</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {
                    categoria.map((item, index) => {
                        return(
                        <tr key={index} >
                            <td><img src ={item.urlImagem} style={{width : '50px'}}/></td>
                            <td>{item.nome}</td>
                            <td>
                                <Button type='button' onClick={event => editar(event)} value={item.id} style={{marginRight : "30px"}} variant='warning' >Editar</Button>
                                <Button type='button' onClick={event => remover(event)} value={item.id} variant='danger'>Remover</Button>
                            </td>
                        </tr>
                        )
                    })
                }
            </tbody>
            </Table>
            </Container>

            <Rodape/>

        </div>
    )

}

export default CrudCategorias;