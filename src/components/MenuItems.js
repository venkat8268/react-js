import { CLOUDINARY_IMAGE_URL } from "./constants"
import { useDispatch } from "react-redux"
import { addItem, clearCart } from "../components/utils/cartSlice"

const MenuItems = (item) => {
        
    const { name, price, description,imageId, defaultPrice } = item;
    const dispatch = useDispatch();
    
    const handleCart = (item) => {        
        dispatch(addItem(item));
    }

    return (
        <div className="relative flex justify-between bg-gray-100 my-4">
            <div className="p-4 rounded w-9/12">
                <div className="font-bold">{name}</div>
                <div> ₹ {price ? price / 100 : defaultPrice / 100}</div>
                <div className="mt-3 text-xs">{description}</div>
            </div>
            <div className="w-3/12 relative">
                <button className="absolute top-6 right-6 bg-black text-white px-2 py-1 font-bold rounded cursor-pointer"  onClick={() => handleCart(item)}>Add</button>
                <img src={CLOUDINARY_IMAGE_URL+imageId} className="h-auto p-4 rounded-2xl"/>
            </div>
        </div>
    )
}

export const removeItemFromCart = (MenuItems) => {
    return ({item}) => {
        
        const dispatch = useDispatch();
        
        const handleClearCart = () => {
            dispatch(clearCart())
        }

        return (
            <>
                <div className="relative">
                    <div className="absolute bottom-2 left-2 z-10 cursor-pointer" onClick={() => handleClearCart()}>❌</div>
                    <MenuItems {...item} />
                </div>
            </>
        )
    }
}

export default MenuItems