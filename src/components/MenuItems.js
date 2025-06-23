import { CLOUDINARY_IMAGE_URL } from "./constants"

const MenuItems = ({ name, price, description,imageId, defaultPrice }) => {
    return (
        <div className="relative flex justify-between bg-gray-100 my-4">
            <div className="p-4 rounded w-9/12">
                <div className="font-bold">{name}</div>
                <div> ₹ {price ? price / 100 : defaultPrice / 100}</div>
                <div className="mt-3 text-xs">{description}</div>
            </div>
            <div className="w-3/12">
                <img src={CLOUDINARY_IMAGE_URL+imageId} className="h-auto p-4 rounded-2xl"/>
            </div>
        </div>
    )
}

export default MenuItems