import Card from "./Card";
import restaurentList from "../utils/mock-data";
import { useState } from "react";

const Body = () => {
  const [restaurents, setRestaurentList] = useState(restaurentList);

  return (
    <>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = restaurents.filter(
            (restaurent) => restaurent.info.avgRating >= 4
          );
          setRestaurentList(filteredList);
        }}
      >
        Top Rated Restaurents
      </button>
      <div className="restaurent-container">
        {restaurents.map((restaurent) => {
          return (
            <Card key={restaurent.info.id} restaurentDetails={restaurent} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
