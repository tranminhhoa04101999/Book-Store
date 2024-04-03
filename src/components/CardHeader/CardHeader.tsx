const CardHeader = (props: any) => {
  return (
    <>
      {props.isReverse ? (
        <div className="mx-6 ">
          <div className="text-center mb-1 text-lg font-bold">{props.name}</div>
          <div className="text-center mb-5">{props.author}</div>
          <div className="rounded-b-full overflow-hidden">
            <img src={`${props.url}`} alt="" className="w-64 h-96" />
          </div>
        </div>
      ) : (
        <div className="mx-6 ">
          <div className="rounded-t-full overflow-hidden">
            <img src={`${props.url}`} alt="" className="w-64 h-96" />
          </div>
          <div className="text-center mt-5 text-lg font-bold">{props.name}</div>
          <div className="text-center mt-1">{props.author}</div>
        </div>
      )}
    </>
  );
};

export default CardHeader;
