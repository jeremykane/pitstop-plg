import React, { Component } from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { withRouter } from "react-router-dom";
import FordLogo from "../../assets/Ford_logo.png"
import MahindraLogo from "../../assets/Mahindra-logo.png"
import PitstopLogo from "../../assets/pitstop-logo.png"
import "../../styles/HeaderComponentStyling.css"
import { Link } from 'react-scroll'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faUser, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

class HeaderComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scrolling: false,
            className: '',
            headerBrand: 'header-brand'
        }
        window.onScroll = function () {
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
            this.setState({ scrolling: false, className: 'nav-bar', headerBrand: 'header-brand' });
        }
        else if (window.scrollY !== 0 && this.state.scrolling !== true) {
            this.setState({ scrolling: true, className: 'nav-bar scrolling', headerBrand: 'header-brand header-brand-scrolling' });
        }
    }



    render() {
        // const isUserloggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <Navbar variant="dark" className={this.state.className} expand="lg" >

                    <div className={this.state.headerBrand}>
                        <Navbar.Brand href="/home"><img src={PitstopLogo} className="header-logo" alt="Pitstop"></img></Navbar.Brand>
                        <span id="nav-divider">|</span>
                    </div>
                    <button className="navbar-toggler x" type="button" data-toggle="collapse" data-target="#navbarsExample05" aria-controls="navbarsExample05" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>

                    <Navbar.Collapse id="navbarsExample05">
                        <Nav className="mynav">
                            <Link to="home" smooth={true}><Nav.Link>HOME</Nav.Link></Link>
                            <Link to="promo" smooth={true} offset={-100}><Nav.Link>PROMO</Nav.Link></Link>
                            <Link to="products" smooth={true} offset={-100}><Nav.Link>PRODUCTS</Nav.Link></Link>
                            <Link to="contactus" smooth={true} offset={-100}><Nav.Link>CONTACT US</Nav.Link></Link>
                            <Link to="faq" smooth={true} offset={-100}><Nav.Link>FAQ</Nav.Link></Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </header>
        )
    }
}

export default withRouter(HeaderComponent);
