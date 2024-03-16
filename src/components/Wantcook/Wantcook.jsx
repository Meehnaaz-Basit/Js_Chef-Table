import PropTypes from "prop-types";
const Wantcook = ({ foodInfo, serialNumber, handlePreparing }) => {
  // console.log(foodInfo);
  const { recipe_id, recipe_name, preparing_time, calories } = foodInfo;

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
                <button
                  onClick={() => handlePreparing(recipe_id)}
                  className="bg-green-400 border-2 border-green-400 hover:bg-transparent hover:border-black transition-all px-5 py-2 rounded-full text-black font-semibold"
                >
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
