import Home from "./pages/Home.jsx";
import Sidebar from "./components/sidebar/sidebar.jsx";

function App() {
  return (
    <div className="grid grid-cols-10 h-screen">
      <div className=" pt-4 col-span-2 bg-white">
        <Sidebar />
      </div>
      <div className=" pt-4 col-span-8 bg-slate-50">
        <Home />
      </div>
    </div>
  );
}

export default App;
