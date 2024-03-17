

const WantToCookList = ({p,idx, handlePreparing}) => {

  

          
    return (
        
            <tr className="bg-[#28282813] text-[#878787] w-full text-center">
               <td className= "lg:px-2 xl:px-1 2xl:px-7">{idx + 1}</td>
               <td  className="lg:px-2 xl:px-1 2xl:px-7">{p.recipe_name}</td>
               <td  className="lg:px-2 xl:px-1 2xl:px-7">{p.preparing_time}</td>
               <td  className="lg:px-2 xl:px-1 2xl:px-7">{p.calories}</td>
               <td><button onClick={()=>handlePreparing(p, p.recipe_id)} className="btn bg-[#0BE58A] px-3 py-2 2xl:px-6 2xl:py-3 text-sm 2xl:text-lg font-medium text-[#150B2B] rounded-l-full rounded-r-full ">Preparing</button></td>
            </tr>
      
        
    );
};

export default WantToCookList;