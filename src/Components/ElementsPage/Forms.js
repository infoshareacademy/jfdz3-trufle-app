import React from 'react';
import './Forms.css';
import {Form, FormGroup, ControlLabel, FormControl, Button, Col, Navbar} from 'react-bootstrap';


class Forms extends React.Component {
    render() {
        return (
            <div className="forms">
                <Col md={8} lg={8} pullRight className="formsClass" >
                    <Form inline >
                        <FormGroup  controlId="formInlineName">
                            <ControlLabel>Name</ControlLabel>
                            {' '}
                            <FormControl type="text" placeholder="Jane Doe"/>
                        </FormGroup>
                        {' '}
                        <FormGroup controlId="formInlineEmail">
                            <ControlLabel>Email</ControlLabel>
                            {' '}
                            <FormControl type="email" placeholder="jane.doe@example.com"/>
                        </FormGroup>
                        {' '}
                        <Button type="submit" bsStyle="primary" className="button_form">
                            Zaloguj sie
                        </Button>
                    </Form>
                </Col>
                <Col md={4} lg={4} >
                    <Navbar.Collapse>
                        <Navbar.Form pullRight>
                            <FormGroup>
                                <FormControl type="text" />
                            </FormGroup>
                            {' '}
                            <Button type="submit" bsStyle="primary">Szukaj</Button>
                        </Navbar.Form>
                    </Navbar.Collapse>
                </Col>
            </div>
                )
                }
                }

                export default Forms;
