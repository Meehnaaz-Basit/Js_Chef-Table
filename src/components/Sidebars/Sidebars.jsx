import Wantcook from "../Wantcook/Wantcook";

const Sidebars = ({ foodInfos }) => {
  return (
    <div className="md:w-2/5 h-min border rounded-2xl p-5">
      <div>
        <div className="text-center font-bold text-2xl border-b p-1 mb-5">
          <h1>Want to cook: 01</h1>
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
          <Wantcook key={index} foodInfo={foodInfo}></Wantcook>
        ))}
      </div>
    </div>
  );
};

export default Sidebars;
