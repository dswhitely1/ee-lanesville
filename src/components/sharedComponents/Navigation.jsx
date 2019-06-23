import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Navbar
      bg='primary'
      variant='dark'
      expand='lg'
      fixed='top'
      className='text-uppercase'
    >
      <Container className='justify-content-center mb-md-2 mb-lg-0'>
        <NavLink to='/admin'
                 className='btn btn-small btn-outline-light mr-auto'>Admin</NavLink>
        <NavLink to='/'><Navbar.Brand
          className='shadow  nav-link text-light mr-0 font-weight-bold'>Emergency
          Electric</Navbar.Brand>
        </NavLink>
        <NavLink to='/apply'
                 className='btn btn-small btn-outline-light ml-auto'>Apply
          Now</NavLink>
      </Container>
    </Navbar>
  );
};

export default Navigation;
