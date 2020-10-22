import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import jwt_decode from "jwt-decode";
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container, Form, Button } from 'react-bootstrap';
import './index.css'

const Login = () => {

    const history = useHistory();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = (event) => {

        event.preventDefault();

        fetch('http://localhost:62602/api/account/login',{

            method : 'POST',
            body : JSON.stringify({

                email : email,
                senha : senha

            }),
            headers : {

                'content-type' : 'application/json'
            }

        })
        .then(response => {

            if(response.ok === true){

                return response.json();

            }
            alert('dados invalidos');

        })
        .then(data => {

            localStorage.setItem('token-nyous-tarde', data.token);

            let usuario = jwt_decode(data.token);

            console.log(usuario);

            if(usuario.role === 'Admin'){

                history.push('/admin/dashboard');

            }
            else{

                history.push('/eventos');

            }
          
        })
        .catch(err => console.error(err));

    }

    return(

        <div>
            <Menu/>
            <Container className='form-height'>
                    <Form className='form-signin' onSubmit={ event => logar(event)}>
                        <div className="textCenter">

                        </div>
                        <br/>
                        <small>Informe os dados abaixo</small>
                        <hr/>

                        <Form.Group controlId='formBasicEmail'>

                            <Form.Label> Email </Form.Label>
                            <Form.Control type='email' value={email} onChange={ event => setEmail(event.target.value)} placeholder='Informe seu email' required></Form.Control>

                        </Form.Group>

                        <Form.Group controlId='formBasicPassword'>

                            <Form.Label> Senha </Form.Label>
                            <Form.Control type='password' value={senha} onChange={ event => setSenha(event.target.value)} placeholder='Informe sua senha' required ></Form.Control>

                        </Form.Group>

                        <Button style={{ marginBottom : '20px'}} variant='primary' type='submit'>
                            Enviar                            
                        </Button>
                        <br/>

                        <a href= '/cadastrar'>Não tenho conta</a>

                    </Form>
            
            </Container>
            <Rodape/>
        </div>

    )

}

export default Login;