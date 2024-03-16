

const Cooking = () => {
    return (
        <div>
           <h4 className="text-center text-2xl font-semibold text-[#282828] mt-6 md:mt-8">Currently cooking: 02</h4>

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
                      <tr className="bg-[#28282813] text-[#878787] w-full">
                          <td className="px-2 xl:px-12">1</td>
                          <td  className="px-2 xl:px-12">The Sliding</td>
                          <td  className="px-2 xl:px-12">Malcolm Lockyer</td>
                          <td  className="px-2 xl:px-12">1961</td>
                      </tr>   
                        
                    </tbody>
                </table>    
            </div>     
        </div>
    );
};

export default Cooking;