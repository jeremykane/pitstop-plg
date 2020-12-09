import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Jumbotron, Container, Card } from 'reactstrap';
import BackgroundImage1 from "../assets/bg-img-1.jpg"
import BackgroundImage2 from "../assets/bg-img-2.jpg"
import BackgroundImage3 from "../assets/bg-img-3.jpg"
import "../styles/ProductsComponentStyle.css"

class ProductsComponent extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return (
            <div className="content">
                <Row>
                    <Jumbotron fluid className="my-jumbo section-title" id="products-title">
                            <Container fluid>
                                <h1 className="display-3">Our Products</h1>
                                <p className="lead">Produk-produk yang kami miliki!</p>
                            </Container>
                    </Jumbotron>
                </Row>
                <Row className="products-row">                    
                    <Col className = "products-col">
                    <div className="flip-container">
                        <div className="flipper">
                            <div className="front" id="ford-card">
                                FORD
                            </div>
                            <div className="back">
                                Hello From the Back
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col className = "products-col"> 
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front" id="mahindra-card">
                                    MAHINDRA
                                </div>
                                <div className="back">
                                    Hello From the Back
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className = "products-col">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front"  id="service-card">
                                    SERVICE
                                </div>
                                <div className="back">
                                    Hello From the Back
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className = "products-col">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front" id="sparepart-card">
                                    SPAREPART
                                </div>
                                <div className="back">
                                    Hello From the Back
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                
            </div>
        );
    }
}

export default ProductsComponent;