import React, { Component } from "react";
import "../styles/HomeComponentStyling.css"
import Carousel from 'react-bootstrap/Carousel'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'
import PitstopImage from "../assets/pitstop-lg.jpeg"
class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [],
            index : 0,

        }
    }
    
    handleSelect = e => {
      console.log(e)
    }
    
    render () {

        return (
          <div className = "content">
            <Row>
              <div className = "mycol col1">
                <Card className = "desc">
                  <Card.Body>
                    <Card.Title><h2>Bengkel The Pitstop</h2></Card.Title>
                    <ul>
                    <Card.Text>
                        <p className="card-subtitle mb-2 text-muted">BENGKEL SEGALA JENIS MOBIL</p>
                        <span> SERVICE MOBIL ASIA & EUROPE</span>
                      </Card.Text>
                    </ul>
                  </Card.Body>
                </Card>
                <div>
                  <img src = "https://www.fitnessfirst.com.au/assets/img/brand/ff-logo-large.png"></img>
                </div>
              </div>
              <div className = "mycol col2">
                <Carousel className = "myCarousel">
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src= {PitstopImage}                        alt="First slide"
                    />
                    <Carousel.Caption>
                      <h3>First Image</h3>
                      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src= {PitstopImage}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                      <h3>Second Image</h3>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                  </Carousel.Item>
                  <Carousel.Item>
                    <img
                      className="d-block w-100"
                      src= {PitstopImage}
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
            <hr/>
            <div>
              <h1>PROMO</h1>
              <p>Lorem Ipsum.</p>
            </div>
            <hr/>
            <div>
              <h1>Contact Us</h1>
              <p>Lorem Ipsum.</p>
            </div>
            <hr/>
            <div>
              <h1>Product</h1>
              <p>Lorem Ipsum.</p>
            </div>
          </div> 
        )}
}
export default HomeComponent;
