import { ARR_CATEGORY, LIMIT_BOOK_IN_PAGE } from "@/Utils/Constants";
import Card from "@/components/Card/Card";
import LabelCategory from "@/components/LabelCategory/LabelCategory";
import Loading from "@/components/Loading/Loading";
import { getBookInAPI, getBookWithSub } from "@/redux/slices/appSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { useEffect } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const AllBook = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const arrBook = useAppSelector((state: RootState) => state.app.books);
  const loading = useAppSelector((state: RootState) => state.app.loading);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("sub") === "all") {
      dispatch(
        getBookInAPI({
          query: searchParams.get("q"),
          limit: LIMIT_BOOK_IN_PAGE,
          currPage: Number(searchParams.get("page")),
        })
      );
    } else {
      dispatch(
        getBookWithSub({
          subject: searchParams.get("sub") as string,
          limit: LIMIT_BOOK_IN_PAGE,
          currPage: Number(searchParams.get("page")),
        })
      );
    }
  }, [dispatch, searchParams]);

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (current) => {
    setSearchParams({
      q: searchParams.get("q") as string,
      page: current.toString(),
      sub: searchParams.get("sub") as string,
    });
  };

  const handlerOnlick = (p: { label: string }) => {
    setSearchParams({
      q: "random",
      page: "1",
      sub: p.label.toLowerCase(),
    });
  };

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
    <div className="pt-[--header-height] min-h-screen">
      <div className="bg-white grid grid-cols-12 py-20 h4">
        <div className="col-span-2"></div>
        <div className="col-span-1">
          <div className="text-base font-bold">
            <div className="text-xl border-b-2 p-2">Category</div>
            {ARR_CATEGORY.map((e: Category) => {
              let isActive = false;
              if (e.label.toLowerCase() === searchParams.get("sub")) {
                isActive = true;
              }
              return (
                <LabelCategory
                  title={e.label}
                  onClick={() => handlerOnlick({ label: e.label })}
                  isActive={isActive}
                />
              );
            })}
          </div>
        </div>
        <div className="col-span-7">
          <div className="mb-6 ml-4">
            <Pagination
              defaultCurrent={1}
              current={Number(searchParams.get("page"))}
              total={72}
              pageSizeOptions={[16]}
              showSizeChanger={false}
              defaultPageSize={16}
              onChange={onShowSizeChange}
            />
          </div>
          <div className="grid grid-cols-4">
            {arrBook !== null && !loading ? (
              arrBook.map((e: SearchRes["Book"], index: number) => (
                <div className="mb-4">
                  <Card
                    key={index}
                    name={e.title_sort}
                    author={e.author_name[0]}
                    coverI={e.cover_i}
                    heightCard="h-52"
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
              <div className="mx-8">
                <Loading />
              </div>
            )}
          </div>
        </div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default AllBook;
