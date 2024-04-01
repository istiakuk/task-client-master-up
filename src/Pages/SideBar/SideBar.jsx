import { Link } from "react-router-dom";
import announcement from "../../assets/sidebar/announcement.svg";
import attendance from "../../assets/sidebar/attendance.svg";
import dashboard from "../../assets/sidebar/dashboard.svg";
import employee from "../../assets/sidebar/employee.svg";
// import hrm from "../../assets/sidebar/hrm.svg";
import leave from "../../assets/sidebar/leave.svg";
import overview from "../../assets/sidebar/overview.svg";
import projects from "../../assets/sidebar/projects.svg";
import report from "../../assets/sidebar/report.svg";
import tasks from "../../assets/sidebar/tasks.svg";
import training from "../../assets/sidebar/training.svg";

const SideBar = () => {
  return (
    <div className="text-center shadow-[0_20px_20px_0px_rgba(0,0,0,0.3)]">
      <Link to="/">
        <div className="my-[1rem]">
          <img className="mx-auto" src={dashboard} alt="" />
          <p>Dashboard</p>
        </div>
      </Link>
      <hr className="solid"></hr>
      <Link to="/overview">
        <div className="my-[1rem]">
          <img className="mx-auto" src={overview} alt="" />
          <p>Overview</p>
        </div>
      </Link>
      <hr className="solid"></hr>
      <Link to="/projects">
        <div className="my-[1rem]">
          <img className="mx-auto" src={projects} alt="" />
          <p>Projects</p>
        </div>
      </Link>
      <hr className="solid"></hr>
      <Link to="/tasks">
        <div className="my-[1rem]">
          <img className="mx-auto" src={tasks} alt="" />
          <p>Tasks</p>
        </div>
      </Link>
      <hr className="solid"></hr>
      {/* <Link>
        <div className="my-[1rem]">
          <img className="mx-auto" src={hrm} alt="" />
          <p>HRM</p>
        </div>
      </Link>
      <hr className="solid"></hr> */}
      <Link>
        <div className="my-[1rem]">
          <img className="mx-auto" src={employee} alt="" />
          <p>Employee</p>
        </div>
      </Link>
      <hr className="solid"></hr>
      <Link>
        <div className="my-[1rem]">
          <img className="mx-auto" src={attendance} alt="" />
          <p>Attendance</p>
        </div>
      </Link>
      <hr className="solid"></hr>
      <Link to="/announcements">
        <div className="my-[1rem]">
          <img className="mx-auto" src={announcement} alt="" />
          <p>Announcement</p>
        </div>
      </Link>
      <hr className="solid"></hr>
      <Link>
        <div className="my-[1rem]">
          <img className="mx-auto" src={leave} alt="" />
          <p>Leave request</p>
        </div>
      </Link>
      <hr className="solid"></hr>
      <Link>
        <div className="my-[1rem]">
          <img className="mx-auto" src={training} alt="" />
          <p>Training</p>
        </div>
      </Link>
      <hr className="solid"></hr>
      <Link>
        <div className="my-[1rem]">
          <img className="mx-auto" src={report} alt="" />
          <p>Reports</p>
        </div>
      </Link>
      <hr className="solid"></hr>
    </div>
  );
};

export default SideBar;
