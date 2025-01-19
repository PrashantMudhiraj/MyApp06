import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItems } from "../Redux/cartSlice";

const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    // console.log("-----", items);

    const handleAddItem = (item) => {
        dispatch(addItems(item));
    };

    return (
        <div>
            {items.map((item) => {
                return (
                    <div
                        key={item.card.info.id}
                        className="p-1 m-3 border-gray-200 border-b-2 text-left"
                    >
                        <div className="pb-3 flex justify-between space-x-9 ">
                            <div className=" w-4/5">
                                <span>{item.card.info.name}</span>
                                <span>
                                    - ₹
                                    {item.card.info?.price / 100 ||
                                        item.card.info?.defaultPrice / 100}
                                </span>
                                <p className="text-xs  pt-3">
                                    {item.card.info.description}
                                </p>
                            </div>
                            <div className="w-28">
                                <button
                                    className="absolute bg-green-400 px-3 font-semibold rounded-md"
                                    onClick={() => handleAddItem(item)}
                                >
                                    Add
                                </button>
                                <img
                                    src={CDN_URL + item.card.info.imageId}
                                    className="object-contain rounded-lg shadow-md"
                                />
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
