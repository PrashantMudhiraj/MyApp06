import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../Redux/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className="pt-28 text-center w-1/2 m-auto">
            <div className="flex justify-between pb-2">
                <h1 className="font-bold text-xl">Cart Items</h1>
                <button
                    className=" bg-black text-white px-2 py-1 rounded-md hover:bg-slate-700"
                    onClick={handleClearCart}
                >
                    Clear cart
                </button>
            </div>
            <div className=" border border-gray-200">
                {cartItems.length !== 0 ? (
                    <ItemList items={cartItems} />
                ) : (
                    <h1>Your cart is empty</h1>
                )}
            </div>
        </div>
    );
};

export default Cart;
