import logo from "../../assets/logo.png";
import HomeIcon from "@mui/icons-material/Home";
import ExploreIcon from "@mui/icons-material/Explore";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import HistoryIcon from "@mui/icons-material/History";
import CallIcon from "@mui/icons-material/Call";
import SettingsIcon from "@mui/icons-material/Settings";
import AddCircleIcon from "@mui/icons-material/AddCircle";

function Sidebar() {
  return (
    //Main wrapper
    <div className="pl-7 ">
      {/**Logo */}
      <div className="flex items-center ">
        <div className="rounded bg-primary-100 mr-3">
          <img src={logo} alt="logo" className=" w-15 h-10 " />
        </div>
        <h3 className="text-primary-dark font-public-sans font-bold">
          Soundix.
        </h3>
      </div>

      {/*Sidebar options */}
      <div className="mt-8">
        <ul>
          <li className="items-center pt-3 pb-3 ">
            <HomeIcon className="text-gray-500 mr-5" />
            <span className="text-gray-500">Home</span>
          </li>
          <li className="items-center pt-3 pb-3">
            <ExploreIcon className="text-gray-500 mr-5" />
            <span className="text-gray-500">Explore</span>
          </li>
          <li className="items-center  pt-3 pb-3">
            <FavoriteBorderIcon className="text-gray-500 mr-5" />
            <span className="text-gray-500">Saved</span>
          </li>
          <li className="items-center pt-3 pb-3">
            <ShoppingCartIcon className="text-gray-500 mr-5" />
            <span className="text-gray-500">Cart</span>
          </li>
          <li className="items-center pt-3 pb-3">
            <LocalAtmIcon className="text-gray-500 mr-5" />
            <span className="text-gray-500">Selling</span>
          </li>
          <li className="items-center pt-3 pb-3">
            <PersonOutlineIcon className="text-gray-500 mr-5" />
            <span className="text-gray-500">Profile</span>
          </li>
          <li className="items-center pt-3 pb-3">
            <HistoryIcon className="text-gray-500 mr-5" />
            <span className="text-gray-500">Purchase History</span>
          </li>
          <li className="items-center pt-3 pb-3">
            <CallIcon className="text-gray-500 mr-5" />
            <span className="text-gray-500">Contact us</span>
          </li>
          <li className="items-center pt-3 pb-3">
            <SettingsIcon className="text-gray-500 mr-5" />
            <span className="text-gray-500">Settings</span>
          </li>
        </ul>
      </div>

      {/*Bottom Card */}
      <div className="items-center text-center p-5 shadow h-52 w-52 mt-10  bg-blue-100 rounded-md">
        <AddCircleIcon className="text-cyan-400 " />
        <h6 className="mt-1 text-sm text-primary-dark font-semibold">
          Need Help
        </h6>
        <p className="text-xs text-primary mt-3 font-medium">
          About Account Management Ordering & Payment refund and FAQ
        </p>
        <div className="mt-6 rounded-lg bg-light-blue p-1 shadow-sm ">
          <span className="text-xs font-medium text-primary-dark">
            Customer Services
          </span>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
