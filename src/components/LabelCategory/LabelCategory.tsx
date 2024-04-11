type LabelCategoryProps = {
  title: string;
  onClick: (params: object) => void;
  isActive: boolean;
};

const LabelCategory = (props: LabelCategoryProps) => {
  return (
    <div
      onClick={props.onClick}
      className="group border-b-2 pl-6 py-2 relative hover:cursor-pointer"
    >
      <div className="group-hover:animate-bounce">{props.title}</div>
      <div
        className="hidden absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 border-8 border-y-transparent border-r-transparent
   border-red-700 group-hover:block "
      ></div>
      {props.isActive && (
        <div
          className=" absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 border-8 border-y-transparent border-r-transparent
   border-red-700  "
        ></div>
      )}
    </div>
  );
};

export default LabelCategory;
