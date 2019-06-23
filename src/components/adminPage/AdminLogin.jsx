import React, { Component } from 'react';
import {
  Button,
  Col,
  Container,
  Form,
  Row
} from 'react-bootstrap';

class AdminLogin extends Component {
  state = {
    email   : '',
    password: '',
    checked : false
  };

  onHandleChange = e => this.setState( {
    ...this.state,
    [e.target.name]: e.target.value
  } );

  onHandleCheck = e => this.setState( {
    ...this.state,
    [e.target.name]: e.target.checked
  } );

  onHandleSubmit = e => {
    e.preventDefault();
  };

  render() {
    return (
      <header className='d-flex ee-header-section'>
        <Container className='text-center my-auto'>
          <h1>Administration Login</h1>
          <Form onSubmit={this.onHandleSubmit}>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control type='email' placeholder='Email'
                              value={this.state.email} name='email'
                              onChange={this.onHandleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Form.Label column sm={2}>
                Password
              </Form.Label>
              <Col sm={10}>
                <Form.Control type='password' placeholder='Password'
                              value={this.state.password} name='password'
                              onChange={this.onHandleChange} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{
                span  : 10,
                offset: 2
              }}>
                <Form.Check label='Remember Email' value={this.state.checked}
                            name='checked' onChange={this.onHandleCheck} />
              </Col>
            </Form.Group>
            <Form.Group as={Row}>
              <Col sm={{
                span  : 10,
                offset: 2
              }}>
                <Button type='submit'>Sign In</Button>
              </Col>
            </Form.Group>
          </Form>
        </Container>
      </header>);
  }
}

export default AdminLogin;