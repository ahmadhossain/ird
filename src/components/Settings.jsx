import React, { useState } from "react";

const Settings = () => {
  const [font1, setfont1] = useState(22);
  const [font2, setfont2] = useState(19);
  const arr = ["১৯", "২০", "২১", "২২"];
  return (
    <div className="min-[1535px]:flex flex-col hidden overflow-y-auto max-w-[22.5%]">
      <div className="px-5 py-3 bg-white rounded-2xl mb-6">
        <div className="text-center text-lg font-medium py-4">সেটিংস</div>
        <div className="flex flex-col gap-4 py-3">
          <p className="text-sm">এরাবিক ফন্ট সাইজ</p>
          <div className="flex items-center gap-3">
            <input
              className="slider w-full"
              type="range"
              min="18"
              max="40"
              value={font1}
              onChange={(e) => setfont1(e.target.value)}
            />
            <div>{arr[font1 - 18]}</div>
          </div>
        </div>
        <div className="flex flex-col gap-4 py-3">
          <p className="text-sm">অনুবাদ ফন্ট সাইজ</p>
          <div className="flex items-center gap-3">
            <input
              className="slider w-full"
              type="range"
              min="14"
              max="25"
              value={font2}
              onChange={(e) => setfont2(e.target.value)}
            />
            <div>{font2}</div>
          </div>
        </div>
        <div className="flex py-2 justify-between">
          <div className="text-sm">নাইট মোড</div>
          <label className="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer  peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-emerald-500"></div>
          </label>
        </div>
      </div>
      <div className="px-4 py-4 bg-[#34AB82] text-white rounded-2xl">
        <div className="text-xl font-semibold mb-3">
          আপনিও সদাকায়ে জারিয়াতে অংশ নিন
        </div>
        <p className="text-xs mb-5 leading-7">
          আপনার দান, সেটা ছোট হলেও, ইসলামের বার্তা ও হাদিস প্রচারে সহায়তা করবে।
          আমাদের কাজের অংশ হতে এবং এই গুরুত্বপূর্ণ কাজে সাহায্য করতে আমাদের
          প্রজেক্টে হাদিয়া দিন। ইনশাআল্লাহ এটি সদাকায়ে জারিয়াহ হিসেবে আল্লাহ্‌র
          কাছে কবুল হবে।
        </p>
        <div className="flex justify-center">
          <button className="px-6 py-3 rounded-lg text-sm bg-white text-emerald-500">
            সাপোর্ট করুন
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
