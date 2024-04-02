import { FaShop } from "react-icons/fa6";

const NavigationBarItem = (props: any) => {
  return (
    <div className="flex flex-row mx-12 ">
      {props.icon && (
        <div className="content-center">
          <FaShop className="text-white mr-2 text-2xl" />
        </div>
      )}
      <div className="text-white text-2xl font-bold">{props.title}</div>
    </div>
  );
};

export default NavigationBarItem;
