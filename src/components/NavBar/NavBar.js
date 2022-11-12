import React from 'react';
import "./navbar.css";
import CartWidget from './CartWidget.js';

//Importaciones de React-Boostrap para NavBar
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';

function NavBar () {
    return (
        <Navbar className="bgColor" expand="lg">
            <Container>
                <Link to='/'><Navbar.Brand>MundoCerámica</Navbar.Brand></Link>
            </Container>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                <Nav>
                    <Link className='nav-link'to='/category/deco'>Deco</Link>
                    <Link className='nav-link' to='/category/iluminacion'>Iluminación</Link>
                    <Link className='nav-link' to='/category/hogar'>Hogar</Link>
                    <Link className='nav-link' to='/category/cocina'>Cocina</Link>
                    <Link className='nav-link' to='/category/macetas'>Macetas</Link>
                    <Link className='nav-link' to='/category/velas'>Velas</Link>
                    <Nav.Link><CartWidget counter="0"></CartWidget></Nav.Link>
                    <NavDropdown align="end" title="Login" id="basic-nav-dropdown">
                        <NavDropdown.Item className="colorOnClick" href="#">Iniciar sesión</NavDropdown.Item>
                        <NavDropdown.Item className="colorOnClick" href="#">
                            Registrarse
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
    );
}

export default NavBar;