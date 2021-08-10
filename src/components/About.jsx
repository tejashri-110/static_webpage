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
                  Fruit and vegetables are a good source of vitamins and minerals, including folate, vitamin C and potassium. They're an excellent source of dietary fibre, which can help to maintain a healthy gut and prevent constipation and other digestion problems.You get to enjoy a variety of flavors and textures.{' '}
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
                  Leafy vegetables are a good choice for a healthful diet because they do not contain cholesterol and are naturally low in calories and sodium.
                  Eating salad does burn fat when you combine your salad with healthy grains for a full and complete meal.It is perfect nutritional powerhouse that supplies vitamins and minerals to body.
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