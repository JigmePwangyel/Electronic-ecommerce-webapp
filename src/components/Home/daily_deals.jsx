import ArrowForward from "@mui/icons-material/ArrowForward";
import beats_blue from "../../assets/beats_blue.png";
import beats_black from "../../assets/beats_black.png";
import airpods_pro from "../../assets/airpods_pro.png";
import lenovo_wired_earphones from "../../assets/lenovo_wired_earphones.png";
import logic3_headset from "../../assets/logic3_headset.png";
import musicians_choice_stereo from "../../assets/musicians_choice_stereo.png";

function Deals() {
  return (
    <div className="mr-1">
      <div className="flex justify-between">
        <h2 className=" text-xl font-roboto font-semibold text-primary-dark">
          Daily Deals
        </h2>
        <div className="space-x-1">
          <span className="text-sm text-gray-500 font-medium">View all</span>
          <ArrowForward
            style={{ width: "16px", height: "18px", fontWeight: "500" }}
          />
        </div>
      </div>

      <div className="ml-1 mt-5">
        <div className="flex">
          <div className="rounded-full bg-white w-14 flex justify-center items-center h-14">
            <img src={beats_blue} alt="beats_blue" />
          </div>
          <div className="mt-2 ml-3">
            <div className="flex justify-between space-x-3">
              <h6 className="text-xs font-medium">
                beats new studio blue headset
              </h6>
              <span className="text-xs text-gray-500">Price $320</span>
            </div>

            <span className="text-xs text-gray-500 mt-5">
              256 Reviews 1628 orders
            </span>
          </div>
        </div>
      </div>

      <div className="ml-1 mt-5">
        <div className="flex">
          <div className="rounded-full bg-white w-14 flex justify-center items-center h-14">
            <img src={beats_black} alt="beats_black" />
          </div>
          <div className="mt-2 ml-3">
            <div className="flex justify-between space-x-3">
              <h6 className="text-xs font-medium">
                beats pro wireless Headset
              </h6>
              <span className="text-xs text-gray-500">Price $199</span>
            </div>

            <span className="text-xs text-gray-500 mt-5">
              205 Reviews 1906 orders
            </span>
          </div>
        </div>
      </div>

      <div className="ml-1 mt-5">
        <div className="flex">
          <div className="rounded-full bg-white w-14 flex justify-center items-center h-14">
            <img src={airpods_pro} alt="airpods_pro" />
          </div>
          <div className="mt-2 ml-3">
            <div className="flex justify-between space-x-3">
              <h6 className="text-xs font-medium">Apple AirPods Pro</h6>
              <span className="text-xs text-gray-500">Price $249</span>
            </div>

            <span className="text-xs text-gray-500 mt-5">
              991 Reviews 8682 orders
            </span>
          </div>
        </div>
      </div>

      <div className="ml-1 mt-5">
        <div className="flex">
          <div className="rounded-full bg-white w-14 flex justify-center items-center h-14">
            <img
              src={lenovo_wired_earphones}
              alt="lenovo_wired_earphones"
              className=" w-10"
            />
          </div>
          <div className="mt-2 ml-3 ">
            <div className="flex justify-between space-x-3">
              <h6 className="text-xs font-medium">Lenovo Wired Headphone</h6>
              <span className="text-xs text-gray-500">Price $50</span>
            </div>

            <span className="text-xs text-gray-500 mt-5">
              364 Reviews 2791 orders
            </span>
          </div>
        </div>
      </div>

      <div className="ml-1 mt-5">
        <div className="flex">
          <div className="rounded-full bg-white w-14 flex justify-center items-center h-14">
            <img src={logic3_headset} alt="logic3_headsets" />
          </div>
          <div className="mt-2 ml-3">
            <div className="flex justify-between space-x-3">
              <h6 className="text-xs font-medium">
                Logic3 Cavallino T250 Headset
              </h6>
              <span className="text-xs text-gray-500">Price $100</span>
            </div>

            <span className="text-xs text-gray-500 mt-5">
              128 Reviews 850 orders
            </span>
          </div>
        </div>
      </div>

      <div className="ml-1 mt-5">
        <div className="flex">
          <div className="rounded-full bg-white w-14 flex justify-center items-center h-14">
            <img src={musicians_choice_stereo} alt="musicians_choice_stereo" />
          </div>
          <div className="mt-2 ml-3">
            <div className="flex justify-between space-x-3">
              <h6 className="text-xs font-medium">Musicians Choice Stereo</h6>
              <span className="text-xs text-gray-500">Price $222</span>
            </div>

            <span className="text-xs text-gray-500 mt-5">
              116 Reviews 640 orders
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Deals;
