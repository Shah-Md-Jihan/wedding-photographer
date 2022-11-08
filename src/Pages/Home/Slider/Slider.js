import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import slide1 from '../../../assets/Images/slider/slide1.jpg';
import slide2 from '../../../assets/Images/slider/slide2.jpg';
import slide3 from '../../../assets/Images/slider/slide3.jpg';
import './slider.css';



const Slider = () => {
    return (
        <div>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "667px" }}
                        src={slide1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='slider_caption'>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "667px" }}
                        src={slide2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='slider_caption'>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        style={{ height: "667px" }}
                        src={slide3}
                        alt="Third slide"
                    />

                    <Carousel.Caption className='slider_caption'>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Slider;