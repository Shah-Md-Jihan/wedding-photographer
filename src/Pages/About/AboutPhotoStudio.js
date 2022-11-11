import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const AboutPhotoStudio = () => {
    return (
        <div className='mt-5'>
            <Row xs={1} md={2} className="g-4 py-5">
                <Col>
                    <div>
                        <h1>Photo Studio</h1>

                        <p>I have photo studio service. Modeling photoshot, event photoshot and many more photoshot service I provide.</p>

                        <p>I provide personal photoshot service for your personal photograpy like honeymoon and travel photoshot you can hire me.</p>
                        <Button variant="outline-info">Know More</Button>
                    </div>
                </Col>
                <Col>
                    <div>
                        <img src="https://i.pinimg.com/originals/69/61/a8/6961a884beb1781ddb66505dc4b24422.jpg" alt="" className='w-100 rounded-2' />
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default AboutPhotoStudio;