import black_headphones from "../../assets/black_headphones.png";
import blue_headphones from "../../assets/blue_headphones.png";
import turquoise_headphones from "../../assets/turquoise_headphones.png";
import StarIcon from "@mui/icons-material/Star";
import AddIcon from "@mui/icons-material/Add";

function Card() {
  return (
    <div className="grid grid-cols-3">
      {/*Card 1 */}
      <div className=" rounded-xl shadow bg-white p-5 w-48 h-52 col-span-1">
        <div className="flex justify-center items-center">
          <img src={blue_headphones} alt="black headphones" className=" w-24" />
        </div>
        <h3 className="text-xs mt-4 font-medium">Original Beats Solo Pro</h3>
        <p className="text-xs mt-1 text-gray-500 ">Price $333.20 </p>

        <div className="flex justify-between">
          {/*For star and rating */}
          <div className=" mt-2 flex items-center space-x-1">
            <StarIcon
              style={{ width: "18px", height: "18px", color: "#00E0C6" }}
            />
            <span className="text-xs text-primary-200">4.9</span>
          </div>

          {/*For button */}
          <div>
            <div className="rounded-full w-6 h-6 bg-primary flex items-center justify-center p-2">
              <AddIcon
                style={{
                  width: "16px",
                  height: "16px",
                  color: "white",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/**Card 2*/}
      <div className=" rounded-xl shadow bg-white p-5 w-48 h-52 col-span-1">
        <div className="flex justify-center items-center">
          <img
            src={turquoise_headphones}
            alt="turquoise headphones"
            className=" w-24"
          />
        </div>
        <h3 className="text-xs mt-4 font-medium">Beats Studio3 Bluetooth</h3>
        <p className="text-xs mt-1 text-gray-500 ">Price $119.88 </p>

        <div className="flex justify-between">
          {/*For star and rating */}
          <div className=" mt-2 flex items-center space-x-1">
            <StarIcon
              style={{ width: "18px", height: "18px", color: "#00E0C6" }}
            />
            <span className="text-xs text-primary-200">5.0</span>
          </div>

          {/*For button */}
          <div>
            <div className="rounded-full w-6 h-6 bg-primary flex items-center justify-center p-2">
              <AddIcon
                style={{
                  width: "16px",
                  height: "16px",
                  color: "white",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/**Card 3*/}
      <div className=" rounded-xl shadow bg-white p-5 w-48 h-52 col-span-1">
        <div className="flex justify-center items-center">
          <img
            src={black_headphones}
            alt="black headphones"
            className=" w-16"
          />
        </div>
        <h3 className="text-xs mt-4 font-medium">Beats Solo3 Wireless</h3>
        <p className="text-xs mt-1 text-gray-500 ">Price $119.95 </p>

        <div className="flex justify-between">
          {/*For star and rating */}
          <div className=" mt-2 flex items-center space-x-1">
            <StarIcon
              style={{ width: "18px", height: "18px", color: "#00E0C6" }}
            />
            <span className="text-xs text-primary-200">4.8</span>
          </div>

          {/*For button */}
          <div>
            <div className="rounded-full w-6 h-6 bg-primary flex items-center justify-center p-2">
              <AddIcon
                style={{
                  width: "16px",
                  height: "16px",
                  color: "white",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
