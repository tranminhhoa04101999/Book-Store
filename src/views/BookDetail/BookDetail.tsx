import API from "@/libs/api";
import { getBookDetails, getBookWithAuthor } from "@/redux/slices/appSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import { LuLoader2 } from "react-icons/lu";
import Card from "@/components/Card/Card";
import Loading from "@/components/Loading/Loading";

const BookDetail = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const bookDetails = useAppSelector((state) => state.app.bookDetails);
  const arrBook = useAppSelector((state: RootState) => state.app.books);

  const [url, setURL] = useState<string>("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetch(coverI: number) {
      setLoading(true);
      if (coverI === undefined || coverI === null) {
        setURL(
          "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
        );
      } else {
        const res = await API.app.searchIMG(coverI.toString());
        setURL(res.config.url as string);
      }
      setLoading(false);
    }
    fetch(
      bookDetails.covers[0] !== -1
        ? bookDetails.covers[0]
        : bookDetails.covers[1]
    );
  }, [bookDetails]);

  useEffect(() => {
    dispatch(getBookDetails(searchParams.get("id") as string));
    dispatch(getBookWithAuthor(searchParams.get("name") as string));
  }, [dispatch, searchParams]);

  const handlerOnlickDetail = (p: { key: string; author_name: string }) => {
    // get the key work
    const id = p.key.slice(p.key.lastIndexOf("/") + 1, p.key.length);
    navigate({
      pathname: "/book",
      search: createSearchParams({
        id: id,
        name: p.author_name,
      }).toString(),
    });
  };

  return (
    <div className="min-h-screen bg-white pt-[--header-height]">
      <div className=" mx-[300px] my-[30px] grid grid-cols-12 gap-8">
        <div className="bg-backgroundHeader col-span-9 rounded-lg shadow-xl shadow-gray-300 overflow-hidden">
          <div className="grid grid-cols-12">
            <div className="col-span-3">
              {loading ? (
                <div
                  className={`w-full h-full rounded-lg flex  justify-center items-center bg-gray-100`}
                >
                  <div>
                    <LuLoader2 className="animate-spin text-5xl" />
                  </div>
                </div>
              ) : (
                <img
                  src={url}
                  alt="Girl in a jacket"
                  className={`w-full  rounded-lg`}
                />
              )}
            </div>
            <div className="col-span-9 p-4">
              <div className="font-extrabold text-3xl mb-2">
                {bookDetails.title}
              </div>
              <div className="text-base mb-2">
                By <span className="font-bold">{searchParams.get("name")}</span>
              </div>
              <div className="text-base mb-2">
                Times:{" "}
                <span className="font-bold">{bookDetails.timeToString}</span>
              </div>
              <div className="text-base mb-2">
                Places: <span className="font-bold">English countryside</span>
              </div>
            </div>
          </div>
          <div className="text-base p-4 pt-8">
            {bookDetails.description.value}
          </div>
          <div className="text-base p-4 ">
            Subjects:{" "}
            <span className="font-bold text-sm">
              {bookDetails.subjectToString}
            </span>
          </div>
        </div>
        <div className="bg-backgroundHeader col-span-3 rounded-lg shadow-xl shadow-gray-300">
          {arrBook !== null && arrBook.length > 0 ? (
            arrBook.map((e: SearchRes["Book"], index: number) => (
              <div className="my-4 mx-4">
                <Card
                  key={index}
                  name={e.title_sort}
                  author={e.author_name[0]}
                  coverI={e.cover_i}
                  heightCard="h-[200px]"
                  onClick={() =>
                    handlerOnlickDetail({
                      key: e.key,
                      author_name: e.author_name[0],
                    })
                  }
                />
              </div>
            ))
          ) : (
            <div>
              <Loading />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
