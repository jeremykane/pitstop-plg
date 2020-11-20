import React, { Component } from "react";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import Promo1 from '../assets/promo1.png'
import Promo2 from '../assets/promo2.png'
import Promo3 from '../assets/promo3.png'

class PromoComponent extends Component {
    render() {
        return (
            <div>
                <OwlCarousel className="owl-theme" items="2" autoplay nav>
                    <div className="item">
                        <img src={Promo1} alt="promo1">
                        </img>
                        <p>Test</p>
                    </div>
                    <div className="item">
                        <img src={Promo2} alt="promo2">
                        </img>
                        <p>Test</p>
                    </div>
                    <div className="item">
                        <img src={Promo3} alt="promo3">
                        </img>
                        <p>Test</p>
                    </div>
                </OwlCarousel>
            </div >

        );
    }
}
export default PromoComponent;