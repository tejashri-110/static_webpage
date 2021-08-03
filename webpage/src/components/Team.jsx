import React from 'react'
import './Team.css';
import Image from 'react-bootstrap/Image'
import team from "../media/team.png";
import {Card ,CardGroup} from 'react-bootstrap';



const Team = () => {
    return (

           <div className="container">
               <h2>Team</h2>
               <CardGroup>
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
  <Card>
  <Image className="team-img" src={team} roundedCircle />
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

export default Team
