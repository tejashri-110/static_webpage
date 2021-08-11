import React from 'react';
import img1 from "../media/img1.svg";
import './Home.css';
import { Container, Col, Row } from 'react-bootstrap';
import Type from "./Type";

const Home = () => {
    return (
        <div class="home">
            <div class="container">
                <section>
                    <Container fluid className="home-section" class="home-content" id="home">

                        <Container className="home-content">
                            <Row>
                                <Col md={7} className="home-header">
                                    <h1 style={{ paddingBottom: 15 }} className="heading">
                                        Heyaaaaaa! <span className="wave">👋🏻</span>
                                    </h1>

                                    <h1 className="heading-name">

                                        <strong className="main-name">Schedule Yourself...</strong>
                                    </h1>

                                    <div style={{padding: 50, textAlign: "left"  }}>
                                        <Type />
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Container>

                </section>
                <img class="logo-img" src={img1} alt="logo"></img>
            </div>
        </div>
    )
}

export default Home






