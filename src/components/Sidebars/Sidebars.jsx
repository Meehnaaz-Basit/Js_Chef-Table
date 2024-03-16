import PropTypes from "prop-types";
import Wantcook from "../Wantcook/Wantcook";

const Sidebars = ({ foodInfos, serialNumber }) => {
  return (
    <div className="md:w-2/5 h-min border rounded-2xl p-5">
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
          ></Wantcook>
        ))}
      </div>
    </div>
  );
};

Sidebars.propTypes = {
  foodInfos: PropTypes.object.isRequired,
  serialNumber: PropTypes.object.isRequired,
};

export default Sidebars;
