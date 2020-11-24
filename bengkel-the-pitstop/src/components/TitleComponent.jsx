import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import { Jumbotron, Container, Card } from 'reactstrap';
import BackgroundImage1 from "../assets/bg-img-1.jpg"
import BackgroundImage2 from "../assets/bg-img-2.jpg"
import BackgroundImage3 from "../assets/bg-img-3.jpg"
import BackgroundSlideshow from 'react-background-slideshow'
import "../styles/HomeComponentStyling.css"

class TitleComponent extends Component {
    render() {
        return (
            <div className="myrow">
                <div className="section">
                    <div className="overlay">
                        <div className="text-overlay">
                            <div className="content">
                                <Row className="myrow">
                                    <div className="mycol col1">
                                        <Jumbotron fluid className="my-jumbo">
                                            <Container fluid>
                                                <h1 className="display-3">BENGKEL THE PITSTOP</h1>
                                                <hr className="my-2" />
                                                <p className="lead">All Solution for your car!</p>
                                            </Container>
                                        </Jumbotron>
                                    </div>
                                    <div className="mycol col2">
                                        <Card>
                                            <h1>a</h1>
                                        </Card>
                                    </div>
                                </Row>
                            </div>
                            
                        </div>
                        <div className="img-overlay>">
                            <Carousel className="my-carousel">
                                <Carousel.Item>
                                    <img
                                    className="carousel-img"
                                    src={BackgroundImage1} alt="First slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>First Image</h3>                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                    className="carousel-img"
                                    src={BackgroundImage2}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Second Image</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>                        <Carousel.Item>
                                    <img
                                    className="carousel-img"
                                    src={BackgroundImage3}
                                    alt="Third slide"
                                    />
                                    <Carousel.Caption>
                                    <h3>Third Image</h3>
                                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TitleComponent;