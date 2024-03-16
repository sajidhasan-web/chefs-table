import Recipe from "../Recipe/Recipe";

const Recipes = () => {
    return (
        <div className="lg:col-span-7">
           
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <Recipe></Recipe>
                <Recipe></Recipe>
                <Recipe></Recipe>
                <Recipe></Recipe>
                <Recipe></Recipe>
                <Recipe></Recipe>

            </div>
 
       </div>
    );
};

export default Recipes;