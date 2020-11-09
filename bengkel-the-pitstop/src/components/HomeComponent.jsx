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
                <h1> Bengkel The Pitstop </h1>
                <ul>
                  <li>
                    <div>
                      <p>
                        <strong> BENGKEL SEGALA JENIS MOBIL </strong>
                        <span> Jl. Letjen Harun Sohar No. 9 (Simpang Bandara SMB II) </span>
                      </p>
                    </div>

                    <div>
                      <p>
                        <span>
                          <strong> Phone:</strong> (0711) 5710200 / 082175311779
                          <strong> Instagram:</strong> @bengkelthepitstop
                          <strong> Link Ford-RMA:</strong> <a href="http://ford-rma.co.id/id/pusat-layanan-ford-resmi/">http://ford-rma.co.id/id/pusat-layanan-ford-resmi/</a>

                        </span>
                      </p>
                    </div>

                    <a> BENGKEL SEGALA JENIS MOBIL </a>
                  </li>
                  <li>
                    <a> Reservasi Service : </a>
                    <p> Jl. Letjen Harun Sohar No. 9
                    (Simpang Bandara SMB II)
                    Palembang
                    (0711) 5710200 / 082175311779</p>
                  </li>
                  <li>
                    <a href="https://ford-rma.co.id/id/pusat-layanan-ford-resmi">ford rma</a>
                  </li>
                </ul>
                BENGKEL THE PITSTOP
Reservasi Service :
Jl. Letjen Harun Sohar No. 9
(Simpang Bandara SMB II)
Palembang
(0711) 5710200 / 082175311779
ford-rma.co.id/id/pusat-layanan-ford-resmi
            </div>
        )}
}
export default HomeComponent;
