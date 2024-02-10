import Navbar from "../components/Home/navbar";
import HeroCard from "../components/Home/herocard";
import Card from "../components/Home/card";
import Popular from "../components/Home/popular_categories";
import TopBrands from "../components/Home/top_brand";
import Deals from "../components/Home/daily_deals";

function Home() {
  return (
    <div className="bg-gray px-5 text-gray-600">
      <Navbar />
      <div className="grid grid-cols-3 mt-2">
        <div className=" col-span-2 ">
          <HeroCard />
          <div className="mt-10">
            <Card />
          </div>
          <div className="mt-10">
            <Popular />
          </div>
        </div>
        <div className=" col-span-1 ml-10 ">
          <div className="mt-10">
            <TopBrands />
          </div>
          <div className="mt-10">
            <Deals />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
