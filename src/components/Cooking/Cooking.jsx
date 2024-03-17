import CookingList from "../CookingList/CookingList";


const Cooking = ({cooking}) => {

    const totalTime = cooking.reduce((p, c )=> p + parseFloat(c.preparing_time), 0)
    const totalCal = cooking.reduce((p, c )=> p + parseFloat(c.calories), 0)
    console.log(typeof totalTime);

    // console.log(cooking)
    return (
        <div>
           <h4 className="text-center text-2xl font-semibold text-[#282828] mt-6 md:mt-8">Currently cooking: {cooking.length}</h4>

           <div className="bg-[#2828281A] mx-auto max-w-[350px] h-[1px] mt-4"></div>

         <div className="w-full">
             <table className="table-auto fira">
                    <thead className="w-full text-[#878787] font-medium">
                        <tr>
                            <th className="px-4 md:px-8 lg:px-9 xl:px-[42px] 2xl:px-12"></th>
                            <th className="px-4 md:px-8 lg:px-9 xl:px-[42px] 2xl:px-12">Name</th>
                            <th className="px-4 md:px-8 lg:px-9 xl:px-[42px] 2xl:px-12">Time</th>
                            <th className="px-4 md:px-8 lg:px-9 xl:px-[42px] 2xl:px-12">Calories</th>
                        </tr>
                    </thead>
                    <tbody className="w-full">

                     {
                        cooking.map( (item, idx) => <CookingList key={idx} idx={idx} item={item}></CookingList>)
                     }   
                        
                    </tbody>
                </table>  
                <div className="flex justify-end mr-6 mt-6">
                     <div className="flex gap-4 text-[#282828CC] font-medium">
                        <p>Total Time =  <br /> <span>{totalTime}</span> minutes</p>
                        <p>Total Calories = <br /><span>{totalCal}</span> calories </p>
                     </div>

                </div>

            </div>     
        </div>
    );
};

export default Cooking;