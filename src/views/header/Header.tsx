import { FaBookSkull } from "react-icons/fa6";
import { FaSearch, FaCartArrowDown, FaRegHeart, FaUser } from "react-icons/fa";
import type { MenuProps } from "antd";
import { Button, Dropdown, message, Space } from "antd";
import { DownOutlined, UserOutlined } from "@ant-design/icons";

const handleMenuClick: MenuProps["onClick"] = (e) => {
  message.info("Click on menu item.");
  console.log("click", e);
};

const items: MenuProps["items"] = [
  {
    label: "1st menu item",
    key: "1",
    icon: <UserOutlined />,
  },
  {
    label: "2nd menu item",
    key: "2",
    icon: <UserOutlined />,
  },
  {
    label: "3rd menu item",
    key: "3",
    icon: <UserOutlined />,
    danger: true,
  },
  {
    label: "4rd menu item",
    key: "4",
    icon: <UserOutlined />,
    danger: true,
    disabled: true,
  },
];

const menuProps = {
  items,
  onClick: handleMenuClick,
};

const Header = () => {
  return (
    <div className="grid grid-cols-4 p-4 bg-backgroundHeader fixed top-0 w-full shadow">
      <div className="flex flex-row text-2xl">
        <FaBookSkull className="" />
        <span className="ml-2 text font-bold">MH Bookstore</span>
      </div>
      <div className="col-span-2 flex flex-row text-base">
        <Dropdown menu={menuProps}>
          <Button className="font-bold border-none h-12 ml-2">
            <Space>
              All Categories
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <div className="flex-1 border-b-2 border-gray-300 rounded ml-10 flex flex-row content-center px-4">
          <input
            className="flex-1 rounded outline-none bg-backgroundHeader"
            placeholder="Write the title of the book"
          />
          <div className="hover:cursor-pointer content-center ">
            <FaSearch className="h-auto w-7 text-gray-400 " />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end text-base">
        <div className="relative hover:cursor-pointer content-center px-6">
          <FaCartArrowDown className="h-auto w-6" />
          <div className="absolute size-7 -top-1 right-1 text-white flex justify-center content-center rounded-full bg-red-600 ">
            1
          </div>
        </div>
        <div className="hover:cursor-pointer content-center px-6 border-l-2 border-gray-400">
          <FaRegHeart className=" h-auto w-6" />
        </div>
        <div className="hover:cursor-pointer content-center px-6 border-l-2 border-gray-400">
          <FaUser className=" h-auto w-6" />
        </div>
      </div>
    </div>
  );
};

export default Header;
