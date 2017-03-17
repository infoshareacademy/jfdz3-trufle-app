
import React from 'react';
import './Menu.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Form, FormGroup, ControlLabel, FormControl, Button, Col} from 'react-bootstrap';
import logo from './images/planeta.gif';

class Menu extends React.Component{
    render(){
        return(
            <Navbar>
                <Col md={6} >
                <Navbar.Header>
                    <Navbar.Brand>
                        <a className='logo_images' href="#"><img src={logo}  alt="logo"/></a>
                        <a className='logo_name' href="#">Trufle</a>
                    </Navbar.Brand>
                </Navbar.Header>
                <Nav>
                    <NavItem eventKey={1} href="#" className='button_menu' >Functions</NavItem>
                    <NavItem eventKey={2} href="#" className='button_menu' >Team</NavItem>
                    <NavItem eventKey={3} href="#" className='button_menu' >Details</NavItem>
                    <NavItem eventKey={3} href="#" className='button_menu' >Newsletter</NavItem>
                </Nav>
               </Col>
                <Col md={6} className="form-menu">
            <Form inline>
        <FormGroup controlId="formInlineName">
            <ControlLabel>Name</ControlLabel>
            {' '}
        <FormControl type="text" placeholder="Jane Doe" />
        </FormGroup>
        {' '}
        <FormGroup controlId="formInlineEmail">
            <ControlLabel>Email</ControlLabel>
            {' '}
            <FormControl type="email" placeholder="jane.doe@example.com" />
        </FormGroup>
        {' '}
        <Button type="submit" bsStyle="primary" className="button_form">
            Send invitation
        </Button>
        </Form>
        </Col>
    </Navbar>


        )
    }
}

export default Menu;