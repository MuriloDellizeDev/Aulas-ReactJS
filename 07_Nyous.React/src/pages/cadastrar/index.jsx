import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import { Container, Form, Button } from 'react-bootstrap';
import './index.css'

const Cadastrar = () => {

    return(

        <div>
            <Menu/>
            <Container className='form-height'>
                    <Form className='form-signin'>
                        <div className="textCenter">

                        </div>
                        <br/>
                        <small>Informe os dados abaixo</small>
                        <hr/>
                        
                         <Form.Group controlId='formBasicEmail'>

                            <Form.Label> Nome </Form.Label>
                            <Form.Control type='text' placeholder='Informe seu Nome completo' required></Form.Control>

                        </Form.Group>

                        <Form.Group controlId='formBasicEmail'>

                            <Form.Label> Email </Form.Label>
                            <Form.Control type='email' placeholder='Informe seu email' required></Form.Control>

                        </Form.Group>

                        <Form.Group controlId='formBasicPassword'>

                            <Form.Label> Senha </Form.Label>
                            <Form.Control type='password' placeholder='Informe sua senha' required ></Form.Control>

                        </Form.Group>

                        <Button style={{ marginBottom : '20px'}} variant='primary' type='submit'>
                            Enviar                            
                        </Button>
                        <br/>

                        <a href= '/login'>Já tenho conta</a>

                    </Form>
            
            </Container>
            <Rodape/>
        </div>

    )

}

export default Cadastrar;