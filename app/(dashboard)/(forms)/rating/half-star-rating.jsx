import { Rating } from "@/components/ui/rating";
const HalfStarRating = () => {
  return (
    <Rating
      style={{ maxWidth: 125 }}
      className="space-x-1.5"
      value={2.5}
      readOnly
    />
  );
};

export default HalfStarRating;
