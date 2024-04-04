const LabelCategory = (props: any) => {
  return (
    <div className="group border-b-2 pl-6 py-2 relative hover:cursor-pointer">
      {props.title}
      <div
        className="hidden absolute top-1/2 left-0 -translate-y-1/2 w-4 h-4 border-8 border-y-transparent border-r-transparent
   border-red-700 group-hover:block "
      ></div>
    </div>
  );
};

export default LabelCategory;
