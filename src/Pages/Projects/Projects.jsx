import cancelled from "../../assets/project/cancelled.svg";
import completed from "../../assets/project/completed.svg";
import inprogress from "../../assets/project/inprogress.svg";
import notstarted from "../../assets/project/notstarted.svg";
import kanban from "../../assets/project/kanban.svg";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Project from "../Project/Project";

const Projects = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/projects", {
      method: "GET",
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setProjects(data);
      });
  }, []);
  const deleteProject = (id) => {
    fetch(`http://localhost:5000/projects/${id}`, {
      method: "DELETE",
      headers: {
        "x-access-token": localStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === "Project deleted successfully") {
          setProjects(projects.filter((project) => project._id !== id));
        }
      });
  };
  if (projects.error === "Invalid token") {
    navigate("/login");
  }
  // const handleDelete = (id, title) => {
  //   const proceed = confirm(`Are you sure you want to cancel "${title}"?`);
  //   if (proceed) {
  //     fetch(`https://car-doctor-server-p2jz.onrender.com/bookings/${id}`, {
  //       method: "DELETE",
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         if (data.deletedCount > 0) {
  //           alert("Deleted successfully");
  //           setBookings(bookings.filter((booking) => booking._id !== id));
  //         }
  //       });
  //   }
  // };
  return (
    <div className="p-[2rem] w-full">
      <h1 className="text-4xl text-[#8B5CF6] font-[600]">Project List</h1>
      <hr className="solid mt-[1rem]"></hr>
      <div className="grid grid-cols-4 gap-4 w-full mt-[2rem]">
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
          <div>
            <img src={completed} alt="" />
          </div>
          <div className="w-full flex justify-center">
            <div>
              <p>Completed</p>
              <p className="text-3xl font-[600] text-[#8B5CF6]">200</p>
            </div>
          </div>
        </div>
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
          <div>
            <img src={inprogress} alt="" />
          </div>
          <div className="w-full justify-center">
            <div>
              <p>In progress</p>
              <p className="text-3xl font-[600] text-[#8B5CF6]">50</p>
            </div>
          </div>
        </div>
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
          <div>
            <img src={notstarted} alt="" />
          </div>
          <div className="w-full flex justify-center">
            <div>
              <p>Not started</p>
              <p className="text-3xl font-[600] text-[#8B5CF6]">20</p>
            </div>
          </div>
        </div>
        <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] rounded-xl flex items-center p-[1rem]">
          <div>
            <img src={cancelled} alt="" />
          </div>
          <div className="w-full flex justify-center">
            <div>
              <p>Cancelled</p>
              <p className="text-3xl font-[600] text-[#8B5CF6]">15</p>
            </div>
          </div>
        </div>
      </div>
      <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] w-full mt-[3rem] rounded-xl p-[1rem]">
        <div className="w-full flex justify-end">
          <button className="flex items-center text-[#00000050] bg-[#E8DEFD] rounded-md px-[.5rem] py-[.25rem] me-[1rem]">
            <img className="me-[.2rem]" src={kanban} alt="Kanban Image" />
            Kanban View
          </button>
          <Link to="/create-project">
            <button className="flex items-center text-[#FFFFFF] bg-[#8B5CF6] rounded-md px-[.5rem] py-[.25rem]">
              <FiPlusCircle className="pe-[.25rem]" /> Create
            </button>
          </Link>
        </div>
        <hr className="solid mt-[1rem]"></hr>
        <div className="flex items-center w-full mt-[1rem]">
          <select className="border join-item p-[.2rem] rounded-md">
            <option>5</option>
            <option selected>10</option>
            <option>20</option>
          </select>
          <div className="w-full flex justify-end items-center">
            <IoIosSearch className="me-[-1.5rem] z-[1]" />
            <input
              className="z-[0] border ps-[2rem] p-[.2rem] bg-[#E8DEFD] rounded-md"
              placeholder="Search..."
            />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full my-[1rem] text-center">
            {/* head */}
            <thead className="bg-[#E8DEFD]">
              <tr>
                <th className="px-[1rem] mx-auto"></th>
                <th className="px-[1rem] mx-auto">Project</th>
                <th className="px-[1rem] mx-auto">Start Date</th>
                <th className="px-[1rem] mx-auto">Finish Date</th>
                <th className="px-[1rem] mx-auto">Summary</th>
                <th className="px-[1rem] mx-auto">Priority</th>
                <th className="px-[1rem] mx-auto">Assigned</th>
                <th className="px-[1rem] mx-auto">Progress</th>
                <th className="px-[1rem] mx-auto">Action</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <Project
                  key={project._id}
                  deleteProject={deleteProject}
                  project={project}
                ></Project>
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

export default Projects;
