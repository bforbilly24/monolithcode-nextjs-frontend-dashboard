import { Rating } from "@/components/ui/rating";
const OutlineRating = () => {
  return (
    <Rating
      style={{ maxWidth: 125 }}
      className="space-x-1.5"
      value={3}
      variant="outline"
    />
  );
};

export default OutlineRating;
