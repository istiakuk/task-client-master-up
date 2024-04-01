// Announcements.jsx

import { useEffect, useState } from "react";
import Announcement from "../Announcement/Announcement"; // Corrected import path

const Announcements = () => {
  const [announcements, setAnnouncements] = useState([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch("http://localhost:5000/announcements", {
          headers: {
            "x-access-token": localStorage.getItem("accessToken"),
          },
        });
        if (response.ok) {
          const data = await response.json();
          setAnnouncements(data);
        } else {
          console.error("Failed to fetch announcements");
        }
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };
    fetchAnnouncements();
  }, []);

  const deleteAnnouncement = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/announcements/${id}`, {
        method: "DELETE",
        headers: {
          "x-access-token": localStorage.getItem("accessToken"),
        },
      });
      if (!response.ok) {
        throw new Error("Failed to delete announcement");
      }
      setAnnouncements(announcements.filter((announcement) => announcement._id !== id));
    } catch (error) {
      console.error("Failed to delete announcement:", error);
    }
  };

  return (
    <div className="p-[2rem] w-full">
      <h1 className="text-4xl text-[#8B5CF6] font-[600]">Announcement List</h1>
      <hr className="solid mt-[1rem]"></hr>
      <div className="shadow-[0_5px_15px_0px_rgba(0,0,0,0.3)] w-full mt-[3rem] rounded-xl p-[1rem]">
        <div className="overflow-x-auto">
          <table className="table w-full my-[1rem] text-center">
            <thead className="bg-[#E8DEFD]">
              <tr>
                <th className="px-[1rem] mx-auto"></th>
                <th className="px-[1rem] mx-auto">Title</th>
                <th className="px-[1rem] mx-auto">Content</th>
                <th className="px-[1rem] mx-auto">Actions</th>
              </tr>
            </thead>
            <tbody>
              {announcements.map((announcement) => (
                <Announcement
                  key={announcement._id}
                  announcement={announcement}
                  deleteAnnouncement={deleteAnnouncement}
                />
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

export default Announcements;
