import React from 'react';
import './Menu.css';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Col} from 'react-bootstrap';
import logo from './images/planeta.gif';

class Menu extends React.Component {
  render() {
    return (
      <Navbar fluid>
        <Col md={12} lg={12}>
          <Navbar.Header>
            <Navbar.Brand>
              <a className='logo_images' href="#"><img src={logo} alt="logo"/></a>
              <a className='logo_name' href="#">Trufle</a>
            </Navbar.Brand>
          <Nav>
            <NavItem eventKey={1} href="#" className='button_menu'>Functions</NavItem>
            <NavItem eventKey={2} href="#" className='button_menu'>Team</NavItem>
            <NavItem eventKey={3} href="#" className='button_menu'>Details</NavItem>
            <NavItem eventKey={4} href="#" className='button_menu'>Newsletter</NavItem>
          </Nav>
          </Navbar.Header>
        </Col>
      </Navbar>
    )
  }
}

export default Menu;