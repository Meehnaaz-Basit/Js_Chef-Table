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
  // const [preparedFoods, setPreparedFoods] = useState([]);

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
          <h1>Currently Cooking: 22</h1>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
            </tr>
          </thead>
        </table>
        {currentCooking.map((currentTab, index) => (
          <CurrentCooking key={index} currentTab={currentTab}></CurrentCooking>
        ))}
        {/* <CurrentCooking currentCooking={currentCooking}></CurrentCooking> */}
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
