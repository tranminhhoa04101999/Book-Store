import { LIMIT_BOOK_IN_HOME } from "@/Utils/Constants";
import Card from "@/components/Card/Card";
import CardHeader from "@/components/CardHeader/CardHeader";
import Loading from "@/components/Loading/Loading";
import { getBookInAPI } from "@/redux/slices/appSlice";
import { RootState } from "@/redux/store";
import { useEffect } from "react";
import { BsFillBrushFill } from "react-icons/bs";
import { useAppSelector, useAppDispatch } from "../../redux/store";
import { useNavigate, createSearchParams } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const arrBook = useAppSelector((state: RootState) => state.app.books);
  const loading = useAppSelector((state: RootState) => state.app.loading);

  useEffect(() => {
    dispatch(
      getBookInAPI({ query: "random", limit: LIMIT_BOOK_IN_HOME, currPage: 1 })
    );
  }, [dispatch]);

  const handlerClickViewAll = () => {
    navigate({
      pathname: "all",
      search: createSearchParams({
        q: "random",
        page: "1",
        sub: "all",
      }).toString(),
    });
  };
  const handlerOnlickDetail = (p: { key: string; author_name: string }) => {
    // get the key work
    const id = p.key.slice(p.key.lastIndexOf("/") + 1, p.key.length);
    navigate({
      pathname: "book",
      search: createSearchParams({
        id: id,
        name: p.author_name,
      }).toString(),
    });
  };

  return (
    <div className=" bg-white">
      <div className="pb-20 pt-[--header-height]">
        <NavigationBar />
        <div className="bg-backgroundHeader mb-4 py-8 px-32 grid grid-cols-5">
          <div className="flex flex-col col-span-2">
            <div className="text-8xl font-bold ">
              <BsFillBrushFill className="inline-block" />{" "}
              <div className="inline-block">Find Your</div>
            </div>
            <div className="text-8xl font-bold ">Next Book</div>
            <div className="text-xl mt-8">
              Our most popular and trending MH Bookstore perfect
            </div>
            <div className="text-xl">
              Not sure what to read now next reading mood Perfectly
            </div>
            <div className="bg-btnBlack h-14 w-48 leading-[3.5rem] text-white text-lg font-bold text-center mt-8 hover:cursor-pointer">
              Explore Now
            </div>
          </div>
          <div className="col-span-3 flex flex-row">
            <CardHeader
              name="The Stranger"
              author="Alber Camus"
              url="https://images.booksense.com/images/151/086/9798424086151.jpg"
              isReverse={false}
            />
            <CardHeader
              name="Der Process"
              author="Franz Kafka"
              url="https://i.pinimg.com/736x/c0/5c/34/c05c34e78c8e85e723cf48022c22625c.jpg"
              isReverse={true}
            />
            <CardHeader
              name="The Trial"
              author="Franz Kafka"
              url="https://images.booksense.com/images/296/260/9782382260296.jpg"
              isReverse={false}
            />
          </div>
        </div>
        <div className="px-32">
          <div className="flex flex-row">
            <div className=" text-2xl font-bold basis-2/12 text-center">
              Weekly best sellers
            </div>
            <div className="basis-8/12 border-b-2 -translate-y-1/2"></div>
            <div className="basis-2/12 flex justify-end">
              <div
                onClick={handlerClickViewAll}
                className="text-xl font-bold  bg-backgroundHeader w-40 py-2 text-center rounded hover:cursor-pointer"
              >
                View All
              </div>
            </div>
          </div>
          <div className="grid grid-cols-5 px-10 mt-10">
            {arrBook !== null && !loading ? (
              arrBook.map((e: SearchRes["Book"], index: number) => (
                <Card
                  key={index}
                  name={e.title_sort}
                  author={e.author_name[0]}
                  coverI={e.cover_i}
                  heightCard="h-80"
                  onClick={() =>
                    handlerOnlickDetail({
                      key: e.key,
                      author_name: e.author_name[0],
                    })
                  }
                />
              ))
            ) : (
              <div>
                <Loading />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
