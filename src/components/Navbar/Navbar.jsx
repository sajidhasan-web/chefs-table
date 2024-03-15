import { IoIosSearch } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { IoReorderThree } from "react-icons/io5";


const Navbar = () => {
    return (
        <div className="container mx-auto py-5 md:py-8 lg:py-12 px-5 md:px-8 lg:px-10 xl:px-12">
           <div className="flex items-center justify-between gap-4 md:gap-6">
               <div className="text-3xl lg:hidden">
                   <IoReorderThree />
               </div>
              <div className="text-2xl md:text-3xl font-bold text-[#150B2B]">Recipe Calories</div>
                <ul className="text-[#150B2BB3] lg:flex gap-12 hidden">
                  <li>Home</li>
                  <li>Recipes</li>
                  <li>About</li>
                  <li>Search</li>
               </ul>
              <div className="flex items-center gap-4">
                   <div className="bg-[#150B2B0D] hidden lg:flex relative px-6 py-3 items-center rounded-[50px]">
                     <span className="text-2xl"><IoIosSearch /></span>
                     <input className="outline-none p-2 bg-transparent" type="text" name="" id="" placeholder=" Search" />
                   </div>
                <div className="h-12 w-12 rounded-full p-2 bg-[#0BE58A] flex justify-center items-center">
                  <CgProfile className="text-2xl"/>
                </div>
              </div>
           </div>
            
        </div>
    );
};

export default Navbar;