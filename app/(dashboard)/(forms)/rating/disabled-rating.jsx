import { Rating } from "@/components/ui/rating";
const DisabledRating = () => {
  return (
    <Rating
      style={{ maxWidth: 125 }}
      className="space-x-1.5"
      value={3}
      isDisabled
    />
  );
};

export default DisabledRating;
