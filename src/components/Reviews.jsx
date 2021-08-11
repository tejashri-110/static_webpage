import React from 'react';
// import img1 from "../media/img1.svg";
import './Reviews.css';
import { Container } from 'react-bootstrap';

const Reviews = () => {
    return (
        <Container id="reviews">
            <div className="card-review">
                <div class="card-header">
                    <h4>Quotes</h4>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p> “Food is an important part of a balanced diet.”</p>
                        <footer class="blockquote-footer">Fran  <cite title="Source Title">Lebowitz</cite></footer>
                    </blockquote>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>“Take care of your body. It’s the only place you have to live.”</p>
                        <footer class="blockquote-footer">Jim <cite title="Source Title">Rohn</cite></footer>
                    </blockquote>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p> “Our food should be our medicine and our medicine should be our food. “</p>
                        <footer class="blockquote-footer"> Hippocrates<cite title="Source Title"></cite></footer>
                    </blockquote>
                </div>
            </div>
        </Container>
    )

}

export default Reviews