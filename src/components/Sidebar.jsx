import { IconContext } from "react-icons";
import { TbBooks } from "react-icons/tb";
import { CiBookmark } from "react-icons/ci";
import { BsSend, BsBook } from "react-icons/bs";
import { GoHome } from "react-icons/go";
import { BsGrid } from "react-icons/bs";
import { BiSolidDonateHeart } from "react-icons/bi";

const Sidebar = () => {
  return (
    <IconContext.Provider
      value={{
        className: "p-3 hover:bg-gray-100 fill-gray-500 rounded-md",
      }}
    >
      {/* <div className="relative"> */}
      <div className="min-[1024px]:flex hidden flex-col justify-center items-center">
        <div className="flex items-center flex-col gap-y-6 mt-12 p-4">
          <GoHome size={50} />
          <TbBooks
            color="white"
            className="bg-[#2b9e76] hover:bg-[#2b9e76]"
            size={50}
          />
          <BsBook size={50} />
          <CiBookmark size={50} />
          <BsGrid size={50} />
          <BsSend size={50} />
        </div>
      </div>
      {/* </div> */}
      {/* <div className="absolute px-4 py-3 bg-[#2b9e76] rounded-lg">
        <BiSolidDonateHeart color="white" size={23} />
      </div> */}
    </IconContext.Provider>
  );
};

export default Sidebar;
