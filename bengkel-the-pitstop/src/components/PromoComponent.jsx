import React, { Component } from "react";
import { Jumbotron, Container, Card, Media } from 'reactstrap';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Promo1 from '../assets/promo1.png'
import Promo2 from '../assets/promo2.png'
import Promo3 from '../assets/promo3.png'
import Promo4 from '../assets/promo1.png'
import '../styles/PromoComponentStyle.css'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import MediaQuery from 'react-responsive'
class PromoComponent extends Component {
    constructor() {
        super();
        this.state = {
            numberOfPromo: 1
        }
    }
    
    PromoCarousel(e){
        return(
                <OwlCarousel className="owl-theme" items={e} loop={true} stagePadding={0} autoplay>
                    <div className="item">
                        <img src={Promo1} alt="promo1" className="promo-img">
                        </img>
                    </div>
                    <div className="item">
                        <img src={Promo2} alt="promo2" className="promo-img">
                        </img>
                    </div>
                    <div className="item">
                        <img src={Promo3} alt="promo3" className="promo-img">
                        </img>
                    </div>
                    <div className="item">
                        <img src={Promo4} alt="promo3" className="promo-img">
                        </img>
                    </div>
                    <div className="item">
                        <img src={Promo3} alt="promo3" className="promo-img">
                        </img>
                    </div>
                    <div className="item">
                        <img src={Promo2} alt="promo3" className="promo-img">
                        </img>
                    </div>
                </OwlCarousel>
        )
    }
    render() {
        return (
            <div className="content">
                <Row className="promo-text-row">
                <div className="promo-text">
                    <Jumbotron fluid className="my-jumbo section-title">
                        <Container fluid>
                            <h1 className="display-3">Latest Promo</h1>
                            <p className="lead">Promo-promo menarik buat anda!</p>
                        </Container>
                    </Jumbotron>
                </div>
                <div className="promo-carousel">
                    <MediaQuery maxWidth={576}>
                        {this.PromoCarousel(1)}
                    </MediaQuery>
                    <MediaQuery minWidth={576} maxWidth={1699}>
                        {this.PromoCarousel(2)}
                    </MediaQuery>
                    <MediaQuery minWidth={1700}>
                        {this.PromoCarousel(3)}
                    </MediaQuery>
                    
                    
                </div>
                </Row>
        </div>
        );
    }
}
export default PromoComponent;