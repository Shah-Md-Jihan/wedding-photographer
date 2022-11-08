import React from 'react';
import Services from '../Services/Services';
import Slider from './Slider/Slider';
import Container from 'react-bootstrap/Container';
import About from '../About/About';

const Home = () => {
    return (
        <div>
            <Slider></Slider>

            <Container>
                <About></About>
                <Services></Services>
            </Container>
        </div>
    );
};

export default Home;