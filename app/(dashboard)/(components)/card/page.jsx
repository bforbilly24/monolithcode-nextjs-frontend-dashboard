import ECommerceCard from "./e-commerce-card";
import DefaultCard from "./default-card";
import LinkCard from "./link-card";
import PostCard from "./post-card";

const CardPage = () => {
  return (
    <div className=" space-y-5">

      <DefaultCard />
      <LinkCard />
      <PostCard />
      <ECommerceCard />
    </div>
  );
};

export default CardPage;
