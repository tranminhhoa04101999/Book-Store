import { LuLoader2 } from "react-icons/lu";
const Loading = () => {
  return (
    <div className="bg-btnBlack w-96 rounded-3xl flex content-center text-white">
      <LuLoader2 className="animate-spin text-5xl" />
      <div className="ml-6 text-4xl">Loading ....</div>
    </div>
  );
};

export default Loading;
