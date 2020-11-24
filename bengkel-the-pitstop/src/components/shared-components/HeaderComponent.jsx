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
            scrolling: false,
            className : ''
        }
        window.onScroll = function() {
            this.test();
        }

        this.componentDidMount = this.componentDidMount.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
        this.componentWillUnmount = this.componentWillUnmount(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll(event) {
        if (window.scrollY === 0 && this.state.scrolling === true) {
            this.setState({scrolling: false, className: 'nav-bar'});
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({scrolling: true, className: 'nav-bar scrolling'});
        }
    }



    render () {
        // const isUserloggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <Navbar variant="dark" className={this.state.className} expand="lg" > 
                
                    <div className="header-brand">
                        <Navbar.Brand href="/home"><img src={PitstopLogo} className="header-logo" alt = "Pitstop"></img></Navbar.Brand>
                        <Navbar.Brand href="/home"><img src={FordLogo} className="header-logo" alt = "Ford"></img></Navbar.Brand>
                        <Navbar.Brand href="/home"><img src={MahindraLogo} className="header-logo" alt = "Mahindra"></img></Navbar.Brand>
                    </div>
                    <button className="navbar-toggler x" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <Navbar.Collapse id="navbarsExample05">
                        <Nav className = "mr-auto">
                            <Nav.Link href="/home" className="nav-item active"> <span className="sr-only">(current)</span>HOME</Nav.Link>
                            <Nav.Link href="/home" className="nav-item">PRODUCTS</Nav.Link>
                            <Nav.Link href="/home" className="nav-item">CONTACT US</Nav.Link>
                            <Nav.Link href="/home" className="nav-item">FAQ</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);
