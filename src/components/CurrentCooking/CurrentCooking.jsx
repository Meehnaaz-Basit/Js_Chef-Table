import PropTypes from "prop-types";
const CurrentCooking = ({ currentTab, serialNumber }) => {
  // console.log("current", currentCooking);
  const { recipe_name, preparing_time, calories } = currentTab;

  return (
    <>
      <tr>
        <th>{serialNumber}</th>
        <td>{recipe_name} </td>
        <td className="text-center">{preparing_time}</td>
        <td className="text-center">{calories}</td>
      </tr>
    </>
  );
};

CurrentCooking.propTypes = {
  currentTab: PropTypes.object.isRequired,
  serialNumber: PropTypes.number.isRequired,
};

export default CurrentCooking;
