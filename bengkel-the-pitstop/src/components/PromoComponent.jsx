import React, { Component } from "react";
import { Jumbotron, Container, Card } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Promo1 from '../assets/promo1.png'
import Promo2 from '../assets/promo2.png'
import Promo3 from '../assets/promo3.png'
import '../styles/PromoComponentStyle.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class PromoComponent extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            <div className="content">
                <Row className="promo-text-row">
                <div className="promo-text">
                    <Jumbotron fluid className="my-jumbo section-title">
                        <Container fluid>
                            <h1 className="display-3">Promo Terbaru</h1>
                            <p className="lead">Promo-promo menarik buat anda!</p>
                        </Container>
                    </Jumbotron>
                </div>
                <div className="promo-carousel">
                    <OwlCarousel className="owl-theme" items="1" center={true} loop={true} stagePadding={50}  autoWidth autoplay>
                        <div className="item">
                            <img src={Promo1} alt="promo1" className="promo-img">
                            </img>
                            <p>Test</p>
                        </div>
                        <div className="item">
                            <img src={Promo2} alt="promo2" className="promo-img">
                            </img>
                            <p>Test</p>
                        </div>
                        <div className="item">
                            <img src={Promo3} alt="promo3" className="promo-img">
                            </img>
                            <p>Test</p>
                        </div>
                        <div className="item">
                            <img src={Promo2} alt="promo3" className="promo-img">
                            </img>
                            <p>Test</p>
                        </div>
                        <div className="item">
                            <img src={Promo3} alt="promo3" className="promo-img">
                            </img>
                            <p>Test</p>
                        </div>
                        <div className="item">
                            <img src={Promo2} alt="promo3" className="promo-img">
                            </img>
                            <p>Test</p>
                        </div>
                    </OwlCarousel>
                </div>
                </Row>
        </div>
        );
    }
}
export default PromoComponent;