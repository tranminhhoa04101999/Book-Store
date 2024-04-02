import Card from "@/components/Card/Card";
import Header from "../header/Header";
import NavigationBar from "../navigationBar/NavigationBar";

const Dashboard = () => {
  return (
    <div className="h-screen bg-slate-950">
      <Header></Header>
      <NavigationBar />
      <div className="flex flex-row">
        <div className="text-white text-2xl font-bold basis-2/12 text-center">
          Weekly best sellers
        </div>
        <div className="text-white basis-8/12"></div>
        <div className="basis-2/12 flex justify-center">
          <div className=" text-white text-xl font-bold  bg-red-600 w-40 py-2 text-center rounded">
            View All
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 px-10 mt-10">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Dashboard;
