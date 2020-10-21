import React from 'react';
import Menu from '../../components/menu';
import Rodape from '../../components/rodape';
import {Carousel, Jumbotron, Button, Container, Row , Col, Card} from 'react-bootstrap';


const Home = () => {

    return(


        <div>

            <Menu/>

            <Carousel>
                <Carousel.Item>

                    <img 
                        className="d-block w-100"
                        src="https://images6.alphacoders.com/465/thumb-1920-465680.jpg" 
                        alt="First Slide"
                        /> 

                </Carousel.Item>

                <Carousel.Item>

                    <img 
                        className="d-block w-100"
                        src="https://images5.alphacoders.com/104/thumb-1920-1043977.jpg" 
                        alt="First Slide"
                        /> 

                </Carousel.Item>

                <Carousel.Item>

                    <img 
                        className="d-block w-100"
                        src="https://images8.alphacoders.com/464/thumb-1920-464486.jpg" 
                        alt="First Slide"
                        /> 

                </Carousel.Item>
            </Carousel>

            <Jumbotron className="text-center">
                <h1>Diversos eventos em um único local.</h1>
                <p>Encontre eventos nos mais diversos segmentos de forma rápida</p>
                <p><Button variant="primary" href="/login">Login</Button><Button variant="warning" href="/cadastrar" style={{marginLeft: "10px"}}>Cadastrar-se</Button></p>
            </Jumbotron>

            <Container>
                <Row>
                    <Col>
                         <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://cio.com.br/wp-content/uploads/2019/08/8-tecnologias-que-vao-impactar-negocios-em-2020.jpg" />
                            <Card.Body>
                                <Card.Title>Tecnologia</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem laboriosam nulla deserunt delectus eveniet ipsa officia blanditiis error qui quod! Illum deserunt dicta aperiam libero animi impedit nam facilis debitis.
                                </Card.Text>
                                <Button variant="primary">Ir!</Button>
                            </Card.Body>
                        </Card> 
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.matematica.pt/images/faq/educacao.png" />
                            <Card.Body>
                                <Card.Title>Educação</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem laboriosam nulla deserunt delectus eveniet ipsa officia blanditiis error qui quod! Illum deserunt dicta aperiam libero animi impedit nam facilis debitis.
                                </Card.Text>
                                <Button variant="primary">Ir!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src="https://www.setting.com.br/wp-content/uploads/2019/02/inovacao-radical-e-inovacao-incremental_.jpg.jpg" />
                            <Card.Body>
                                <Card.Title>Inovação</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Exercitationem laboriosam nulla deserunt delectus eveniet ipsa officia blanditiis error qui quod! Illum deserunt dicta aperiam libero animi impedit nam facilis debitis.
                                </Card.Text>
                                <Button variant="primary">Ir!</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>

            <Rodape/>    

        </div>


    )



}

export default Home;