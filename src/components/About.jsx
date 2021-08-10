import React from 'react';
import './About.css';
import { Card, CardGroup, Container, Col, Row } from 'react-bootstrap';
import holder1 from "../media/holder1.jpg";
import holder2 from "../media/holder2.jpg";
import holder3 from "../media/holder3.jpg";

const About = () => {
  return (
    <Container className="container" id="about">

      <CardGroup>
        <Row>
          <Col lg={4}>
            <Card>
              <Card.Img className="card-img" variant="top" src={holder1} />
              <Card.Body>
                <Card.Title>Cereals & Dry fruits</Card.Title>
                <Card.Text>
                  Adding cereals and whole grain food can help maintain blood levels and decrease the need for eating at short intervals.
                  A handful of dried fruits provides you with instant engery,protein,vitamins and minerals.As mixed,it gives you all the essentials required by the body.
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
          <Col lg={4}>
            <Card>
              <Card.Img className="card-img" variant="top" src={holder2} />
              <Card.Body>
                <Card.Title>Fruits & Veggies</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to additional
                  content.{' '}
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
          <Col lg={4}>

            <Card>
              <Card.Img className="card-img" variant="top" src={holder3} />
              <Card.Body>
                <Card.Title>Salad</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural lead-in to
                  additional content. This card has even longer content than the first to
                  show that equal height action.
                </Card.Text>
              </Card.Body>

            </Card>
          </Col>
        </Row>
      </CardGroup>
    </Container>

  )

}

export default About