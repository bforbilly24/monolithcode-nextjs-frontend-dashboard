import { Rating } from "@/components/ui/rating";

const DefaultRating = () => {

  return (
    <>
      <Rating style={{ maxWidth: 125 }} className="space-x-1.5" value={3} />
    </>
  );
};

export default DefaultRating;
