import React, { Component } from "react";
import "../styles/HomeComponentStyling.css"
import PromoComponent from "./PromoComponent";
import TitleComponent from "./TitleComponent";
import ProductsComponent from "./ProductsComponent";
import ContactUsComponent from "./ContactUsComponent"
import FAQComponent from "./FAQComponent"
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
        <div id="title">
          <TitleComponent/>
        </div>
        <hr/>
        <div id="promo">
          <PromoComponent/>
        </div>
        <hr />
        <div id="products">
          <ProductsComponent/>
        </div>
        <hr />
        <div>
          <ContactUsComponent/>
        </div>
        <hr />
        <div>
          <FAQComponent/>
        </div>
      </div>
    )
  }
}
export default HomeComponent;
