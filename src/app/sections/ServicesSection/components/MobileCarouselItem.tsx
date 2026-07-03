import React from "react";
const MobileCarouselItem: React.FC<{
  list?: Array<string>;
  title?: string;
  type?: "default" | "light";
  onClick?: () => void;
}> = (props) => {
  return (
    <div className="min-h-[350px] w-[350px] text-center text-light items-center flex flex-col rounded-lg p-4">
        <div className="text-4xl font-semibold mb-4 bg-gradient-to-r from-web-green to-web-blue bg-clip-text text-transparent">{props.title}</div>
        <ul className="text-xl flex flex-col justify-evenly h-[80%] font-medium list-disc list-inside text-start items-start">
            {props.list?.map((item) => (
              <li className="font-thin" key={item}>{item}</li>
            ))}
          </ul>
    </div>
  );
}

export default MobileCarouselItem;