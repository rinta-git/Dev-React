import ShimmerCard from "./ShimmerCard";
import useRestaurentMenu from "../utils/useRestaurentMenu";
import { useParams } from "react-router-dom";
import RestaurentMenu from "./RestaurentMenu";
import { useState } from "react";

const Restaurent = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const { resId } = useParams();

  const restaurentMenu = useRestaurentMenu(resId); //using custom hook to fetch details

  if (restaurentMenu === null) return <ShimmerCard />;

  const { name, cuisines, costForTwoMessage, avgRating } =
    restaurentMenu?.cards[0]?.card?.card?.info;
  const { cards } =
    restaurentMenu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR;
  const categoriesList = cards.filter(
    (list) =>
      list.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-left w-6/12 m-auto p-5">
      <div className="border-b border-dashed border-gray-400 p-3">
        <h1 className="font-bold">{name}</h1>
        <p className="text-sm text-gray-500">
          {cuisines.join(", ") +
            " - " +
            costForTwoMessage +
            " - " +
            avgRating +
            " Rating"}
        </p>
      </div>
      {categoriesList.map((category, index) => {
        return (
          <RestaurentMenu
            key={category.card.card.title}
            menuDetails={category.card.card}
            showItemsList={index === activeIndex ? true : false}
            setShowIndex={() => {
              setActiveIndex(index);
            }}
          />
        );
      })}
    </div>
  );
};

export default Restaurent;
