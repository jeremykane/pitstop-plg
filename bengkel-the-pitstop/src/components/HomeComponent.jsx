import React, { Component } from "react";
import "../styles/HomeComponentStyling.css"
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import { Jumbotron, Container } from 'reactstrap';
import PitstopImage from "../assets/pitstop-lg.jpeg"
import PitstopLogo from "../assets/images.jpg"
import { Nav } from "react-bootstrap";
class HomeComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: [],
      index: 0,

    }
  }

  handleSelect = e => {
    console.log(e)
  }

  render() {

    return (
      <div className="wrapper">
        <div className="myrow">
          <div className="section">
            <Row>
              <div className="mycol col1">
                <Jumbotron fluid>
                  <Container fluid>
                    <h1 className="display-3">BENGKEL THE PITSTOP</h1>
                    <hr className="my-2" />
                    <p className="lead">All Solution for your car!</p>
                  </Container>
                </Jumbotron>
              </div>
              <div className="mycol col2">
                <Carousel className="myCarousel">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={PitstopImage} alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First Image</h3>                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={PitstopImage}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Second Image</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>                        <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src={PitstopImage}
                      alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Third Image</h3>
                      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                </Carousel>
              </div>
            </Row>
          </div>
        </div>
        <hr />
        <div>
        </div>
        <div id="promo">
          <h1>PROMO</h1>
          <p>Lorem Ipsum.</p>
        </div>
        <hr />
        <div>
          <h1>OUR PRODUCTS</h1>
          <p>Lorem Ipsum.</p>
        </div>
        <hr />
        <div>
          <h1>CONTACT US</h1>
          <p>Lorem Ipsum.</p>
        </div>
        <div>
          <h1>FAQ</h1>
          <p>Lorem Ipsum.</p>
        </div>
      </div>
    )
  }
}
export default HomeComponent;
