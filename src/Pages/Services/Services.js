import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";

const Services = () => {
  const [homePageService, setHomePageService] = useState([]);
  const [serviceLoading, setServiceLoading] = useState(false);
  useEffect(() => {
    setServiceLoading(true);
    fetch("https://weeding-photographer-server.vercel.app/home/services")
      .then((res) => res.json())
      .then((data) => {
        setHomePageService(data);
        setServiceLoading(false);
      });
  }, []);
  if (serviceLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div className="mt-5">
      <h1 className="text-center pb-4">Services</h1>
      <Row xs={1} md={3} className="g-4">
        {homePageService.map((service) => (
          <Col key={service._id} service={service}>
            <Card className="h-100">
              <Card.Img variant="top" src={service?.image} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <div className="d-flex align-items-center">
                  <div>
                    <span className="fs-6 fw-bold">Rating: {service?.rating}</span>
                  </div>
                  <div className="mb-1 ms-1 text-warning">
                    <span>
                      <FaStar />
                    </span>
                  </div>
                </div>
                <Card.Text>{service?.description.slice(0, 40)}...</Card.Text>

                <div className="d-flex justify-content-between align-items-center">
                  <p className="fw-bold fs-5 text-warning">${service?.price}</p>
                  <p>
                    <Link>
                      <Button variant="warning">View Details</Button>
                    </Link>
                  </p>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="d-flex justify-content-center">
        <Link to={"/service"}>
          <Button variant="danger" className="mt-4">
            See All
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
