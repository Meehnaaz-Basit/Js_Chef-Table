import { useState } from "react";
import PropTypes from "prop-types";
import Wantcook from "../Wantcook/Wantcook";
import CurrentCooking from "../CurrentCooking/CurrentCooking";

const Sidebars = ({
  foodInfos,
  serialNumber,
  handlePreparing,
  currentCooking,
}) => {
  return (
    <div className="md:w-2/5 h-min border rounded-2xl p-5">
      {/* want to cook */}
      <div>
        <div className="text-center font-bold text-2xl border-b p-1 mb-5">
          <h1>Want to cook: {serialNumber}</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
        </table>
        {foodInfos.map((foodInfo, index) => (
          <Wantcook
            key={index}
            foodInfo={foodInfo}
            serialNumber={index + 1}
            handlePreparing={handlePreparing}
          ></Wantcook>
        ))}
      </div>
      {/* want to cook ends */}
      {/* current cooking */}
      <div>
        <div className="text-center font-bold text-2xl border-b p-1 mb-5 mt-8">
          <h1>Currently Cooking: {currentCooking.length}</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table">
            <thead>
              <tr className="">
                <th></th>
                <th>Name</th>
                <th>Time (min)</th>
                <th>Calories</th>
              </tr>
            </thead>
          </table>

          {currentCooking.map((currentTab, id) => (
            <CurrentCooking
              key={id}
              currentTab={currentTab}
              serialNumber={id + 1}
            ></CurrentCooking>
          ))}
        </div>
      </div>

      {/* current cooking ends */}
    </div>
  );
};

Sidebars.propTypes = {
  foodInfos: PropTypes.array.isRequired,
  serialNumber: PropTypes.number.isRequired,
};

export default Sidebars;
