import { useEffect, useState } from "react";
import Department from "../Department/Department";

const Departments = () => {
  const [departments, setDepartments] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/departments", {
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDepartments(data);
      });
  }, []);
  const deleteDepartment = (id) => {
    fetch(`http://localhost:5000/departments/${id}`, {
      method: "DELETE",
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Department deleted successfully") {
          setDepartments(
            departments.filter((department) => department._id !== id)
          );
        }
      });
  };
  console.log(departments);
  return (
    <div className="p-[2rem] w-full">
      <h1 className="text-4xl text-[#8B5CF6] font-[600]">Department List</h1>
      <hr className="solid mt-[1rem]"></hr>

      <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] w-full mt-[3rem] rounded-xl p-[1rem]">
        <div className="overflow-x-auto">
          <table className="table w-full my-[1rem] text-center">
            {/* head */}
            <thead className="bg-[#E8DEFD]">
              <tr>
                <th className="px-[1rem] mx-auto"></th>
                <th className="px-[1rem] mx-auto">Project</th>
                <th className="px-[1rem] mx-auto">Assigned</th>
                <th className="px-[1rem] mx-auto">Actions</th>
              </tr>
            </thead>
            <tbody>
              {departments.map((department) => (
                <Department
                  key={department._id}
                  deleteDepartment={deleteDepartment}
                  department={department}
                ></Department>
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

export default Departments;
