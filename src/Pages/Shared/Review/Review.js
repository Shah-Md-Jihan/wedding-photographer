import React, { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";
import ReviewBox from "./ReviewBox";
import { AuthContext } from "../../../Context/AuthContext/AuthProvider";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Review = ({ service_info }) => {
  const { user } = useContext(AuthContext);
  const [reviewsLoading, setReviewsLoading] = useState(false);

  const { data: reviews = [], refetch } = useQuery({
    queryKey: ["review", service_info?.name],
    queryFn: async () => {
      setReviewsLoading(true);
      const res = await fetch(`http://127.0.0.1:5000/service/review/${service_info?.name}`);
      const data = await res.json();
      setReviewsLoading(false);
      return data;
    },
  });

  const service_name = service_info?.name;
  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user_email = form.user_email.value;
    const user_name = form.user_name.value;
    const rating = form.rating.value;
    const review = form.review.value;

    const reviews = {
      service_name: service_name,
      user_email: user_email,
      user_name: user_name,
      rating: rating,
      review: review,
    };

    fetch("https://weeding-photographer-server.vercel.app/services/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(reviews),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          alert("Review added!");
          form.reset();
          refetch();
        }
      })
      .then((error) => console.error(error));
  };

  if (reviewsLoading) {
    return <h3>Loading...</h3>;
  }
  return (
    <div>
      <h2>Reviews:</h2>
      {/* review box */}
      <div>
        {reviews.map((review) => (
          <ReviewBox key={review._id} review={review}></ReviewBox>
        ))}

        {/* review form  */}
        <div className="mt-5">
          {user?.uid ? (
            <Form onSubmit={handleReviewSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="hidden" name="user_email" value={user?.email} />
                <Form.Control type="hidden" name="user_name" value={user?.displayName} />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <select className="form-control" name="rating">
                  <option value="5">--select 5 star rating--</option>
                  <option value="1">1 star</option>
                  <option value="2">2 star</option>
                  <option value="3">3 star</option>
                  <option value="4">4 star</option>
                  <option value="5">5 star</option>
                </select>
              </Form.Group>
              <FloatingLabel controlId="floatingTextarea2" label="Review">
                <Form.Control name="review" as="textarea" placeholder="Leave your review here" style={{ height: "100px" }} required />
              </FloatingLabel>

              <Button variant="primary" type="submit" className="w-100 mt-2 rounded-0 border-0" style={{ background: "tomato" }} size="lg">
                Leave Your Review
              </Button>
            </Form>
          ) : (
            <Link to="/login" className="fw-bold text-decoration-none text-danger">
              Please Login to Leave Your Review
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Review;
