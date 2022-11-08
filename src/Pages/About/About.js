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
                        <h1>Lorem, ipsum dolor.</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea labore necessitatibus sed repudiandae culpa libero nostrum autem, distinctio corporis cum! Ad libero neque aliquid ut quod voluptatibus. Quod, deserunt hic!</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, at. Rerum quis magnam consequatur. Facilis repudiandae reiciendis hic quos tempore, eligendi in, temporibus dignissimos qui itaque rerum nam, fuga saepe consequuntur sequi laboriosam nemo distinctio? Dicta eum error delectus deserunt necessitatibus, reiciendis architecto, dolorum unde harum rem inventore. Placeat, eum rerum incidunt officia adipisci quisquam facere modi dolorum quia voluptatum?</p>
                        <Button variant="outline-info">Know More</Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default About;