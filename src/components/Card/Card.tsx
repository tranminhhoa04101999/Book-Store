import { FaShareSquare } from "react-icons/fa";

type CardProps = {
  coverI: string;
  heightCard: string;
  name: string;
  author: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg mx-6 shadow-lg  hover:animate-hoverCard border-2 hover:cursor-pointer">
      <img
        src={`https://covers.openlibrary.org/b/id/${props.coverI}-M.jpg`}
        alt="Girl in a jacket"
        className={`w-full ${props.heightCard} rounded-lg`}
      />
      <div className="px-2 py-2 flex flex-col justify-between">
        <div className=" text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">
          {props.name}
        </div>
        <div className="text-gray-500  text-base mt-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {props.author}
        </div>
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
