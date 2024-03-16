import Cooking from "../Cooking/Cooking";
import Recipe from "../Recipe/Recipe";
import WantToCook from "../WantToCook/WantToCook";

const Cook = () => {
    return (
       <div className="lg:col-span-5 border rounded-xl lg:h-[650px]">
            
            <WantToCook></WantToCook>
            <Cooking></Cooking>
        </div>
    );
};

export default Cook;