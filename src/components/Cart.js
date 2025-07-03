
import { useSelector, useDispatch } from "react-redux";
import MenuItems, { removeItemFromCart } from "./MenuItems";
import { clearCart } from "./utils/cartSlice";

const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items)
    const MenuItemWithRemoveAction = removeItemFromCart(MenuItems) 

    const handleCart = () => {
        dispatch(clearCart())
    }

    return (
        <div className="min-h-[74vh]">
            <div className="text-center text-2xl font-extrabold mt-8">Your Cart</div>
            {cartItems.length > 0 && <button className="m-auto block mt-4 mb-6 bg-black text-white p-2 rounded font-bold cursor-pointer" onClick={() => handleCart()}>Clear Cart</button>}
            <div className="w-6/12 m-auto">
                {cartItems.length == 0 ? (
                    <>
                        <div className="text-center text-xl font-bold my-4">Oops !!!</div>
                        <div className="text-center font-medium mb-4"> Your cart is empty</div>
                    </>
                )
                    :
                    cartItems.map((item, index) => {
                        return <MenuItemWithRemoveAction key={index} item={item} />
                    })
                }
            </div>
        </div>
    );
}

export default Cart;