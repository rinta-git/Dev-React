import { useDispatch, useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import { clearCart } from "../features/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <>
      <div className="text-center m-4 p-4">
        <h6 className="font-bold">Cart View</h6>
        <button
          className="bg-black w-17 m-3 p-3 text-white rounded-md"
          onClick={() => dispatch(clearCart())}
        >
          Clear Cart
        </button>
        {cartItems.length < 1 && <h2 className="my-3"> Your cart is empty :(</h2>}
        <CategoryItem items={cartItems} />
      </div>
    </>
  );
};

export default Cart;
