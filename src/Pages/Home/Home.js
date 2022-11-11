import React from 'react';
import Services from '../Services/Services';
import Slider from './Slider/Slider';
import Container from 'react-bootstrap/Container';
import About from '../About/About';
import Review from '../Review/Review';
import AboutPhotoStudio from '../About/AboutPhotoStudio';

const Home = () => {
    return (
        <div>
            <Slider></Slider>

            <Container>
                <About></About>
                <Services></Services>
                <AboutPhotoStudio></AboutPhotoStudio>
            </Container>
        </div>
    );
};

export default Home;