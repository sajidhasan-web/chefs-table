import { LuClock3 } from "react-icons/lu";
import { RiFireLine } from "react-icons/ri";

const Recipe = () => {
    return (
        <div className="border rounded-xl">
             <div className="p-4 bg-white rounded-xl hover:drop-shadow-lg duration-500 hover:scale-105">
                <div className="rounded-lg w-full h-[250px]" style={{ backgroundImage: 'url(https://i.ibb.co/ftmnFhT/Spaghetti-Carbonara.jpg})', backgroundSize: 'cover', backgroundPosition: 'center' }}>
                </div>
                <p className="text-xl font-semibold text-[#1C1B1B] mt-4">Hello this is course name</p>
                <p className="text-[#878787] mt-4 fira">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat aliquam omnis tenetur cumque animim ?</p>

                {/* divider */}
                <div className="bg-[#2828281A] w-full h-[1px] mt-4"></div>

                <div>
                    <h4 className="text-[#282828] text-lg font-medium">Ingredients: 0</h4>
                    <ul className="list-disc pl-4 text-[#878787] fira text-lg">
                        <li>hello</li>
                    </ul>
                </div>

                {/* divider */}
                <div className="bg-[#2828281A] w-full h-[1px] mt-4"></div>

                <div className="flex justify-between mt-5">

                    <div className="flex items-center gap-2">
                        <p><LuClock3 /></p>
                        <p>30 minutes</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <p><RiFireLine /></p>
                        <p>600 calories</p>
                    </div>
                </div>
                <button className="btn bg-[#0BE58A] px-4 py-2 md:px-6 md:py-4 text-lg font-medium text-[#150B2B] mt-6 rounded-l-full rounded-r-full">Want to Cook</button>
            </div>
            
        </div>
    );
};

export default Recipe;