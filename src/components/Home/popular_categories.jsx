import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import apple_logo from "../../assets/apple_logo.png";
import beats_logo from "../../assets/beats_logo.png";
import sony_logo from "../../assets/sony_logo.png";
import lenovo_logo from "../../assets/lenovo_logo.png";
import seller_1 from "../../assets/seller_1.png";
import seller_2 from "../../assets/seller_2.png";
import seller_3 from "../../assets/seller_3.png";
import seller_4 from "../../assets/seller_4.png";

function Popular() {
  return (
    <div>
      <div className="flex items-center space-x-4">
        <h1 className="font-roboto font-semibold text-primary-dark text-lg">
          Explore Popular Categories
        </h1>
        <div className="space-x-1">
          <span className="text-xs">See all</span>
          <ArrowForwardIcon style={{ width: "16px", fontWeight: "bold" }} />
        </div>
      </div>

      {/* Wrapper for the two classes  */}
      <div className="flex space-x-4">
        {/**Card 1 */}
        <div className=" rounded-lg shadow py-3 px-7 w-96">
          <div className=" flex items-center justify-around">
            <div>
              <ul className="flex ">
                <li className="-mr-2">
                  <img src={sony_logo} alt="sony logo" />
                </li>
                <li className="-mr-2">
                  <img src={apple_logo} alt="apple logo" />
                </li>
                <li className="-mr-2">
                  <img src={beats_logo} alt="beats logo" />
                </li>
                <li>
                  <img src={lenovo_logo} alt="lenovo logo" />
                </li>
              </ul>
            </div>

            <div className="ml-5">
              <div className=" bg-gray-600 w-0.5 h-16"></div>
            </div>

            <div className="ml-5">
              <h3 className="text-sm font-semibold mb-1">
                Popular top 10 brands
              </h3>
              <span className="text-xs ">5,400+ Orders & reviews</span>
            </div>
          </div>
        </div>
        {/*Card 2 */}
        <div className=" rounded-lg shadow py-3 px-7 w-96">
          <div className=" flex items-center justify-around">
            <div>
              <ul className="flex ">
                <li className="-mr-2 ">
                  <img
                    src={seller_1}
                    alt="seller 1"
                    className=" rounded-full w-9 h-9"
                  />
                </li>
                <li className="-mr-2">
                  <img
                    src={seller_2}
                    alt="seller 2"
                    className=" rounded-full w-9 h-9"
                  />
                </li>
                <li className="-mr-2">
                  <img
                    src={seller_3}
                    alt="seller 3"
                    className=" rounded-full w-9 h-9"
                  />
                </li>
                <li>
                  <img
                    src={seller_4}
                    alt="seller 4"
                    className=" rounded-full w-9 h-9"
                  />
                </li>
              </ul>
            </div>

            <div className="ml-5">
              <div className=" bg-gray-600 w-0.5 h-16"></div>
            </div>

            <div className="ml-5">
              <h3 className="text-sm font-semibold mb-1">Newest Sellers</h3>
              <span className="text-xs ">5,400+ Orders & reviews</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popular;
