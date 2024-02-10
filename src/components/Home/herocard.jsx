import green_headphones from "../../assets/green-headphones.png";
import StarIcon from "@mui/icons-material/Star";
import FavoriteIcon from "@mui/icons-material/Favorite";

function HeroCard() {
  return (
    <div className="flex rounded-xl bg-white mt-10 h-72 shadow">
      <div className="w-96 h-62  py-8 items-center">
        <img src={green_headphones} alt="green_headphones" className="h-52 " />
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

        <div className="mt-3 pr-5">
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

        <div className="flex mt-4 space-x-5">
          {/**Heart */}
          <div className="p-2 outline rounded-lg w-14 text-center outline-primary">
            <FavoriteIcon className="text-sm text-primary" />
          </div>
          {/**Add to cart */}
          <div className="p-2 outline rounded-lg w-28 text-center outline-primary">
            <span className="text-sm text-primary">Add to cart</span>
          </div>
          {/**But now */}
          <div className="p-2 outline rounded-lg w-28 text-center outline-primary bg-primary">
            <span className="text-sm text-white">Buy now</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroCard;
