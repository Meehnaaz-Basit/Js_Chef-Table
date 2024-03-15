const Wantcook = () => {
  return (
    <div>
      {/*  */}
      <div className="overflow-x-auto">
        <div className="text-center font-bold text-2xl border-b p-1 mb-5">
          <h1>Want to cook: 01</h1>
        </div>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Time</th>
              <th>Calories</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            <tr>
              <th>1</th>
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
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

export default Wantcook;
