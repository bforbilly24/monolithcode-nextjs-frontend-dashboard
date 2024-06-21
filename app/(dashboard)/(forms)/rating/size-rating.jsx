import { Rating } from "@/components/ui/rating";
import { useState } from "react";

const SizeRating = () => {
  const [rating, setRating] = useState(3);

  return (
    <>
      <Rating
        style={{ maxWidth: 125 }}
        className="space-x-1.5"
        value={rating}
        onChange={setRating}
      />
      <Rating
        style={{ maxWidth: 225 }}
        className="space-x-1.5"
        value={rating}
        onChange={setRating}
      />
      <Rating
        style={{ maxWidth: 325 }}
        className="space-x-1.5"
        value={rating}
        onChange={setRating}
      />
    </>
  );
};

export default SizeRating;
