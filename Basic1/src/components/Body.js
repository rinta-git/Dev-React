import Card from "./Card";
import { useState, useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
const Body = () => {
  const [restaurents, setRestaurentList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchedList, setSearchedList] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurentList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchedList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  return restaurents.length === 0 ? (
    <ShimmerCard />
  ) : (
    <>
      <div className="filter-container">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restaurents.filter(
              (restaurent) => restaurent.info.avgRating >= 4
            );
            setSearchedList(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
        <div className="search-wrapper">
          <input
            type="text"
            className="serach-box"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredData = restaurents.filter((res) =>
                res.info.name
                  .toLocaleLowerCase()
                  .includes(searchInput.toLocaleLowerCase())
              );
              setSearchedList(filteredData);
              setSearchInput("");
            }}
          >
            Search
          </button>
        </div>
      </div>
      <div className="restaurent-container">
        {searchedList.map((restaurent) => {
          return (
            <Link
              key={restaurent.info.id}
              to={"/restaurants/" + restaurent.info.id}
            >
              {" "}
              <Card restaurentDetails={restaurent} />{" "}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
