import navLogo from "../../assets/navlogo.png";
import profile from "../../assets/profile.svg";

const NavBar = () => {
  const handleLogOut = () => {
    localStorage.clear();
    location.reload();
  };
  return (
    <div className="flex w-full shadow-lg p-[1rem]">
      <div>
        <img src={navLogo} alt="Logo" />
      </div>
      <div className="w-full">
        <div className="flex justify-end items-center">
          <button
            onClick={() => handleLogOut()}
            className="flex items-center text-[#FFFFFF] bg-[#8B5CF6] rounded-md px-[.5rem] py-[.25rem] me-[1rem]"
          >
            Logout
          </button>
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
