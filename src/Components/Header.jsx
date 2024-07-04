import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaCircleUser, FaCartShopping } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Header() {

  
  // const [filterdata,setfilterdata]=useState()
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary sticky-top">
      <Container>
        <Navbar.Brand href="#">
            <img src={require('../logo.png')} alt="" width={150}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Link to='/'><Nav.Link href="#action1" className='fs-5 fw-medium me-2 menu act_menu'>Home</Nav.Link></Link>
            <Nav.Link href="#action2" className='fs-5 fw-medium me-2 menu'>Products</Nav.Link>
            
            <Nav.Link href="#" className='fs-5 fw-medium me-2 menu'>
              About
            </Nav.Link>
            <Nav.Link href="#" className='fs-5 fw-medium me-2 menu'>
              Blog
            </Nav.Link>
            <Nav.Link href="#" className='fs-5 fw-medium me-2 menu'>
              Contact Us
            </Nav.Link>
          </Nav>
          
            {/* <h5>{search}</h5> */}
            <Link to='login'><Button variant="primary" className='me-3 d-flex align-items-center fs-5 fw-medium'><FaCircleUser className='me-2 fs-4'/>Login</Button></Link>
            <Link to='cart'><Button variant="warning" className='d-flex align-items-center fs-5 fw-medium'>< FaCartShopping className='me-3 fs-4'/>Cart</Button></Link>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header
