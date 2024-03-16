import Cooking from "../Cooking/Cooking";
import WantToCook from "../WantToCook/WantToCook";

const Cook = ({wantToCook}) => {

    
    return (
       <div className="lg:col-span-5 border rounded-xl">
            
            <WantToCook wantToCook={wantToCook}></WantToCook>
            <Cooking></Cooking>
        </div>
    );
};

export default Cook;