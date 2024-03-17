import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = ({ handleWantToCook }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch("recipe.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  return (
    <div className="lg:w-3/5 md:w-1/2 grid lg:grid-cols-2 md:grid-cols-1 gap-6">
      {recipes.map((recipe, id) => (
        <Recipe
          key={id}
          recipe={recipe}
          handleWantToCook={handleWantToCook}
        ></Recipe>
      ))}
    </div>
  );
};

Recipes.propTypes = {
  handleWantToCook: PropTypes.func,
};

export default Recipes;
