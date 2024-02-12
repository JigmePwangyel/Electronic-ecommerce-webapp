import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import red_headphone from "../../assets/red-headphones.png";
import green_earbuds from "../../assets/green-earbuds.png";

function TopBrands() {
  return (
    <div className="grid grid-cols-1 ">
      <div className=" px-5 py-5 rounded-lg shadow w-80 h-48 relative bg-gradient-to-br from-gradient-start to-gradient-end ...">
        <p className=" text-lg text-primary-dark font-medium tracking-wide">
          Summer headphones from top brands
        </p>
        <div className="flex items-center mt-16 space-x-1">
          <p className=" text-sm text-primary-dark ">Buy it now</p>
          <ArrowForwardIcon
            style={{ width: "16px", height: "16px", fontWeight: "bold" }}
          />
        </div>

        <img
          src={red_headphone}
          alt="red headphone"
          className=" w-18 h-24 absolute top-20 right-20 z-1"
        />

        <img
          src={green_earbuds}
          alt="Green Earbuds"
          className=" absolute top-8 h-40 w-32 -right-5 z-2"
        />
      </div>
    </div>
  );
}

export default TopBrands;
