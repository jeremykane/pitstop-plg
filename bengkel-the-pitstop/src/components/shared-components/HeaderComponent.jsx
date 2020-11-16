import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import FordLogo from "../../assets/Ford_logo.png"
import MahindraLogo from "../../assets/Mahindra-logo.png"
import PitstopLogo from "../../assets/images.jpg"
import "../../styles/HeaderComponentStyling.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.test()
    }

    test(){
        // document.getElementById("test").innerHTML = "value";
    }
    render () {
        // const isUserloggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <Navbar variant="light" className="nav-bar" expand="lg">
                    <div className="header-brand">
                        <Navbar.Brand href="/home"><img src={PitstopLogo} className="header-logo" alt = "Pitstop"></img></Navbar.Brand>
                        <Navbar.Brand href="/home"><img src={FordLogo} className="header-logo" alt = "Ford"></img></Navbar.Brand>
                        <Navbar.Brand href="/home"><img src={MahindraLogo} className="header-logo" alt = "Mahindra"></img></Navbar.Brand>
                    </div>
                    <Nav className="mr-auto" >
                      
                    </Nav>

                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <Nav.Link href="/home" className="nav-bar-button">Home</Nav.Link>
                        <Nav.Link href="/home" className="nav-bar-button">Products</Nav.Link>
                        <Nav.Link href="/home" className="nav-bar-button">Contact Us</Nav.Link>
                        <Nav.Link href="/home" className="nav-bar-button">FAQ</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);
