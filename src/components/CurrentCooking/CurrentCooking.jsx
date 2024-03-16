const CurrentCooking = ({ currentTab }) => {
  // console.log("current", currentCooking);
  const { recipe_name, preparing_time, calories } = currentTab;
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table">
          <tbody className="text-center">
            <tr>
              <th>1</th>
              <td>{recipe_name} </td>
              <td>{preparing_time} minutes</td>
              <td>{calories} calories</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CurrentCooking;
