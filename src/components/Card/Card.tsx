import API from "@/libs/api";
import { useEffect, useState } from "react";
import { FaShareSquare } from "react-icons/fa";
import { LuLoader2 } from "react-icons/lu";

type CardProps = {
  coverI: string;
  heightCard: string;
  name: string;
  author: string;
  onClick: () => void;
};

const Card = (props: CardProps) => {
  const [url, setURL] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch(coverI: string) {
      setLoading(true);
      if (coverI === undefined || coverI === null) {
        setURL(
          "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
        );
      } else {
        const res = await API.app.searchIMG(coverI);
        setURL(res.config.url as string);
      }
      setLoading(false);
    }
    fetch(props.coverI);
  }, [props.coverI]);

  return (
    <div
      className="flex flex-col overflow-hidden rounded-lg mx-6 shadow-lg  hover:animate-hoverCard border-2 hover:cursor-pointer"
      onClick={props.onClick}
    >
      {loading ? (
        <div
          className={`w-full ${props.heightCard} rounded-lg flex  justify-center items-center bg-gray-100`}
        >
          <div>
            <LuLoader2 className="animate-spin text-5xl" />
          </div>
        </div>
      ) : (
        <img
          src={url}
          alt="Girl in a jacket"
          className={`w-full ${props.heightCard} rounded-lg`}
        />
      )}
      <div className="px-2 py-2 flex flex-col justify-between">
        <div className=" text-lg font-bold whitespace-nowrap overflow-hidden text-ellipsis">
          {props.name}
        </div>
        <div className="text-gray-500  text-base mt-2 whitespace-nowrap overflow-hidden text-ellipsis">
          {props.author}
        </div>
        <div className="flex justify-end content-center font-bold  mt-2  text-lg">
          <div className="content-center">
            <div
              className="fb-share-button  hover:cursor-pointer"
              data-href="https://developers.facebook.com/docs/plugins/"
              data-layout=""
              data-size=""
            >
              <a
                target="_blank"
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fdevelopers.facebook.com%2Fdocs%2Fplugins%2F&amp;src=sdkpreparse"
                className="fb-xfbml-parse-ignore"
              >
                <FaShareSquare className="text-red-500" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
