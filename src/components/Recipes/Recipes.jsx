import Recipe from "../Recipe/Recipe";

const Recipes = ({recipes}) => {
    return (
        <div className="lg:col-span-7">
           
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">

                {
                    recipes.map(recipe => <Recipe recipe={recipe}></Recipe>)
                }


            </div>
 
       </div>
    );
};

export default Recipes;