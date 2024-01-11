import { useState } from "react";
import CategoryItemCard from "./CategoryItemCard";

const RestaurantCategory = (props) => {
    const { data, showItem, setMyShowIndex } = props;
    const { title, itemCards } = data;

    // 1) making state to show / hide CategoryItemCard
    const [showItemCard, setShowItemCard] = useState(false);

    // 2) making a func. to show / hide CategoryItemCard when we click on it
    const handleShow = () => {
        setMyShowIndex();
        setShowItemCard(!showItemCard);
    }
    // setMyShowIndex() ? setShowItemCard(true) : setShowItemCard(false);

    return (
        <div>
            <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
                <div className="flex justify-between cursor-pointer" onClick={handleShow}>
                    <span className="font-bold text-lg">{title} ({itemCards.length})</span>
                    <span className="font-bold text-lg">⬇️</span>
                </div>

                {/* {showItemCard && <CategoryItemCard items={itemCards} />} */}

                {showItemCard && showItem && <CategoryItemCard items={itemCards} />}
            </div>
        </div>


    )
}

export default RestaurantCategory;