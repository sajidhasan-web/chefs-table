import { useState } from "react";
import Cooking from "../Cooking/Cooking";
import WantToCook from "../WantToCook/WantToCook";

const Cook = ({wantToCook, handlePreparing, cooking}) => {

    return (
       <div className="lg:col-span-5 border rounded-xl">
            
            <WantToCook wantToCook={wantToCook} handlePreparing={handlePreparing}></WantToCook>
            <Cooking cooking={cooking}></Cooking>
        </div>
    );
};

export default Cook;