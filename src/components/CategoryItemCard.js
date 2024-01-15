import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const CategoryItemCard = ({ items }) => {
    // const { description, name } = items?.card?.info

    // 1) using dispatch hook to dispatch an action
    const dispatch = useDispatch()

    // 2) making handleAddItem func to add data into items array in cartSlice
    const handleAddItem = () => {
        // dispatch an action
        // pizza = action.payload
        dispatch(addItem("pizza"));
    }

    return <div>
        {
            items.map((item) => {
                return <div key={item?.card?.info?.id} className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between">

                    <div className="w=10/12">
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <div> ₹ {(item?.card?.info?.defaultPrice) / 100 || (item?.card?.info?.price) / 100}</div>
                        </div>

                        <p className="text-xs mr-[85px]">{item?.card?.info?.description}</p>
                    </div>

                    <div className="w-3/12 p-4">
                        <div className="absolute">
                            <button className="p-2 mx-16 bg-black text-white shadow-lg rounded-lg" onClick={handleAddItem}>add +</button>
                        </div>
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-full rounded-lg" />
                    </div>

                </div>
            })
        }
    </div>
}

export default CategoryItemCard;