import { FaShareSquare } from "react-icons/fa";

const Card = (props: any) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg mx-6 shadow-lg  hover:-translate-y-2 border-2 hover:cursor-pointer">
      <img
        src={`https://covers.openlibrary.org/b/id/${props.coverI}-L.jpg`}
        alt="Girl in a jacket"
        className="w-full h-80 rounded-lg"
      />
      <div className="px-2 py-2 min-h-36 flex flex-col justify-between">
        <div className=" text-lg font-bold">{props.name}</div>
        <div className="text-gray-500  text-base mt-2">{props.author}</div>
        <div className="flex justify-end content-center font-bold  mt-2  text-lg">
          <div className="content-center hover:cursor-pointer">
            <FaShareSquare className="text-red-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
