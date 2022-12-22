import React, { useContext, useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthContext/AuthProvider";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { Link } from "react-router-dom";
import useSetTitle from "../../hooks/useSetTitle";

const MyReviews = () => {
  useSetTitle("My Reviews");

  const { user } = useContext(AuthContext);
  const [myReviews, setMyReviews] = useState([]);
  useEffect(() => {
    fetch(`https://weeding-photographer-server.vercel.app/my/reviews/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyReviews(data);
      });
  }, []);

  const handleReviewDelete = (id) => {
    const confirmation = window.confirm("Are you sure to delete?");
    if (confirmation) {
      fetch(`https://weeding-photographer-server.vercel.app/my/reviews/delete/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data?.deletedCount > 0) {
            alert("Review deleted");
            const remainingReviews = myReviews.filter((rev) => rev._id !== id);
            setMyReviews(remainingReviews);
          }
        });
    }
  };

  return (
    <div style={{ marginTop: "125px" }}>
      <h1 className="text-center">My reviews</h1>
      <Container>
        {myReviews.map((review) => (
          <Card key={review?._id} review={review} border="primary" className="mb-2">
            <Card.Body>
              <Card.Title>{review?.service_name}</Card.Title>
              <Card.Text>{review?.review}</Card.Text>
              <div className="d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <div className="mt-1">
                    <p className="m-0">{review?.rating}</p>
                  </div>
                  <div className="ms-1">
                    <span className="text-warning">
                      <FaStar />
                    </span>
                  </div>
                </div>
                <div>
                  <ButtonGroup aria-label="Basic example">
                    <Link to={`/my/reviews/update/${review?._id}`}>
                      <Button variant="warning">Edit</Button>
                    </Link>

                    <Button onClick={() => handleReviewDelete(review?._id)} variant="danger">
                      Delete
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </Card.Body>
          </Card>
        ))}
        {myReviews.length === 0 && (
          <Card className="text-center">
            <Card.Body>
              <Card.Title style={{ height: "300px" }} className="d-flex align-items-center justify-content-center fw-bold fs-3 text-danger">
                No review to display!
              </Card.Title>
            </Card.Body>
          </Card>
        )}
      </Container>
    </div>
  );
};

export default MyReviews;
