import Navbar from "../components/Home/navbar";
import HeroCard from "../components/Home/herocard";

function Home() {
  return (
    <div className="bg-gray px-5 text-gray-600">
      <Navbar />
      <div className="grid grid-cols-3 mt-2">
        <div className=" col-span-2 ">
          <HeroCard />
        </div>
        <div className=" col-span-1"></div>
      </div>
    </div>
  );
}

export default Home;
