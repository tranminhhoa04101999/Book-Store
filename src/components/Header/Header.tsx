import { RootState, useAppSelector } from "@/redux/store";
import { useState } from "react";
import { FaRegHeart, FaSearch, FaUser } from "react-icons/fa";
import { FaBookSkull } from "react-icons/fa6";
import { createSearchParams, useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const currPage = useAppSelector((state: RootState) => state.app.currPage);

  const handlerChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handlerEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      const searchParam = search.trim() === "" ? "random" : search;
      navigate({
        pathname: "all",
        search: createSearchParams({
          q: searchParam,
          page: currPage.toString(),
        }).toString(),
      });
    }
  };
  const handlerClickHome = () => {
    navigate("/");
  };
  return (
    <div className="grid grid-cols-4 p-4 bg-backgroundHeader fixed top-0 w-full shadow">
      <div className="flex flex-row text-2xl">
        <FaBookSkull className="" />
        <span
          className="ml-2 text font-bold hover:cursor-pointer"
          onClick={handlerClickHome}
        >
          MH Bookstore
        </span>
      </div>
      <div className="col-span-2 flex flex-row text-base">
        <div className="flex-1 border-b-2 border-gray-300 rounded ml-10 flex flex-row content-center px-4">
          <input
            className="flex-1 rounded outline-none bg-backgroundHeader"
            placeholder="Write the title of the book"
            onChange={handlerChangeInput}
            onKeyDown={handlerEnter}
          />
          <div className="hover:cursor-pointer content-center ">
            <FaSearch className="h-auto w-7 text-gray-400 " />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end text-base">
        <div className="hover:cursor-pointer content-center px-6 border-l-2 border-gray-400">
          <FaRegHeart className=" h-auto w-6" />
        </div>
        <div className="hover:cursor-pointer content-center px-6 border-l-2 border-gray-400">
          <FaUser className=" h-auto w-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
