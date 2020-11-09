import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
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
                    <Navbar.Brand href="/home">The Pitstop</Navbar.Brand>
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
