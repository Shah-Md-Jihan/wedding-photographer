import React from 'react';
import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import about from '../../assets/Images/about/about.jpg';


const About = () => {

    return (
        <div className='mt-5'>
            <Row xs={1} md={2} className="g-4">
                <Col>
                    <div>
                        <img src={about} alt="" className='w-100 rounded-2' />
                    </div>
                </Col>
                <Col>
                    <div>
                        <h1>About Our Videography</h1>

                        <p>I provide best quality video record service.I have best camera for high dimensition video.You want to record your event?You can cotact me.</p>

                        <p>For record birthday ceremony, marage ceremony and many more event you want record we provide video recording service.</p>
                        <Button variant="outline-info">Know More</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default About;