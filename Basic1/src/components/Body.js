import Card, { VegCard } from "./Card";
import { useState, useEffect, useContext } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import { RES_LIST_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";
const Body = () => {
  const [restaurents, setRestaurentList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchedList, setSearchedList] = useState([]);
  const { loggedInUser, setUserName } = useContext(UserContext);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(RES_LIST_API);
    const json = await data.json();
    setRestaurentList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setSearchedList(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const VegOnlyCard = VegCard(Card);

  const onlineStatus = useOnlineStatus(); //custome hook
  if (!onlineStatus) {
    return <h1>Looks like you are offline😞. Check your internet please.</h1>;
  }

  return restaurents.length === 0 ? (
    <ShimmerCard />
  ) : (
    <>
      <div className="flex my-10 px-4">
        <button
          className="border border-solid rounded-md p-2"
          onClick={() => {
            const filteredList = restaurents.filter(
              (restaurent) => restaurent?.info?.avgRating >= 4
            );
            setSearchedList(filteredList);
          }}
        >
          Top Rated Restaurents
        </button>
        <div className="mx-[15px]">
          <input
            type="text"
            data-testid="searchInput"
            className="border border-stone-900 mx-2 h-full bg-gray-200 hover:bg-white text-left p-2"
            value={searchInput}
            placeholder="Search for restaurent"
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="border border-solid rounded-md p-2"
            onClick={() => {
              const filteredData = restaurents.filter((res) =>
                res?.info?.name
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
        <input
          type="text"
          className="border"
          value={loggedInUser}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>
      <div className="flex  flex-wrap">
        {searchedList.map((restaurent) => {
          return (
            <Link
              key={restaurent?.info?.id}
              to={"/restaurants/" + restaurent?.info?.id}
            >
              {restaurent?.info?.veg ? (
                <VegOnlyCard restaurentDetails={restaurent.info} />
              ) : (
                <Card restaurentDetails={restaurent.info} />
              )}
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
