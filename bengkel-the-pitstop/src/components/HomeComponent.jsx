import React, { Component } from "react";
import "../styles/HomeComponentStyling.css"

class HomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data : [],
            displayClosest: false,
            distanceCalculated: false
        }
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
                </div>
                <div className = "mycol col2">
                </div>
              </div>
            </div>
          </div>
            
        )}
}
export default HomeComponent;
