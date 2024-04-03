const AllBook = (props: any) => {
  return (
    <div className="py-20">
      <div className="bg-backgroundHeader grid grid-cols-12 py-20">
        <div className="col-span-2"></div>
        <div className="col-span-1">
          <div className="text-base font-bold">
            <div className="text-xl border-b-2 p-2">Thể Loại</div>
            <div className=" border-b-2 pl-6 py-2 relative">
              Kinh Dị
              <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-black w-4 h-4"></div>
            </div>
            <div className=" border-b-2 p-2">Kinh Dị</div>
            <div className=" border-b-2 p-2">Kinh Dị</div>
            <div className=" border-b-2 p-2">Kinh Dị</div>
          </div>
        </div>
        <div className="col-span-7"></div>
        <div className="col-span-2"></div>
      </div>
    </div>
  );
};

export default AllBook;
