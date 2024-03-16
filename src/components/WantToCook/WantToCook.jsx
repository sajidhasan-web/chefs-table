

const WantToCook = () => {
    return (
        <div>
           <h4 className="text-center text-2xl font-semibold text-[#282828] mt-6 md:mt-8">Want to cook: 01</h4>

           <div className="bg-[#2828281A] mx-auto max-w-[350px] h-[1px] mt-4"></div>

         <div className="w-full">
             <table className="table-auto fira">
                    <thead className="w-full text-[#878787] font-medium">
                        <tr className="text-center">
                            <th className="p-3"></th>
                            <th className="p-3">Name</th>
                            <th className="p-3">Time</th>
                            <th className="p-3">Calories</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">
                       
                      <tr className="bg-[#28282813] text-[#878787] w-full text-center">
                          <td className=" xl:p-7">1</td>
                          <td  className=" xl:p-7">The Sliding</td>
                          <td  className=" xl:p-7">Malcolm Lockyer</td>
                          <td  className=" xl:p-7">1961</td>
                          <td><button className="btn bg-[#0BE58A] px-4 py-2 text-lg font-medium text-[#150B2B] rounded-l-full rounded-r-full md:ml-6">Preparing</button></td>
                      </tr>   
                        
                    </tbody>
                </table>    
            </div>  
            
    
            
        </div>
    );
};

export default WantToCook;