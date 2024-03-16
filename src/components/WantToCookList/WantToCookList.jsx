

const WantToCookList = ({p,idx}) => {

  

          
    return (
        
            <tr className="bg-[#28282813] text-[#878787] w-full text-center">
               <td className="px-1 lg:p-6 xl:px-7">{idx + 1}</td>
               <td  className="px-1 lg:p-6 xl:px-7">{p.recipe_name}</td>
               <td  className="px-1 lg:p-6 xl:px-7">{p.preparing_time}</td>
               <td  className="px-1 lg:p-6 xl:px-7">{p.calories}</td>
               <td><button className="btn bg-[#0BE58A] px-2 py-1 lg:px-6 lg:py-3 text-sm lg:text-lg font-medium text-[#150B2B] rounded-l-full rounded-r-full md:ml-6">Preparing</button></td>
            </tr>
      
        
    );
};

export default WantToCookList;