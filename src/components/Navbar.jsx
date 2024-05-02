import { BiSolidDonateHeart } from "react-icons/bi";
import logo from "../../public/home-logo.png";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex gap-5">
        <div>
          <Image width={42} src={logo} />
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="text-base font-semibold">হাদিস সমূহ</div>
          <div className="text-xs">হাদিস পড়ুন শিখুন এবং জানুন</div>
        </div>
      </div>
      <div className="flex gap-16">
        <div>
          <input
            className="border-2 rounded-md px-3 py-2.5 outline-0 w-60"
            placeholder="Search Hadith"
          />
        </div>
        <div className="flex gap-3 px-4 py-3 items-center bg-[#2b9e76] rounded-lg">
          <div className="text-white font-medium text-sm ">সাপোর্ট করুন</div>
          <BiSolidDonateHeart color="white" size={23} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
