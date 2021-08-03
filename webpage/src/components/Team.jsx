import React from 'react'
import './Team.css';
import Image from 'react-bootstrap/Image'
import {Container,Row ,Col} from 'react-bootstrap';


const Team = () => {
    return (
       
            // Team
        

        <Container>
  <Row>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>
    <Col xs={6} md={4}>
      <Image src="holder.js/171x180" roundedCircle />
    </Col>
  </Row>
</Container>





    )
}

export default Team
