import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import { Jumbotron, Container } from 'reactstrap';
import BackgroundImage1 from "../assets/bg-img-1.jpg"
import BackgroundImage2 from "../assets/bg-img-2.jpg"
import BackgroundImage3 from "../assets/bg-img-3.jpg"
import FordLogo from "../assets/Ford_logo.png"
import MahindraLogo from "../assets/Mahindra-logo.png"
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
                                        <Jumbotron fluid className="my-jumbo" id="title">
                                            <Container fluid>
                                                <h1 className="display-3">BENGKEL THE PITSTOP</h1>
                                                <hr className="my-2" />
                                                <span>
                                                    <p className="lead">Partnered with:</p>
                                                    <img src={FordLogo} className="car-logo" alt="Ford"></img>
                                                    <img src={MahindraLogo} className="car-logo" alt="Mahindra"></img>
                                                </span>
                                            </Container>
                                        </Jumbotron>
                                    </div>
                                </Row>
                            </div>

                        </div>
                        <div className="img-overlay>">
                            <Carousel className="my-carousel" interval={5000}>
                                <Carousel.Item>
                                    <img
                                        className="carousel-img"
                                        src={BackgroundImage1} alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="carousel-img"
                                        src={BackgroundImage2}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>                        <Carousel.Item>
                                    <img
                                        className="carousel-img"
                                        src={BackgroundImage3}
                                        alt="Third slide"
                                    />
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
