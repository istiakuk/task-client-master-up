import cancelled from "../../assets/project/cancelled.svg";
import completed from "../../assets/project/completed.svg";
import inprogress from "../../assets/project/inprogress.svg";
import notstarted from "../../assets/project/notstarted.svg";
import kanban from "../../assets/project/kanban.svg";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { IoEyeOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import { MdOutlineCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const ProjectView = () => {
   
  const status = (
    <>
      <div className="py-[.2rem] px-[.4rem] text-[#FFFFFF] bg-[#8B5CF6] rounded-md">
        In progress
      </div>
    </>
  );
  return (
    <div className="p-[2rem] w-full">
      <h1 className="text-4xl text-[#8B5CF6] font-[600]">Project View</h1>
      <hr className="solid mt-[1rem]"></hr>
      <h1 className="text-3xl font-[600]">Task List</h1>
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
                <th className="px-[1rem] mx-auto">Task</th>
                <th className="px-[1rem] mx-auto">Project</th>
                <th className="px-[1rem] mx-auto">Start Date</th>
                <th className="px-[1rem] mx-auto">Finish Date</th>
                <th className="px-[1rem] mx-auto">States</th>
                <th className="px-[1rem] mx-auto">Assigned</th>
                <th className="px-[1rem] mx-auto">Action</th>
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
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">Task Title Here</div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="mx-auto w-fit">Project Title</div>
                </td>
                <td>
                  <div className="mx-auto w-fit">2024-03-14</div>
                </td>
                <td>
                  <div className="mx-auto w-fit">2024-03-14</div>
                </td>
                <td>{status}</td>
                <td>
                  <div className="mx-auto w-fit">x, y, z</div>
                </td>
                <td>
                  <div className="flex justify-center items-center">
                    <IoEyeOutline className="text-2xl m-[.2rem]" />
                    <FiEdit className="text-2xl m-[.2rem] text-[#8B5CF6]" />
                    <MdOutlineCancel className="text-2xl m-[.2rem] text-[#FB0000]" />
                  </div>
                </td>
              </tr>
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

export default ProjectView;
