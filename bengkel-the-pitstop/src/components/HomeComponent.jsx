import React, { Component } from "react";
import "../styles/HomeComponentStyling.css"
import { Nav } from "react-bootstrap";
import PromoComponent from "./PromoComponent";
import TitleComponent from "./TitleComponent";
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
      <div className="home">
        <TitleComponent/>
        <hr/>
        <div>
        </div>
        <div id="promo">
          <h1>PROMO</h1>
          <p>Lorem Ipsum.</p>
          <PromoComponent/>
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
