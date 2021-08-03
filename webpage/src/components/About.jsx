import React from 'react';
import './About.css';
import {Card ,CardGroup} from 'react-bootstrap';
import holder1 from "../media/holder1.jpg";
import holder2 from "../media/holder2.jpg";
import holder3 from "../media/holder3.jpg";

const About = () => {
    return (
        <div class="cards">
        <CardGroup>
  <Card>
    <Card.Img class="card-img" variant="top" src={holder2} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This content is a little bit longer.
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img class="card-img" variant="top" src={holder3} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This card has supporting text below as a natural lead-in to additional
        content.{' '}
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img class="card-img" variant="top" src={holder1} />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        This is a wider card with supporting text below as a natural lead-in to
        additional content. This card has even longer content than the first to
        show that equal height action.
      </Card.Text>
    </Card.Body>
    
  </Card>
</CardGroup>
</div>
      )
                    
}

export default About