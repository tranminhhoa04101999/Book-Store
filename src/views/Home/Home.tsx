import Header from "../header/Header";
import NavigationBar from "../navigationBar/NavigationBar";
import { BsFillBrushFill } from "react-icons/bs";
import CardHeader from "@/components/CardHeader/CardHeader";
import Card from "@/components/Card/Card";

const Home = (props: any) => {
  return (
    <div className="py-20">
      <NavigationBar />
      <div className="bg-backgroundHeader mb-4 py-8 px-32 grid grid-cols-5">
        <div className="flex flex-col col-span-2">
          <div className="text-8xl font-bold ">
            <BsFillBrushFill className="inline-block" />{" "}
            <div className="inline-block">Find Your</div>
          </div>
          <div className="text-8xl font-bold">Next Book</div>
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
            <div className="text-xl font-bold  bg-backgroundHeader w-40 py-2 text-center rounded hover:cursor-pointer">
              View All
            </div>
          </div>
        </div>
        <div className="grid grid-cols-5 px-10 mt-10">
          <Card name="sach ne" author="hoa minh" price="22.22" />
          <Card name="sach ne" author="hoa minh" price="22.22" />
          <Card name="sach ne" author="hoa minh" price="22.22" />
          <Card name="sach ne" author="hoa minh" price="22.22" />
          <Card name="sach ne" author="hoa minh" price="22.22" />
        </div>
      </div>
    </div>
  );
};

export default Home;
