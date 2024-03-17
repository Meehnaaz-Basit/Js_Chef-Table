import PropTypes from "prop-types";
import Wantcook from "../Wantcook/Wantcook";
import CurrentCooking from "../CurrentCooking/CurrentCooking";

const Sidebars = ({
  foodInfos,
  serialNumber,
  handlePreparing,
  currentCooking,
}) => {
  // console.log(currentCooking, "CurrentCooking");
  // time
  let totalPreparationTime = 0;
  for (let i = 0; i < currentCooking.length; i++) {
    totalPreparationTime += currentCooking[i].preparing_time;
  }
  // calories
  let totalCalories = 0;
  for (let i = 0; i < currentCooking.length; i++) {
    totalCalories += currentCooking[i].calories;
  }
  //
  return (
    <div className="lg:w-2/5 md:w-1/2 h-min border rounded-2xl lg:p-5 p-1 lg:mt-0 mt-8">
      {/* want to cook */}

      <div>
        <div className="text-center font-bold text-2xl border-b p-1 mb-5">
          <h1>Want to cook: {serialNumber}</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr className="text-center">
                <th></th>
                <th>Name</th>
                <th>Time (mins)</th>
                <th>Calories</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {foodInfos.map((foodInfo, index) => (
                <Wantcook
                  key={index}
                  foodInfo={foodInfo}
                  serialNumber={index + 1}
                  handlePreparing={handlePreparing}
                ></Wantcook>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* want to cook ends */}
      {/* current cooking */}
      <div>
        <div className="text-center font-bold text-2xl border-b p-1 mb-5 mt-8">
          <h1>Currently Cooking: {currentCooking.length}</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table table-xs">
            <thead>
              <tr className="">
                <th></th>
                <th>Name</th>
                <th className="text-center">Time (mins)</th>
                <th className="text-center">Calories</th>
              </tr>
            </thead>
            <tbody>
              {currentCooking.map((currentTab, id) => (
                <CurrentCooking
                  key={id}
                  currentTab={currentTab}
                  serialNumber={id + 1}
                ></CurrentCooking>
              ))}
              {/*  */}
              <tr className="border-b-0">
                <td></td>
                <td></td>
                <td className="border-t-2 text-center">
                  Total Time = <br />
                  <span>{totalPreparationTime} mins</span>
                </td>
                <td className="border-t-2 text-center">
                  Total Calories = <br />
                  <span>{totalCalories}</span>
                </td>
              </tr>
              {/*  */}
            </tbody>
          </table>
        </div>
      </div>

      {/* current cooking ends */}
    </div>
  );
};

Sidebars.propTypes = {
  foodInfos: PropTypes.array.isRequired,
  serialNumber: PropTypes.number.isRequired,
  handlePreparing: PropTypes.func.isRequired,
  currentCooking: PropTypes.array.isRequired,
};

export default Sidebars;
