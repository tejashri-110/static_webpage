import React from 'react';
// import img1 from "../media/img1.svg";
import './Reviews.css';
import { Container } from 'react-bootstrap';

const Reviews = () => {
    return (
        <Container>
            <div class="card">
                <div class="card-header">
                    Quote
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
                <div class="card-body">
                    <blockquote class="blockquote mb-0">
                        <p>A well-known quote, contained in a blockquote element.</p>
                        <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
                    </blockquote>
                </div>
            </div>
        </Container>
    )

}

export default Reviews