import React from 'react';
import { Container } from 'react-bootstrap';
import about from '../../assets/Images/about/about.jpg';
import useSetTitle from '../../hooks/useSetTitle';

const AboutDetail = () => {
    useSetTitle('About');
    return (
        <Container>
            <div style={{ marginTop: "125px" }}>
                <div className='w-75 mx-auto '>
                    <img src={about} alt="aboutImage" className='mb-4 w-100' />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, minus. Explicabo deserunt exercitationem excepturi eaque numquam. Dolor facere vitae, qui, eius culpa eum et perspiciatis delectus, soluta rerum dolore ducimus cupiditate necessitatibus dolorem. Quos, odit delectus beatae sapiente numquam voluptatum non similique sunt architecto nisi corrupti ducimus nobis provident ipsam cum. Voluptates perferendis accusamus possimus odio aperiam vel. Sequi qui, vero assumenda fugiat debitis, est molestiae neque culpa repudiandae sint delectus corporis officiis nisi mollitia dicta libero eveniet quam consequatur, incidunt dignissimos! Optio praesentium quas earum enim! Eligendi at impedit tenetur natus. Ipsam suscipit vel, laudantium nobis, optio minima obcaecati quisquam quia ab sint aliquam illum reiciendis odio? Laboriosam nostrum velit deleniti reiciendis hic iusto optio dicta, provident temporibus officiis quidem dolores id quos, ducimus recusandae nihil modi, dignissimos adipisci molestias delectus magnam quam nisi? Doloremque perspiciatis, at, nemo recusandae cupiditate nihil assumenda porro iure minus laudantium odit amet quo!</p>
            </div>
        </Container>
    );
};

export default AboutDetail;