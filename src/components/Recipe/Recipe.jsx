import { LuClock3 } from "react-icons/lu";
import { RiFireLine } from "react-icons/ri";
import { MdArrowRightAlt } from "react-icons/md";

const Recipe = ({recipe, handleWantToCook}) => {

    const {recipe_id, recipe_name, img, short_description, ingredients, preparing_time, calories} = recipe

    return (
        <div className="border rounded-xl">
             <div className="p-4 bg-white rounded-xl hover:drop-shadow-lg duration-500 hover:scale-105">
                <div className="rounded-lg w-full h-[250px]" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <p className="text-xl font-semibold text-[#1C1B1B] mt-4">{recipe_name}</p>
                <p className="text-[#878787] mt-4 fira">{short_description.slice(0, 45)} . . . . <br /><span className="text-[#0BE58A] flex items-center"><a href="">read more </a><MdArrowRightAlt /></span></p>

                {/* divider */}
                <div className="bg-[#2828281A] w-full h-[1px] mt-4"></div>

                <div>
                    <h4 className="text-[#282828] text-lg font-medium">Ingredients: {ingredients.length}</h4>
                    <ul className="list-disc pl-4 text-[#878787] fira text-lg">
                        {
                            ingredients.map((ing, idx) => <li key={idx}>{ing}</li>)
                        }
                    </ul>
                </div>

                {/* divider */}
                <div className="bg-[#2828281A] w-full h-[1px] mt-4"></div>

                <div className="flex justify-between mt-5">

                    <div className="flex items-center gap-2">
                        <p><LuClock3 /></p>
                        <p>{preparing_time} minutes</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p><RiFireLine /></p>
                        <p>{calories}</p>
                    </div>
                </div>
                <button onClick={()=>handleWantToCook(recipe, recipe_id)} className="btn bg-[#0BE58A] hover:bg-[#0be58a96] px-4 py-2 md:px-6 md:py-4 text-lg font-medium text-[#150B2B] mt-6 rounded-l-full rounded-r-full">Want to Cook</button>
            </div>
            
        </div>
    );
};

export default Recipe;