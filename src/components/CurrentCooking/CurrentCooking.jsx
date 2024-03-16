const CurrentCooking = ({ currentTab, serialNumber }) => {
  // console.log("current", currentCooking);
  const { recipe_name, preparing_time, calories } = currentTab;

  return (
    <div>
      {/*  */}
      <div className="overflow-x-auto">
        <table className="table">
          <tbody className="">
            <tr>
              <th>{serialNumber}</th>
              <td>{recipe_name} </td>
              <td>{preparing_time}</td>
              <td>{calories}</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/*  */}

      {/*  */}
    </div>
  );
};

export default CurrentCooking;
