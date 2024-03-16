import PropTypes from "prop-types";
const Wantcook = ({ foodInfo, serialNumber }) => {
  // console.log(foodInfo);
  const { recipe_name, preparing_time, calories } = foodInfo;

  return (
    <div>
      {/*  */}
      <div className="overflow-x-auto">
        <table className="table">
          <tbody className="text-center">
            {/* row 1 */}

            <tr>
              <th>{serialNumber}</th>
              <td>{recipe_name}</td>
              <td>{preparing_time} minutes</td>
              <td>{calories} calories</td>
              <td>
                <button className="bg-green-400 px-5 py-2 rounded-full text-black font-semibold">
                  Preparing
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*  */}
    </div>
  );
};

Wantcook.propTypes = {
  foodInfo: PropTypes.object.isRequired,
  serialNumber: PropTypes.number.isRequired,
};

export default Wantcook;
