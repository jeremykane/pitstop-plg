import React, { Component } from "react";
import { Jumbotron, Container, Card } from 'reactstrap';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import '../styles/FAQComponentStyle.css'
class FAQCompponent extends Component {
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
                                <h1 className="display-3">FAQ</h1>
                                <p className="lead">Frequently Asked Question</p>
                            </Container>
                </Jumbotron>
                <section class="accordion-section clearfix mt-3" aria-label="Question Accordions">
                    <div class="container">
                        <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                            <div class="panel panel-default">
                            <div class="panel-heading p-3 mb-3" role="tab" id="heading0">
                                <h3 class="panel-title">
                                <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse0" aria-expanded="true" aria-controls="collapse0">
                                    First Question
                                </a>
                                </h3>
                            </div>
                            <div id="collapse0" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading0">
                                <div class="panel-body px-3 mb-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus egestas sem in fermentum. Duis non euismod nisl, quis dictum.  </p>
                                </div>
                            </div>
                            </div>
                            
                            <div class="panel panel-default">
                            <div class="panel-heading p-3 mb-3" role="tab" id="heading1">
                                <h3 class="panel-title">
                                <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                                    Second Question
                                </a>
                                </h3>
                            </div>
                            <div id="collapse1" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                                <div class="panel-body px-3 mb-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus egestas sem in fermentum. Duis non euismod nisl, quis dictum.</p>
                                </div>
                            </div>
                            </div>
                            
                            <div class="panel panel-default">
                            <div class="panel-heading p-3 mb-3" role="tab" id="heading2">
                                <h3 class="panel-title">
                                <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
                                    Third Question
                                </a>
                                </h3>
                            </div>
                            <div id="collapse2" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                                <div class="panel-body px-3 mb-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus egestas sem in fermentum. Duis non euismod nisl, quis dictum.</p>
                                </div>
                            </div>
                            </div>
                            
                            <div class="panel panel-default">
                            <div class="panel-heading p-3 mb-3" role="tab" id="heading3">
                                <h3 class="panel-title">
                                <a class="collapsed" role="button" title="" data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
                                    Fourth Question
                                </a>
                                </h3>
                            </div>
                            <div id="collapse3" class="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                                <div class="panel-body px-3 mb-4">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer rhoncus egestas sem in fermentum. Duis non euismod nisl, quis dictum.</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    
                    </div>
                    </section>
            </div>
        );
    }
}
export default FAQCompponent;