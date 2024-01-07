import { CDN_URL } from "../utils/constants";

const CategoryItemCard = ({ items }) => {
    // const { description, name } = items?.card?.info

    return <div>
        {
            items.map((item) => {
                return <div key={item?.card?.info?.id} className="m-2 p-2 border-b-2 border-gray-200 text-left flex justify-between">

                    <div>
                        <div className="py-2">
                            <span>{item?.card?.info?.name}</span>
                            <div> ₹ {(item?.card?.info?.defaultPrice) / 100 || (item?.card?.info?.price) / 100}</div>
                        </div>

                        <p className="text-xs mr-[85px]">{item?.card?.info?.description}</p>
                    </div>

                    <div className="p-4">
                        <div className="absolute">
                            <button className="p-2 bg-black text-white shadow-lg rounded-lg ">add +</button>
                        </div>
                        <img src={CDN_URL + item?.card?.info?.imageId} className="w-[161px]  rounded-lg" />
                    </div>

                </div>
            })
        }
    </div>
}

export default CategoryItemCard;