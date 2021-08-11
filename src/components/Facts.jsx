import React from 'react';
import bg1 from "../media/bg1.jpg";
import bg2 from "../media/bg2.jpg";
import bg3 from "../media/bg3.jpg";
import ff1 from "../media/ff1.jpg";
import ff2 from "../media/ff2.jpg";
import ff3 from "../media/ff3.jpg";
import { Carousel, Container } from 'react-bootstrap';
import './Facts.css';

const Facts = () => {
    return (
        <Container classname="carousel" id="facts">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h4 class="text">Breakfast benefits</h4>
                        <p class="text"> Breakfast kick-starts your metabolism, helping you burn calories throughout the day.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h4 class="text">Doughnut</h4>
                        <p class="text">Glazed doughnuts have a fair amount of sugar, starch, and fat but are low in beneficial nutrients.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={bg3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h4 class="text" >Eating Vegetables Will Improve Your Health</h4>
                        <p class="text">They are rich in vitamins, minerals, fiber, antioxidants and an endless variety of trace nutrients that science has just begun to uncover.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <Container>
                <h2 className='facts'>FUn FaCts</h2>
            </Container>
            <Container class="card-content">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                        <img src={ff3} class="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div class="col-md-8">
                            <div class="my-card-body">
                                <h5 class="card-title">Dinner is better when we eat together</h5>
                                <p class="card-text">According to several studies, parents who ate with their family while sitting around a kitchen or dining room table weigh significantly less than those who eat dinner in front of the TV.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class="card-content">
                <div class="card mb-3">
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={ff2} class="img-fluid rounded-start" alt="..."></img>
                        </div>
                        <div class="col-md-8">
                            <div class="my-card-body">
                                <h5 class="card-title">Candy affect how much you weigh?</h5>
                                <p class="card-text">People who have candy on or in their desk reported weighing 15.4 more pounds than those who didn’t.</p>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class="card-content">
                <div class="card mb-3"><span className="myClass"> </span>
                    <div class="row g-0">
                        <div class="col-md-4">
                            <img src={ff1} class="img-fluid rounded-start" alt="logo"></img>
                        </div>
                        <div class="col-md-8">
                            <div class="my-card-body">
                                <h5 class="card-title">Want to have twins? Stock up on cheese and start chugging milk.</h5>
                                <p class="card-text">According to a study published in the Journal of Reproductive Medicine by Gary Steinman, MD, PhD, an ob-gyn at Long Island Jewish (LIJ) Medical Center in New Hyde Park, N.Y., women who consume dairy products may increase their chances of conceiving twins. </p>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </Container >
    )

}

export default Facts