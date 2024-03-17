import PropTypes from "prop-types";
const Wantcook = ({ foodInfo, serialNumber, handlePreparing }) => {
  // console.log(foodInfo);
  const { recipe_id, recipe_name, preparing_time, calories } = foodInfo;

  return (
    <>
      <tr>
        <th>{serialNumber}</th>
        <td>{recipe_name}</td>
        <td className="text-center">{preparing_time}</td>
        <td className="text-center">{calories}</td>
        <td>
          <button
            onClick={() => handlePreparing(recipe_id)}
            className="bg-green-400 border-2 border-green-400 hover:bg-transparent hover:border-black transition-all px-5 py-2 rounded-full text-black font-semibold"
          >
            Preparing
          </button>
        </td>
      </tr>
    </>
  );
};

Wantcook.propTypes = {
  foodInfo: PropTypes.object.isRequired,
  serialNumber: PropTypes.number.isRequired,
};

export default Wantcook;
