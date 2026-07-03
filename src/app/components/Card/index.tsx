const Card: React.FC<{
  list?: Array<string>;
  title?: string;
  type?: "default" | "light";
  onClick?: () => void;
}> = (props) => {
  return (
      <div onClick={props.onClick} className={`lg:w-2/3 w-[90%] min-w-[300px] min-h-[350px] md:min-h-[450px] h-fit text-center gap-2 border-2 p-4 
      border-web-green ${props.type === "light" ? "bg-light text-dark" : "bg-dark text-light"} lg:m-6 my-6 rounded-lg items-center
       justify-center flex flex-col ${props.onClick ? "cursor-pointer hover:scale-105 hover:border-web-blue transition-transform" : ""}`}>
        <div className="text-4xl font-semibold mb-4">{props.title}</div>
        <ul className="text-xl flex flex-col justify-evenly h-[80%] font-medium list-disc list-inside text-start items-start">
            {props.list?.map((item) => (
              <li className="font-thin" key={item}>{item}</li>
            ))}
          </ul>
      </div>
  );
};

export default Card;
