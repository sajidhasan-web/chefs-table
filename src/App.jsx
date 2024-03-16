import Banner from "./components/Banner/Banner"
import Navbar from "./components/Navbar/Navbar"
import Recipes from "./components/Recipes/Recipes"
import Cook from "./components/Cook/Cook"
import { useEffect, useState } from "react"

function App() {


  const [recipes, setRecipes] = useState([])

  useEffect(()=>{
    fetch('./recipesData.json')
    .then(res => res.json())
    .then(data => setRecipes(data))
  },[])
  

  return (
    <div className="container mx-auto px-8 md:px-10 lg:px-12">
          <Navbar></Navbar>
          <Banner></Banner>
          <div className="mt-8 md:mt-12">
              <h1 className="text-[#150B2B] text-4xl font-semibold text-center">Our Recipes</h1>
              <p className="text-[#150B2B99] text-center mt-6">Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus vulputate netus pharetra rhoncus. <br /> Eget urna volutpat curabitur elementum mauris aenean neque. </p>
          </div>
          <div className="w-full mt-8 lg:mt-12 grid gap-6 grid-cols-1 lg:grid-cols-12">
                  <Recipes recipes={recipes}></Recipes>
                  <Cook></Cook>
          </div>
    </div>
  )
}

export default App
