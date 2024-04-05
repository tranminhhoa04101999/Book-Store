import { ContextContainer } from "@/App";
import { LIMIT_BOOK_IN_PAGE } from "@/Common/common";
import Card from "@/components/Card/Card";
import LabelCategory from "@/components/LabelCategory/LabelCategory";
import Loading from "@/components/Loading/Loading";
import { Book, Search } from "@/interface/Book";
import API from "@/libs/api";
import type { PaginationProps } from "antd";
import { Pagination } from "antd";
import { useContext, useEffect, useRef, useState } from "react";

const AllBook = () => {
  const [AllBook, setAllBook] = useState<Book[]>([]);
  const [offset, setOffset] = useState<number>();
  const [currPage, setCurrPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const { searchText } = useContext(ContextContainer);
  const searchTextRef = useRef("");

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      const res = await API.app.searchBook("", LIMIT_BOOK_IN_PAGE, 0);
      const data: Search = res.data;
      if (res !== null && data !== null) {
        setAllBook(data.docs);
        setLoading(false);
      }
    }
    fetch();
  }, []);

  useEffect(() => {
    async function fetch(offset: number | undefined) {
      setLoading(true);
      const res = await API.app.searchBook(
        searchTextRef.current,
        LIMIT_BOOK_IN_PAGE,
        offset
      );

      const data: Search = res.data;
      if (res !== null && data !== null) {
        setAllBook(data.docs);
        setLoading(false);
      }
    }
    fetch(offset);
  }, [offset]);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      setOffset(0);
      setCurrPage(1);
      searchTextRef.current = searchText;

      const res = await API.app.searchBook(searchText, LIMIT_BOOK_IN_PAGE, 0);

      const data: Search = res.data;
      if (res !== null && data !== null) {
        setAllBook(data.docs);
        setLoading(false);
      }
    }
    fetch();
  }, [searchText]);

  const onShowSizeChange: PaginationProps["onShowSizeChange"] = (
    current,
    pageSize
  ) => {
    setCurrPage(current);
    setOffset((current - 1) * pageSize);
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
              defaultPageSize={16}
              onChange={onShowSizeChange}
            />
          </div>
          <div className="grid grid-cols-4">
            {AllBook !== null && !loading ? (
              AllBook.map((e: Book, index: number) => (
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
