import MenuItems from './MenuItems';
import {useState} from "react";

const Menu = ({ title, itemCards }) => {

    const [accordion, setAccordion] = useState(false);

    function toggleAccordion() {
        setAccordion(!accordion);
    }

    return (
        <div className="w-6/12 m-auto my-2.5 p-4 rounded">
            <div className="font-bold text-lg flex justify-between cursor-pointer" onClick={toggleAccordion}>
                <span>{title} ({itemCards.length})</span>
                <span>⬇️</span>
            </div>

            {accordion ? (
                <div>
                    {itemCards.map((itemCards) => {
                        return <MenuItems key={itemCards.card.info.id} {...itemCards.card.info} />
                    })}
                </div>
                ) 
            : 
                (
                    <></>
                )
            }
        </div>
    )
}

export default Menu