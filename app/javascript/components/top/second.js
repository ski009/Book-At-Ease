import React, {Component} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'


class Second extends Component{
  render(){
    return(
      <div className="Second">
        <Container>
          <div className="Inspiration">
            <Row>
                <p>Inspiration for your next trip</p>
            </Row>
            <Row>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top"/>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
              </Card.Body>
            </Card>
            </Row>
          </div>
        </Container>
      </div>
    )
  }
}

export default Second;
