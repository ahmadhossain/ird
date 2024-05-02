import { BiSolidDonateHeart } from "react-icons/bi";
import logo from "../../public/home-logo.png";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <div className="flex gap-5">
        <div>
          <Image width={42} src={logo} />
        </div>
        <div className="min-[1024px]:flex hidden flex-col gap-y-1">
          <div className="text-base font-semibold">হাদিস সমূহ</div>
          <div className="text-xs">হাদিস পড়ুন শিখুন এবং জানুন</div>
        </div>
        <div className="min-[1024px]:hidden flex items-center">
          <div className="text-xl text-[#2b9e76] font-semibold">আল হাদিস</div>
        </div>
      </div>
      <div className="flex min-[1024px]:gap-16 gap-5">
        <input
          className="min-[1024px]:flex hidden border-2 rounded-md px-3 py-2.5 outline-0 w-60"
          placeholder="Search Hadith"
        />
        <div className="min-[1024px]:hidden flex items-center">
          <CiSearch className="bg-gray-100 rounded-lg p-3" size={50} />
        </div>
        <div className="min-[1535px]:flex hidden gap-3 px-4 py-3 items-center bg-[#2b9e76] rounded-lg">
          <div className="text-white font-medium text-sm ">সাপোর্ট করুন</div>
          <BiSolidDonateHeart color="white" size={23} />
        </div>
        <div className="min-[1535px]:hidden flex px-3  items-center bg-[#2b9e76] rounded-lg">
          <IoMdSettings color="white" size={23} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
