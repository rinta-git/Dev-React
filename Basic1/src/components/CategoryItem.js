import { CARD_IMG } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";

const CategoryItem = (props) => {
  const { items } = props;
  const dispatch = useDispatch();
  const addToCart = (item) => {
    dispatch(addItem(item));
  };
  return (
    <>
      {items.map((item) => {
        return (
          <div
            key={item?.card?.info?.id}
            className="m-3 p-3 border-b flex justify-between"
            data-testid="foodItems"
          >
            <div className="w-9/12">
              <span className="font-medium">{item?.card?.info?.name}</span>
              <div>
                ₹
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </div>
              <p className="text-sm text-gray-400">
                {item?.card?.info?.description}
              </p>
            </div>
            <div className="w-3/12 relative ">
              <img
                className="rounded-md min-h-full"
                src={CARD_IMG + item?.card?.info?.imageId}
                alt={item?.card?.info?.name}
              />
              <button
                className="border bg-white text-green-600 font-bold text-sm absolute left-9 translate-y-3 bottom-1 py-2 px-4 rounded-md"
                onClick={() => addToCart(item)}
              >
                ADD +
              </button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CategoryItem;
