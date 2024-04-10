import { LIMIT_BOOK_IN_PAGE } from "@/Utils/Constants";
import Card from "@/components/Card/Card";
import LabelCategory from "@/components/LabelCategory/LabelCategory";
import Loading from "@/components/Loading/Loading";
import { getBookInAPI, setCurrPage } from "@/redux/slices/appSlice";
import { RootState, useAppDispatch, useAppSelector } from "@/redux/store";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { useEffect } from "react";

const AllBook = () => {
  const dispatch = useAppDispatch();
  const arrBook = useAppSelector((state: RootState) => state.app.books);
  const loading = useAppSelector((state: RootState) => state.app.loading);
  const searchText = useAppSelector((state: RootState) => state.app.searchText);
  const currPage = useAppSelector((state: RootState) => state.app.currPage);

  useEffect(() => {
    dispatch(
      getBookInAPI({
        query: searchText,
        limit: LIMIT_BOOK_IN_PAGE,
        currPage: currPage,
      })
    );
  }, [dispatch, currPage, searchText]);

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (current) => {
    dispatch(setCurrPage(current));
  };

  return (
    <div className="py-20">
      <div className="bg-backgroundHeader grid grid-cols-12 py-20 h4">
        <div className="col-span-2"></div>
        <div className="col-span-1">
          <div className="text-base font-bold">
            <div className="text-xl border-b-2 p-2">Category</div>
            <LabelCategory title="Horrified" />
            <LabelCategory title="romantic" />
            <LabelCategory title="love" />
          </div>
        </div>
        <div className="col-span-7">
          <div className="mb-6 ml-4">
            <Pagination
              defaultCurrent={1}
              current={currPage}
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
                    author={e.author_name}
                    coverI={e.cover_i}
                    heightCard="h-52"
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
