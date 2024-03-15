import { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import Hero from "./components/Hero/Hero";
import Recipes from "./components/Recipes/Recipes";
import Sidebars from "./components/Sidebars/Sidebars";

function App() {
  const [foodInfos, setFoodInfos] = useState([]);
  // want to cook handle
  const handleWantToCook = (foodInfo) => {
    const newFoodData = [...foodInfos, foodInfo];
    setFoodInfos(newFoodData);
  };

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

          <Sidebars></Sidebars>

          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default App;
