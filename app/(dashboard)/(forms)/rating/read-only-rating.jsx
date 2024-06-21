import { Rating } from "@/components/ui/rating";
const ReadOnlyRating = () => {
  return (
    <Rating
      style={{ maxWidth: 125 }}
      className="space-x-1.5"
      value={4}
      readOnly
    />
  );
};

export default ReadOnlyRating;
