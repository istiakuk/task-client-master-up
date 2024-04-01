import { useEffect, useState } from "react";
import Attendance from "../Attendance/Attendance";
import { useNavigate } from "react-router-dom";

const Attendances = () => {
  const [attendances, setAttendances] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(
      `http://localhost:5000/attendance/${localStorage.getItem("userId")}`,
      {
        method: "GET",
        headers: {
          "x-access-token": localStorage.getItem("accessToken"),
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setAttendances(data);
      });
  }, []);

  console.log(attendances);
  if (attendances.error) {
    navigate("/login");
  }
  return (
    <div className="p-[2rem] w-full">
      <h1 className="text-4xl text-[#8B5CF6] font-[600]">Attendance List</h1>
      <hr className="solid mt-[1rem]"></hr>

      <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] w-full mt-[3rem] rounded-xl p-[1rem]">
        <div className="overflow-x-auto">
          <table className="table w-full my-[1rem] text-center">
            {/* head */}
            <thead className="bg-[#E8DEFD]">
              <tr>
                <th className="px-[1rem] mx-auto"></th>
                <th className="px-[1rem] mx-auto">Employee</th>
                <th className="px-[1rem] mx-auto">StartTime</th>
                <th className="px-[1rem] mx-auto">finishTime</th>
                <th className="px-[1rem] mx-auto">Status</th>
                <th className="px-[1rem] mx-auto">Actions</th>
              </tr>
            </thead>
            <tbody>
              {attendances.map((attendance) => (
                <Attendance
                  key={attendance._id}
                  attendance={attendance}
                ></Attendance>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex w-full">
          <div className="text-nowrap">Showing 0 to 0 of 0 entries</div>
          <div className="w-full flex  justify-end">
            <button className="text-[#8B5CF6] border border-[#8B5CF6] px-[.2rem] rounded-md me-[1rem]">
              {"< "}Previous
            </button>
            <button className="text-[#8B5CF6] border border-[#8B5CF6] px-[.2rem] rounded-md">
              Next{" >"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Attendances;
