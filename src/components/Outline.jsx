import React from "react";

const Outline = () => {
  return (
    <div className="min-w-[25%] h-full">
      <div className="flex border-b">
        <button className="w-full bg-white rounded-tl-xl">বই</button>
        <button className="w-full py-3.5 text-white rounded-tr-xl bg-[#2b9e76]">
          অধ্যায়
        </button>
      </div>
      <div className="bg-white py-4 px-3 h-[calc(100vh-173px)] rounded-b-2xl">
        <input
          className="bg-gray-100 rounded-md px-3 py-2.5 mb-4 outline-0 w-full"
          type="text"
          placeholder="Search For Filter"
        />
        <div className="flex gap-2 px-5 py-4 bg-emerald-50 rounded-2xl">
          <div className="hexagon flex items-center text-white">
            <span>১</span>
          </div>
          <div className="flex flex-col gap-y-3 px-3">
            <div className="text-sm">ওহীর সূচনা অধ্যায়</div>
            <div className="text-xs text-gray-500">হাদিসের রেঞ্জ: ১ - ৭</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Outline;
