import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './login';
import Slides from './slides';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';



class First extends Component{
  render(){
    return (
      <div>
        <Container className="to_container">
          <div className="header">
            <Row>
              <Row className="nav">
                <Col xs={6} md={4}>
                  <h1>B.A.E</h1>
                </Col>
                <Col xs={6} md={4}>

                </Col>
                <Col xs={6} md={4}>
                  <Login />
                </Col>
              </Row>
            </Row>
          </div>
        </Container>
      </div>

    )
  }
}

export default First;
