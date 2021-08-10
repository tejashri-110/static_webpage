import React from 'react'
import './Team.css';
import Image from 'react-bootstrap/Image'
import team from "../media/team.png";
import { Card, CardGroup, Container, Col, Row } from 'react-bootstrap';



const Team = () => {
  return (

    <div className="container">
      <h2>Team</h2>
      <div>


        <CardGroup className="cards" id="team">
          <Row>
            <Col lg={5}>
              <Card>

                <Image className="team-img" src={team} roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This card has supporting text below as a natural lead-in to additional
                    content.{' '}
                  </Card.Text>
                </Card.Body>

              </Card>
            </Col>
            <Col lg={5}>
              <Card>

                <Image className="team-img" src={team} roundedCircle />
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content.
                  </Card.Text>
                </Card.Body>

              </Card>
            </Col>
          </Row>
        </CardGroup>


      </div>

    </div>




  )
}

export default Team
