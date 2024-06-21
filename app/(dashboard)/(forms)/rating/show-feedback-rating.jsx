import React, { useState } from "react";

import { Rating } from "@/components/ui/rating";
const ShowFeedbackRating = () => {
  const [rating, setRating] = useState(3);
  const [rating1, setRating1] = useState(3);

  function getRating(rating) {
    switch (rating) {
      case 1:
        return "Poor";
      case 2:
        return "Nothing special";
      case 3:
        return "Good";
      case 4:
        return "Very good";
      case 5:
        return "Excellent";
      default:
        return "Average";
    }
  }

  return (
    <div className=" flex justify-between flex-wrap gap-3">
      <div className="flex gap-2">
        <Rating
          style={{ maxWidth: 125 }}
          className="space-x-1.5"
          value={rating}
          onChange={setRating}
        />
        <div>{`${getRating(rating)}`}</div>
      </div>
      <div className="flex gap-2">
        <Rating
          style={{ maxWidth: 125 }}
          className="space-x-1.5"
          value={rating1}
          onChange={setRating1}
        />
        <div>{`${getRating(rating1)}`}</div>
      </div>
    </div>
  );
};

export default ShowFeedbackRating;
