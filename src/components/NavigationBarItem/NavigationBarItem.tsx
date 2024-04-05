import { FaShop } from "react-icons/fa6";

type NavigationBarItemProps = {
  icon: string;
  title: string;
};

const NavigationBarItem = (props: NavigationBarItemProps) => {
  return (
    <div className="flex flex-row mx-12 hover:cursor-pointer">
      {props.icon !== "" && (
        <div className="content-center">
          <FaShop className=" mr-2 text-2xl" />
        </div>
      )}
      <div className=" text-2xl font-bold">{props.title}</div>
    </div>
  );
};

export default NavigationBarItem;
