import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import FordLogo from "../../assets/Ford_logo.png"
import MahindraLogo from "../../assets/Mahindra-logo.png"
import "../../styles/HeaderComponentStyling.css"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render () {
        // const isUserloggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <Navbar variant="light" className="nav-bar">
                    <div className="header-brand">
                        <Navbar.Brand href="/home"><h1>The Pitstop</h1></Navbar.Brand>
                        <Navbar.Brand href="/home"><img src={FordLogo} className="header-logo"></img></Navbar.Brand>
                        <Navbar.Brand href="/home"><img src={MahindraLogo} className="header-logo"></img></Navbar.Brand>
                    </div>
                    <Nav className="mr-auto" >
                      <Nav.Link href="/home" className="nav-bar-button">Home</Nav.Link>
                    </Nav>

                    <Nav className="navbar-right">
                        test
                    </Nav>
                </Navbar>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);
