import React, { Component } from "react";
import { Jumbotron, Container, Card } from 'reactstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
class ContactUsComponent extends Component {
    constructor() {
        super();
        this.state = {
        }
    }

    render() {
        return (
            
            <div className="content">
                <Jumbotron fluid className="my-jumbo section-title">
                            <Container fluid>
                                <h1 className="display-3">Contact Us</h1>
                                <p className="lead">Contact Details and Working Hours</p>
                            </Container>
                </Jumbotron>
                <table>
                <tr><th>Sunday</th><td>Closed</td></tr>
                <tr><th>Monday</th><td>8:30am - 5pm</td></tr>
                <tr><th>Tuesday</th><td>8:30am - 5pm</td></tr>
                <tr><th>Wednesday</th><td>8:30am - 5pm</td></tr>
                <tr><th>Thursday</th><td>8:30am - 5pm</td></tr>
                </table>
            </div>
        );
    }
}
export default ContactUsComponent;