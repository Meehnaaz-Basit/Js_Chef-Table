import { useState } from "react";
import "./App.css";

import Header from "./Header/Header";
import Hero from "./components/Hero/Hero";
import Recipes from "./components/Recipes/Recipes";
import Sidebars from "./components/Sidebars/Sidebars";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [foodInfos, setFoodInfos] = useState([]);
  const [serialNumber, setSerialNumber] = useState(0);

  // want to cook
  const handleWantToCook = (cart) => {
    // check if id exists
    const isRecipeAlreadySelected = foodInfos.filter(
      (existingRecipe) => existingRecipe.recipe_id === cart.recipe_id
    );

    if (isRecipeAlreadySelected.length > 0) {
      toast.warn("This Recipe has already been selected !");

      // alert("already selected");
      return;
    }
    // console.log("clicked", foodInfo);
    const newFoodInfo = [...foodInfos, cart];
    setFoodInfos(newFoodInfo);
    setSerialNumber(serialNumber + 1);
  };

  ///////
  const [currentCooking, setCurrentCooking] = useState([]);
  const handlePreparing = (id) => {
    // console.log("clicked", id);
    const selectedRecipe = foodInfos.find((recipe) => recipe.recipe_id === id);

    if (selectedRecipe) {
      // remove data
      const updatedFoodInfos = foodInfos.filter(
        (recipe) => recipe.recipe_id !== id
      );
      setFoodInfos(updatedFoodInfos);

      // Add the selected recipe to currentCooking
      setCurrentCooking([...currentCooking, selectedRecipe]);
      // decrease num
      setSerialNumber(serialNumber - 1);
    }
  };

  ////
  return (
    <div className="container mx-auto max-w-[1300px] w-[98%] lg-w[84%]">
      <Header></Header>
      <Hero></Hero>
      {/* ***** recipe sec **** */}
      <div className=" py-16">
        {/* heading */}
        <div className="text-center md:max-w-3xl md:m-auto space-y-4">
          <h1 className="text-3xl font-semibold">Our Recipes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.{" "}
          </p>
        </div>
        {/* heading ends */}
        <div className="md:flex mt-8 gap-6">
          {/* left */}

          <Recipes handleWantToCook={handleWantToCook}></Recipes>

          {/* right */}

          <Sidebars
            foodInfos={foodInfos}
            serialNumber={serialNumber}
            handlePreparing={handlePreparing}
            currentCooking={currentCooking}
          ></Sidebars>

          {/*  */}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
