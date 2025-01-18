import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    // console.log("-----", items);
    return (
        <div>
            {items.map((item) => {
                return (
                    <div
                        key={item.card.info.id}
                        className="p-1 m-3 border-gray-200 border-b-2 text-left"
                    >
                        <div className="pb-3 flex justify-between space-x-9">
                            <div>
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
                            <img
                                src={CDN_URL + item.card.info.imageId}
                                className="w-24  rounded-md"
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ItemList;
