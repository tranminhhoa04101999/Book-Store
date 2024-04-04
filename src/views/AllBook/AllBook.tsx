import Card from "@/components/Card/Card";
import LabelCategory from "@/components/LabelCategory/LabelCategory";
import API from "@/libs/api";
import { useContext, useEffect, useState } from "react";
import { Pagination } from "antd";
import type { PaginationProps } from "antd";
import Loading from "@/components/Loading/Loading";
import { ContextContainer } from "@/App";

type Book = {
  title_sort: string;
  author_name: string;
  cover_i: string;
};

const AllBook = (props: any) => {
  const [AllBook, setAllBook] = useState<Book[]>([]);
  const [offset, setOffset] = useState<number>();
  const [currPage, setCurrPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const { searchText } = useContext(ContextContainer);
  const [limit, setLimit] = useState<number>(16);

  useEffect(() => {
    async function fetch() {
      setLoading(true);
      let res = await API.app.searchBook(searchText, limit, 0);
      let data: any = res.data;
      if (res !== null && data !== null) {
        setAllBook(data.docs);
        console.log(data.docs);
        setLoading(false);
      }
    }
    fetch();
  }, []);

  useEffect(() => {
    async function fetch(offset: number | undefined) {
      setLoading(true);
      let res = await API.app.searchBook(searchText, limit, offset);

      let data: any = res.data;
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
      console.log(searchText);

      let res = await API.app.searchBook(searchText, limit, offset);

      let data: any = res.data;
      if (res !== null && data !== null) {
        setAllBook(data.docs);
        console.log(data.docs);

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
              AllBook.map((e: any, index: number) => (
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
