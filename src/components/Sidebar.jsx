import { IconContext } from "react-icons";
import { TbBooks } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import { BsSend, BsBook } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { BsGrid } from "react-icons/bs";
import { BiSolidDonateHeart } from "react-icons/bi";

const Sidebar = () => {
  return (
    <div className="min-[1024px]:flex hidden flex-col justify-center items-center">
      <div className="flex items-center flex-col gap-y-6 mt-12 p-4">
        <GoHome
          className="p-3 hover:bg-gray-100 fill-gray-500 rounded-md"
          size={50}
        />
        <TbBooks
          color="white"
          className="bg-[#2b9e76] hover:bg-[#2b9e76] p-3 fill-gray-500 rounded-md"
          size={50}
        />
        <BsBook
          className="p-3 hover:bg-gray-100 fill-gray-500 rounded-md"
          size={50}
        />
        <CiBookmark
          className="p-3 hover:bg-gray-100 fill-gray-500 rounded-md"
          size={50}
        />
        <BsGrid
          className="p-3 hover:bg-gray-100 fill-gray-500 rounded-md"
          size={50}
        />
        <BsSend
          className="p-3 hover:bg-gray-100 fill-gray-500 rounded-md"
          size={50}
        />
      </div>
    </div>
  );
};

export default Sidebar;
