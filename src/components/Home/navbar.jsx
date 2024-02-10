import SearchIcon from "@mui/icons-material/Search";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Navbar() {
  return (
    <div className="flex justify-between">
      <div>
        <h3 className=" font-medium">Headphones</h3>
        <span className="text-xs">From top brands</span>
      </div>

      <div className="flex items-center">
        {/**Searchbar */}
        <div className="items-center px-1 py-1 bg-white rounded-lg w-64 mr-4">
          <SearchIcon className="mr-2" />
          <input
            type="text"
            placeholder="Search"
            className="text-xs focus:outline-none"
          />
        </div>

        {/**E-mail */}
        <div className=" items-center bg-light-blue rounded p-1 mr-2">
          <EmailIcon className=" text-xs text-primary-dark" />
        </div>
        {/**Notification */}
        <div className=" items-center bg-light-blue rounded p-1 mr-2">
          <NotificationsIcon className=" text-xs text-primary-dark" />
        </div>
        {/**Account */}
        <div className=" items-center bg-light-blue rounded p-1">
          <AccountCircleIcon className=" text-xs text-primary-dark" />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
