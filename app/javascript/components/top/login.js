import React, {Component} from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Login extends Component{
  render(){
    return (
      <div>
        <Row>
          <Col>
            <Button variant="primary">Primary</Button>{' '}
          </Col>
        </Row>
      </div>
    )
  }
}

export default Login
