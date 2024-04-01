import punchin from "../../assets/dashboard/punchin.svg";
import projects from "../../assets/dashboard/projects.svg";
import task from "../../assets/dashboard/task.svg";
import award from "../../assets/dashboard/award.svg";
import announcements from "../../assets/dashboard/announcements.svg";

const Dashboard = () => {
  const status = (
    <>
      <div className="py-[.2rem] px-[.4rem] text-[#FFFFFF] bg-[#8B5CF6] rounded-md">
        In progress
      </div>
    </>
  );
  const handlePunchIn = async () => {
    const response = await fetch("http://localhost:5000/attendance/punch-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("accessToken"),
      },
    });
    console.log(response);
  };
  const handlePunchOut = async () => {
    const response = await fetch("http://localhost:5000/attendance/punch-out", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-access-token": localStorage.getItem("accessToken"),
      },
    });
    console.log(response);
  };
  return (
    <div className="p-[2rem] w-full">
      <h1 className="text-4xl text-[#8B5CF6] font-[600]">Dashboard</h1>
      <hr className="solid mt-[1rem]"></hr>
      <div className="grid grid-cols-2 gap-4 w-full mt-[2rem]">
        <div>
          <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
            <div className="w-full flex items-center">
              <p className="text-nowrap">10:15AM - 5:30AM</p>
              <div className="w-full flex justify-end">
                <button
                  onClick={() => handlePunchIn()}
                  className="flex bg-[#8B5CF6] text-[#FFFFFF] px-[.6rem] py-[.4rem] rounded-full me-[1rem]"
                >
                  <img
                    className="me-[.4rem]"
                    src={punchin}
                    alt="Punch In Image"
                  />
                  Punch In
                </button>
                <button
                  onClick={() => handlePunchOut()}
                  className="flex bg-[#FF0000] text-[#FFFFFF] px-[.6rem] py-[.4rem] rounded-full"
                >
                  <img
                    className="me-[.4rem]"
                    src={punchin}
                    alt="Punch In Image"
                  />{" "}
                  Punch Out
                </button>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-[1rem] mt-[1rem]">
            <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
              <div>
                <img src={projects} alt="" />
              </div>
              <div className="w-full text-center">
                <div>
                  <p>Project</p>
                  <p className="text-3xl font-[600] text-[#8B5CF6]">200</p>
                </div>
              </div>
            </div>
            <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
              <div>
                <img src={task} alt="" />
              </div>
              <div className="w-full text-center">
                <div>
                  <p>Tasks</p>
                  <p className="text-3xl font-[600] text-[#8B5CF6]">500</p>
                </div>
              </div>
            </div>
            <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
              <div>
                <img src={award} alt="" />
              </div>
              <div className="w-full text-center">
                <div>
                  <p>Awards</p>
                  <p className="text-3xl font-[600] text-[#8B5CF6]">25</p>
                </div>
              </div>
            </div>
            <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
              <div>
                <img src={announcements} alt="" />
              </div>
              <div className="w-full text-center">
                <div>
                  <p>Announcements</p>
                  <p className="text-3xl font-[600] text-[#8B5CF6]">15</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
          <div className="py-[.5rem] px-[1rem] bg-[#E8DEFD] font-bold">
            Leave taken vs remaing
          </div>
        </div>
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
          <div className="py-[.5rem] px-[1rem] bg-[#E8DEFD] font-bold">
            Latest Assigned Task
          </div>
          <table className="table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th className="px-[1rem] mx-auto"></th>
                <th className="px-[1rem] mx-auto">Project</th>
                <th className="px-[1rem] mx-auto">States</th>
                <th className="px-[1rem] mx-auto">Assigned</th>
                <th className="px-[1rem] mx-auto">Progress</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="font-bold">Project Title Here</div>
                </td>
                <td>{status}</td>
                <td>
                  <div className="mx-auto w-fit">x, y, z</div>
                </td>
                <td>
                  <div className="mx-auto w-fit">0%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl overflow-hidden">
          <div className="py-[.5rem] px-[1rem] bg-[#E8DEFD] font-bold">
            Latest Assigned Task
          </div>
          <table className="table w-full text-center">
            {/* head */}
            <thead>
              <tr>
                <th className="px-[1rem] mx-auto"></th>
                <th className="px-[1rem] mx-auto">Task</th>
                <th className="px-[1rem] mx-auto">States</th>
                <th className="px-[1rem] mx-auto">Project</th>
                <th className="px-[1rem] mx-auto">Progress</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>
                <td>
                  <div className="font-bold">Task Title Here</div>
                </td>
                <td>{status}</td>
                <td>
                  <div className="font-bold">Project Title Here</div>
                </td>
                <td>
                  <div className="mx-auto w-fit">0%</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
