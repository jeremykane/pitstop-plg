import React, { Component } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import FacebookLogo from '../../assets/facebook-square-brands.svg'
// import Button from 'react-bootstrap/Button'
import "../../styles/FooterComponentStyling.css"
class FooterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        // const isUserloggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <div>
                <footer className="page-footer font-small mdb-color lighten-3 pt-4 myFooter">

                    <div className="container text-center text-md-left">

                        <div className="row" >

                            <div className="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">

                                <h5 className="font-weight-bold text-uppercase mb-4">Footer Content</h5>
                                <p>Here you can use rows and columns to organize your footer content.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit amet numquam iure provident voluptate
                                esse
                        quasi, veritatis totam voluptas nostrum.</p>

                            </div>

                            <hr className="clearfix w-100 d-md-none" />

                            <div className="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">

                                <h5 className="font-weight-bold text-uppercase mb-4">About</h5>

                                <ul className="list-unstyled" id="footer-about">
                                    <li>
                                        <p>
                                            <a href="/">PROJECTS</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a href="/">ABOUT US</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a href="/">BLOG</a>
                                        </p>
                                    </li>
                                    <li>
                                        <p>
                                            <a href="/">AWARDS</a>
                                        </p>
                                    </li>
                                </ul>

                            </div>

                            <hr className="clearfix w-100 d-md-none" />

                            <div className="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">

                                <h5 className="font-weight-bold text-uppercase mb-4">Address</h5>

                                <ul className="list-unstyled">
                                    <li>
                                        <p>
                                            <i className="fas fa-home mr-3"></i> Jl. Letjen Harun Sohar No. 9 (Simpang Bandara SMB II)</p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fas fa-envelope mr-3"></i> info@example.com</p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fas fa-phone mr-3"></i> (0711) 5710200 / 0821753117798</p>
                                    </li>
                                    <li>
                                        <p>
                                            <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                                    </li>
                                </ul>

                            </div>

                            <hr className="clearfix w-100 d-md-none" />

                            <div className="col-md-2 col-lg-2 text-center mx-auto my-4">
                                <h5 className="font-weight-bold text-uppercase mb-4">Follow Us On</h5>
                                <a className="fab fa-instagram col-sm" href="https://www.instagram.com/bengkelthepitstop/"><span className="hidden">a</span></a>
                                <a className="fab fa-whatsapp col-sm" href="https://www.instagram.com/bengkelthepitstop/"><span className="hidden">a</span></a>
                            </div>

                        </div>

                    </div>
                    <div className="footer-copyright text-center py-3 footerB">
                        &copy;{new Date().getFullYear()} PT. Putra Kalbar Sriwijaya
                </div>

                </footer>
            </div>
        )
    }
}

export default FooterComponent;
