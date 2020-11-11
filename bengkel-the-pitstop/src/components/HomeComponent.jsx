import React, { Component } from "react";
import "../styles/HomeComponentStyling.css"
import Carousel from 'react-bootstrap/Carousel'
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
          <div>
            <div className = "content">
              <div className = "row">
                <div className = "mycol col1">
                  <div className = "card desc">
                    <div className = "card-body">
                      <h2 className = "card-title">Bengkel The Pitstop </h2>
                      <ul>
                        <div className = "card-text">
                          <p className="card-subtitle mb-2 text-muted">BENGKEL SEGALA JENIS MOBIL</p>
                          <span> Jl. Letjen Harun Sohar No. 9 (Simpang Bandara SMB II) </span>
                        </div>
                        <div>
                          <p className = "card-text">
                            <span>
                              <strong> Phone:</strong> (0711) 5710200 / 082175311779
                              <strong> Instagram:</strong> @bengkelthepitstop
                              <strong> Link Ford-RMA:</strong> <a href="http://ford-rma.co.id/id/pusat-layanan-ford-resmi/">http://ford-rma.co.id/id/pusat-layanan-ford-resmi/</a>
                            </span>
                          </p>
                        </div>
                      </ul>
                    </div>
                  </div>
                  <div>
                    <img src = "https://www.fitnessfirst.com.au/assets/img/brand/ff-logo-large.png"></img>
                  </div>
                </div>
                <div className = "mycol col2">
                  <Carousel className = "myCarousel">
                    <Carousel.Item>
                      <img
                        className="d-block w-100"
                        src= {PitstopImage}
                        alt="First slide"
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
              </div>
              <hr/>
              <div>
              
              </div>
            </div>
          </div>
            
        )}
}
export default HomeComponent;
