import CookingList from "../CookingList/CookingList";


const Cooking = ({cooking}) => {

    // console.log(cooking)
    return (
        <div>
           <h4 className="text-center text-2xl font-semibold text-[#282828] mt-6 md:mt-8">Currently cooking: {cooking.length}</h4>

           <div className="bg-[#2828281A] mx-auto max-w-[350px] h-[1px] mt-4"></div>

         <div className="w-full">
             <table className="table-auto fira">
                    <thead className="w-full text-[#878787] font-medium">
                        <tr>
                            <th className="px-2 xl:px-12"></th>
                            <th className="px-2 xl:px-12">Name</th>
                            <th className="px-2 xl:px-12">Time</th>
                            <th className="px-2 xl:px-12">Calories</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">

                     {
                        cooking.map( (item, idx) => <CookingList key={idx} item={item}></CookingList>)
                     }   
                        
                    </tbody>
                </table>    
            </div>     
        </div>
    );
};

export default Cooking;