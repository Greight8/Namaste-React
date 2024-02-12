import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import CategoryItemCard from "./CategoryItemCard";

const Cart = () => {
    // 1) subscribing to our redux store through selector hook
    const cartItem = useSelector((store) => {
        return store.cart.items
    })

    const dispatch = useDispatch()

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="font-2xl font-bold">Cart</h1>

            {/* now we will show cart items */}
            <div className="w-6/12 m-auto">
                <button className="p-2 rounded-lg bg-black text-white m-2" onClick={handleClearCart}>clear cart</button>
                {cartItem.length === 0 && <h2>Cart Empty</h2>}
                <CategoryItemCard items={cartItem} />
            </div>
        </div>

    )
}

export default Cart;