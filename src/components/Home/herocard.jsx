import green_headphones from "../../assets/green-headphones.png";
import StarIcon from "@mui/icons-material/Star";

function HeroCard() {
  return (
    <div className="flex rounded bg-white mt-10 h-64">
      <div className="w-52 h-48  py-4 items-center">
        <img src={green_headphones} alt="green_headphones" />
      </div>

      <div className="mt-2">
        <h6 className=" text-m ">Beats Studio3 Wireless Headphone</h6>

        <div className=" mt-2 flex items-end ">
          <ul className=" flex ">
            <li>
              <StarIcon className=" text-sm text-yellow-400" />
            </li>
            <li>
              <StarIcon className=" text-sm text-yellow-400" />
            </li>
            <li>
              <StarIcon className=" text-sm text-yellow-400" />
            </li>
            <li>
              <StarIcon className=" text-sm text-yellow-400" />
            </li>
            <li>
              <StarIcon className=" text-sm text-yellow-400" />
            </li>
          </ul>
          <span className=" text-sm ml-2 text-gray-500">(2000+ reviews)</span>
        </div>

        <div className="mt-3">
          <p className="text-xs text-gray-500">
            Ergonomic ear cups with on-ear controls. Up to 22 hours of listening
            time. Apple W1 chip & Class 1 Wireless Bluetooth.
          </p>
        </div>

        <p className=" text-sm text-primary mt-4 font-medium">Price $349.95</p>

        <div className="flex mt-4">
          <span className=" font-semibold text-sm ">Color</span>

          <div className="flex ">
            <ul className="flex items-center ml-4 space-x-2 ">
              <li>
                <div className="rounded-full w-4 h-4 bg-blue-400"></div>
              </li>
              <li>
                <div className="rounded-full w-4 h-4  bg-primary-200"></div>
              </li>
              <li>
                <div className="rounded-full w-4 h-4 bg-red-400"></div>
              </li>
              <li>
                <div className="rounded-full w-4 h-4 bg-green-400"></div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
