import CategoryItem from "./CategoryItem";
import { useState } from "react";

const RestaurentMenu = (props) => {
  const { menuDetails, showItemsList, setShowIndex } = props;
  const [closeIndex, setCloseIndex] = useState(false);
  const handleItemsDispay = () => {
    setShowIndex();
    setCloseIndex(closeIndex)
  };
  return (
    <div>
      <div key={menuDetails.title} className="shadow-lg ">
        <div
          className="flex justify-between items-center m-3 p-3 cursor-pointer"
          onClick={handleItemsDispay}
        >
          <span className="font-bold">
            {menuDetails.title} ({menuDetails.itemCards.length})
          </span>
          {showItemsList ? (
            <span>
              <svg
                class="h-8 w-8 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </span>
          ) : (
            <span>
              <svg
                class="h-8 w-8 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </span>
          )}
        </div>
        {showItemsList && <CategoryItem items={menuDetails.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurentMenu;
