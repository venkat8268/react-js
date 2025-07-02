import { CLOUDINARY_IMAGE_URL } from "./constants"
import { useDispatch } from "react-redux"
import { addItem } from "../components/utils/cartSlice"

const MenuItems = ({ name, price, description,imageId, defaultPrice }) => {

    const dispatch = useDispatch();
    
    const handleCart = (itemName) => {
        dispatch(addItem(itemName));
    }

    return (
        <div className="relative flex justify-between bg-gray-100 my-4">
            <div className="p-4 rounded w-9/12">
                <div className="font-bold">{name}</div>
                <div> ₹ {price ? price / 100 : defaultPrice / 100}</div>
                <div className="mt-3 text-xs">{description}</div>
            </div>
            <div className="w-3/12 relative">
                <button className="absolute top-6 right-6 bg-blue-200 px-2 py-1 font-bold rounded cursor-pointer"  onClick={() => handleCart(name)}>Add</button>
                <img src={CLOUDINARY_IMAGE_URL+imageId} className="h-auto p-4 rounded-2xl"/>
            </div>
        </div>
    )
}

export default MenuItems