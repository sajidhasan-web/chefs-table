import Cooking from "../Cooking/Cooking";
import WantToCook from "../WantToCook/WantToCook";

const Cook = () => {
    return (
       <div className="lg:col-span-5 border rounded-xl xl:h-[650px]">
            
            <WantToCook></WantToCook>
            <Cooking></Cooking>
        </div>
    );
};

export default Cook;