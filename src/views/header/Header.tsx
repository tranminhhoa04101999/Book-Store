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
    <div className="grid grid-cols-3 p-8">
      <div className="flex flex-row">
        <FaBookSkull className="text-red-600 h-12 w-12" />
        <span className=" text-white text-5xl ml-2 text font-bold">
          MH Bookstore
        </span>
      </div>
      <div className="flex flex-row">
        <Dropdown menu={menuProps}>
          <Button className="bg-red-600 outline-none text-white font-bold border-none h-12 text-xl ml-2">
            <Space>
              All Categories
              <DownOutlined />
            </Space>
          </Button>
        </Dropdown>
        <div className="flex-1 border-gray-200 border-2 rounded ml-10 flex flex-row content-center px-4">
          <input
            className="flex-1 rounded text-white outline-none bg-slate-950 text-xl"
            placeholder="Write the title of the book"
          />
          <div className="hover:cursor-pointer content-center">
            <FaSearch className="text-red-600 h-auto w-7" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-end">
        <div className="relative hover:cursor-pointer content-center px-6">
          <FaCartArrowDown className="text-white h-auto w-7" />
          <div className="absolute top-0 right-2 text-white text-xl justify-center content-center flex bg-red-600 rounded-full">
            1
          </div>
        </div>
        <div className="hover:cursor-pointer content-center px-6 border-l-2">
          <FaRegHeart className="text-white h-auto w-7" />
        </div>
        <div className="hover:cursor-pointer content-center px-6 border-l-2">
          <FaUser className="text-white h-auto w-7" />
        </div>
      </div>
    </div>
  );
};

export default Header;
