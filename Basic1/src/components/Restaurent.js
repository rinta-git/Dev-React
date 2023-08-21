import ShimmerCard from "./ShimmerCard";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useParams } from "react-router-dom";

const Restaurent = () => {
  const { resId } = useParams();

  const restaurentMenu = useRestaurentMenu(resId); //using custom hook to fetch details

  if (restaurentMenu === null) return <ShimmerCard />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurentMenu?.cards[0]?.card?.card?.info;
  const { cards } =
    restaurentMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;

  return (
    <div>
      <h1>{name}</h1>
      <p>
        {cuisines.join(", ") +
          " - " +
          costForTwoMessage +
          " - " +
          avgRating +
          " Rating"}
      </p>
      <p>Menu</p>
      <ul>
        {cards[2].card.card.itemCards.map((menu) => {
          const { name, price, description, id, defaultPrice } = menu.card.info;
          return (
            <li key={id}>
              {name} - <b>Rs. {price / 100 || defaultPrice / 100}</b>{" "}
              <p>{description}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Restaurent;
