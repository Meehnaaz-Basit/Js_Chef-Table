import { IoTimeOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";

const Recipe = ({ recipe, handleWantToCook }) => {
  const {
    recipe_name,
    recipe_image,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;

  return (
    <div className="p-6 border rounded-2xl space-y-5">
      <div>
        <img className="rounded-xl" src={recipe_image} alt="Recipe Image" />
      </div>
      {/* title */}
      <div className="space-y-3">
        <h3 className="font-semibold text-xl text-indigo-950">{recipe_name}</h3>
        <p className="fira-font">{short_description}</p>
      </div>
      {/* ingredients dynamic */}
      <div className="border-y py-5 space-y-3">
        <h3 className="text-lg font-medium">
          Ingredients: <span>{ingredients.length}</span>
        </h3>
        <ul className="list-disc ml-6 fira-font space-y-2">
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
          {/* <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li>
          <li>Lorem, ipsum dolor.</li> */}
        </ul>
      </div>
      {/* time */}
      <div className="flex items-center gap-6 fira-font">
        <div className="flex items-center gap-2">
          <IoTimeOutline />
          <span>{preparing_time} minutes</span>
        </div>
        <div className="flex items-center gap-2">
          <AiOutlineFire />
          <span>{calories} calories</span>
        </div>
      </div>
      {/*  */}
      <button
        onClick={handleWantToCook}
        className="font-bold bg-green-400 py-3 px-6 rounded-full"
      >
        Want to Cook
      </button>
    </div>
  );
};

export default Recipe;
