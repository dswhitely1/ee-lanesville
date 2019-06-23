import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Scrollchor from 'react-scrollchor';

const Header = () => {
  return (
    <header className='ee-header-section d-flex'>
      <Container className='text-center my-auto'>
        <h1 className='mb-1 text-primary'>Emergency Electric Inc</h1>
        <h3 className='mb-5 text-primary'>
          24 Hour Service | Licensed and Insured | Residential and Commercial
        </h3>
        <Scrollchor className='btn btn-info btn-lg mr-4' to='#about'>
          Find Out More
        </Scrollchor>
        <Link to='/apply' className='btn btn-lg btn-success'>Apply Now</Link>

      </Container>
    </header>
  );
};

export default Header;