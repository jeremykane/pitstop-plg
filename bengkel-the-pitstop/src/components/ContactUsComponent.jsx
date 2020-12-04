import React, { Component } from "react";
import { Jumbotron, Container } from 'reactstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Table from 'react-bootstrap/Table'
import '../styles/ContactUsComponentStyle.css'
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
                <Row className="justify-content-md-center">
                    <Col lg="8">
                        <Card className="text-center working-hours">
                            <Card.Body>
                                <Card.Title>
                                    Opening Hours:
                                </Card.Title>
                                <Card.Text>
                                    <Table hover responsive="lg" className="working-hours-table">
                                        <thead>

                                        </thead>
                                        <tbody>
                                            <tr><th>Monday</th><td>8:30am - 5pm</td></tr>
                                            <tr><th>Tuesday</th><td>8:30am - 5pm</td></tr>
                                            <tr><th>Wednesday</th><td>8:30am - 5pm</td></tr>
                                            <tr><th>Thursday</th><td>8:30am - 5pm</td></tr>
                                            <tr><th>Friday</th><td>8:30am - 5pm</td></tr>
                                            <tr><th>Saturday</th><td>9am - 4pm</td></tr>
                                            <tr><th>Sunday</th><td>Closed</td></tr>
                                        </tbody>

                                    </Table>
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col lg="4">
                        <Card className="text-center contact-reservation">
                            <Card.Body>
                                <Card.Title>
                                    Reservation Via:
                                </Card.Title>
                                <Table className="contact-us-table">
                                    <thead>
                                    </thead>
                                    <tbody>
                                        <tr><th><a className="fab fa-instagram" href="/"><span className="hidden">a</span></a></th><td>@bengkelthepitstop</td></tr>
                                        <tr><th><a className="fab fa-whatsapp" href="/"><span className="hidden">a</span></a></th><td>0821-7531-1779</td></tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div >
        );
    }
}
export default ContactUsComponent;