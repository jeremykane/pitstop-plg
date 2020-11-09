import React, { Component } from "react";

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
            <div className = "content">
              <div className = "card">
                <div className = "card-body">
                  <h1 className = "card-title"> Bengkel The Pitstop </h1>
                  <ul>
                    <li>
                      <div>
                        <p className = "card-text">
                          <strong> BENGKEL SEGALA JENIS MOBIL </strong>
                          <span> Jl. Letjen Harun Sohar No. 9 (Simpang Bandara SMB II) </span>
                        </p>
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
                    </li>
                  </ul>
                </div>
              </div>
            </div>
        )}
}
export default HomeComponent;
