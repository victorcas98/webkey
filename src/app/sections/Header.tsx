import Image from "next/image";
import webKeyLogo from "../assets/webkey-logo-lg.png";

export default function Header() {
  return (
    <div className="bg-dark w-full h-fit flex justify-center">
      <Image className="w-[30%] my-2" src={webKeyLogo} alt="logo" />
    </div>
  );
}