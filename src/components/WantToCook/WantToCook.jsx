
import WantToCookList from "../WantToCookList/WantToCookList";


const WantToCook = ({wantToCook}) => {

 

    return (
        <div>
           <h4 className="text-center text-2xl font-semibold text-[#282828] mt-6 md:mt-8">Want to cook: {wantToCook.length}</h4>

           <div className="bg-[#2828281A] mx-auto max-w-[350px] h-[1px] mt-4"></div>

         <div className="w-full">
             <table className="table-auto fira">
                    <thead className="w-full text-[#878787] font-medium">
                        <tr className="text-center">
                            <th className="px-2 xl:px-8"></th>
                            <th className="px-2 xl:px-8">Name</th>
                            <th className="px-2 xl:px-8">Time</th>
                            <th className="px-2 xl:px-8">Calories</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">

                       
                      {
                        wantToCook.map((p, idx) => <WantToCookList key={idx} idx={idx} p={p}></WantToCookList>)
                      }

                        
                        
                    </tbody>
                </table>    
            </div>  
            
    
            
        </div>
    );
};

export default WantToCook;