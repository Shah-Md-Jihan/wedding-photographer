import React from 'react';
import Services from '../Services/Services';
import Slider from './Slider/Slider';
import Container from 'react-bootstrap/Container';
import About from '../About/About';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Slider></Slider>

            <Container>
                <About></About>
                <Services></Services>
                <Review></Review>
            </Container>
        </div>
    );
};

export default Home;