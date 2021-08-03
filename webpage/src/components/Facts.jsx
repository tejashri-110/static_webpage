import React from 'react';
import bg1 from "../media/bg1.jpg";
import bg2 from "../media/bg2.jpg";
import bg3 from "../media/bg3.jpg";
import { Carousel, Container, Figure } from 'react-bootstrap';
import './Facts.css';

const Facts = () => {
    return (
        <Container classname="carousel">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container>
                <Container><h2 class="section-title">Fun &amp; Facts</h2>
                </Container>
                <Figure classname='figure'>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={bg1}
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
            </Container>
            <Container>
                <Figure classname='figure'>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={bg1}
                    />
                    <Figure.Caption>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
            </Container>
            <Container>
                <Figure classname='figure'>
                    <Figure.Image
                        width={171}
                        height={180}
                        alt="171x180"
                        src={bg1}
                    />
                    <Figure.Caption class="figure-caption">
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                    </Figure.Caption>
                </Figure>
            </Container>
        </Container>
    )

}

export default Facts