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
                <Jumbotron fluid className="my-jumbo section-title">
                    <Container fluid>
                        <h1 className="display-3">Our Products</h1>
                        <p className="lead">Produk-produk yang kami miliki!</p>
                    </Container>
                </Jumbotron>
                <Row className="products-row">                    
                    <Col className = "products-col">
                    <div className="flip-container">
                        <div className="flipper">
                            <div className="front" id="ford-card">
                                <h1 className="flipper-title">FORD</h1>
                            </div>
                            <div className="back">
                                <h3 className="flipper-desc">HELLO FROM THE BACK</h3>
                            </div>
                        </div>
                    </div>
                    </Col>
                    <Col className = "products-col"> 
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front" id="mahindra-card">
                                    <h1 className="flipper-title">MAHINDRA</h1>
                                </div>
                                <div className="back">
                                    <h3 className="flipper-desc">HELLO FROM THE BACK</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className = "products-col">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front"  id="service-card">
                                    <h1 className="flipper-title">SERVICE</h1>
                                </div>
                                <div className="back">  
                                    <h3 className="flipper-desc">HELLO FROM THE BACK</h3>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className = "products-col">
                        <div className="flip-container">
                            <div className="flipper">
                                <div className="front" id="part-card">
                                    <h1 className="flipper-title">SPAREPART</h1>
                                </div>
                                <div className="back">
                                    <h3 className="flipper-desc">HELLO FROM THE BACK</h3>
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