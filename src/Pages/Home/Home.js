import React, { useContext } from 'react';
import Services from '../Services/Services';
import Slider from './Slider/Slider';
import Container from 'react-bootstrap/Container';
import About from '../About/About';
import Review from '../Review/Review';
import AboutPhotoStudio from '../About/AboutPhotoStudio';
import { Spinner } from 'react-bootstrap';
import { AuthContext } from '../../Context/AuthContext/AuthProvider';
import useSetTitle from '../../hooks/useSetTitle';

const Home = () => {
    useSetTitle('Home');
    const { loader } = useContext(AuthContext);
    if (loader) {
        return <Spinner style={{ margin: "300px 700px" }} className='' animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
        </Spinner>
    }
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