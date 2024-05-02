import React from "react";

const Settings = () => {
  return (
    <div className="overflow-y-auto max-w-[22.5%]">
      <div className="h-80 bg-white rounded-2xl mb-6">
        <div className="text-center text-lg font-medium py-4">সেটিংস</div>
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
