import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" bg-backgroundHeader py-4">
      <div className=" grid grid-cols-12 text-lg">
        <div className="col-span-2"></div>
        <div className="col-span-4">
          <div className="text-5xl font-bold tracking-wide">MH Store</div>
          <div className="">Read as you want</div>
        </div>
        <div className="col-span-2 flex flex-col items-center pt-4 pb-2  font-medium">
          <div className="cursor-pointer">SHOWCASE</div>
          <div className="cursor-pointer my-3">WIDGETKIT</div>
          <div className="cursor-pointer">SUPPORT</div>
        </div>
        <div className="col-span-2 flex flex-col items-center pt-4 pb-2  font-medium">
          <div className="cursor-pointer">ABOUT US</div>
          <div className="cursor-pointer my-3">CONTACT US</div>
          <div className="cursor-pointer">RESOURCES</div>
        </div>
        <div className="col-span-2"></div>
      </div>
      <div className="h-[1px] border-[1px] border-gray-200 mx-[200px]"></div>
      <div className="flex flex-col items-center text-lg">
        <div className="flex flex-row text-2xl pb-2 pt-10">
          <FaFacebook className="cursor-pointer" />
          <div className="px-4">
            <FaTwitter className="cursor-pointer" />
          </div>
          <FaYoutube className="cursor-pointer" />
        </div>
        <div>@2024 Copy right. All rights reserved</div>
      </div>
    </div>
  );
};

export default Footer;
