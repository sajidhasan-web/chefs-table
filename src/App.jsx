import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Recipes from "./components/Recipes/Recipes"
import Cook from "./components/Cook/Cook"
import { useEffect, useState } from "react"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

const [recipes, setRecipes] = useState([])
const [wantToCook, setWantToCook] =useState([])
const [cooking, setCooking] =useState([])



console.log(cooking);
 


  useEffect(()=>{
    fetch('./recipesData.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])


 const notify1 = () => toast("This recipe is already exist!");
 const notify2 = () => toast("It's already cooking now!");


  const handleWantToCook =(recipe, recipe_id) =>{
    const isExist = wantToCook.find(recipe => recipe.recipe_id == recipe_id)
    if(!isExist){
      setWantToCook([...wantToCook, recipe])
    }else{
      notify1()
    }
  }

  const handlePreparing = (p, id) =>{
    const filter = wantToCook.filter( item => item.recipe_id !== id)  
     setWantToCook(filter)
     const isExist = cooking.find(item => item.recipe_id == id)
     if(!isExist){
       setCooking([...cooking, p])
     }else{
      notify2()
     }
  }

  
 


  return (
    <div className="container mx-auto px-5 md:px-8 lg:px-10 xl:px-12">
          <Navbar></Navbar>
          <Banner></Banner>
          <div className="mt-8 md:mt-12">
              <h1 className="text-[#150B2B] text-4xl font-semibold text-center">Our Recipes</h1>
              <p className="text-[#150B2B99] text-center mt-6"> Each recipe curated for our personalized cooking classes is meticulously crafted to inspire creativity and ignite passion in the kitchen. <br /> Our collection of recipes spans the culinary spectrum, offering something for every taste and occasion.</p>
          </div>
          <div className="w-full mt-8 lg:mt-12 grid gap-6 grid-cols-1 lg:grid-cols-12">
                  <Recipes recipes={recipes} handleWantToCook={handleWantToCook}></Recipes>
                  <Cook wantToCook={wantToCook} handlePreparing={handlePreparing} cooking={cooking}></Cook>
          </div>
          <ToastContainer/> 
    </div>
  )
}

export default App
