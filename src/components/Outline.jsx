import React from "react";

const Outline = () => {
  const obj = [
    { num: "১", title: "ওহীর সূচনা অধ্যায়", range: "হাদিসের রেঞ্জ: ১ - ৭" },
    { num: "২", title: "ঈমান", range: "হাদিসের রেঞ্জ: ৮ - ৫৮" },
    { num: "৩", title: "ইল্‌ম", range: "হাদিসের রেঞ্জ: ৫৯ - ১৩৪" },
    { num: "৪", title: "ওজু", range: "হাদিসের রেঞ্জ: ১৩৫ - ২৪৭" },
    { num: "৫", title: "গোসল", range: "হাদিসের রেঞ্জ: ২৪৮ - ২৯৩" },
    { num: "৬", title: "হায়েজ", range: "হাদিসের রেঞ্জ: ২৯৪ - ৩৩৩" },
    { num: "৭", title: "তায়াম্মুম", range: "হাদিসের রেঞ্জ: ৩৩৪ - ৩৪৮" },
    { num: "৮", title: "সালাত", range: "হাদিসের রেঞ্জ: ৩৪৯ - ৫২০" },
    {
      num: "৯",
      title: "সালাতের ওয়াক্তসমূহ",
      range: "হাদিসের রেঞ্জ: ৫২১ - ৬০২",
    },
    { num: "১০", title: "আযান", range: "হাদিসের রেঞ্জ: ৬০৩ - ৮৭৫" },
  ];
  return (
    <div className="min-[1280px]:flex flex-col hidden min-w-[25%] h-full">
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
        <div className="overflow-y-auto h-[calc(100vh-270px)]">
          {obj.map((el, index) => (
            <div
              key={index}
              className={`flex hover:bg-emerald-50 mb-2 gap-2 px-5 py-5 ${
                index == 0 ? "bg-emerald-50" : ""
              } rounded-2xl`}
            >
              <div
                className={`hexagon  ${
                  index == 0
                    ? "bg-[#2b9e76] text-white hover:bg-[#2b9e76]"
                    : "bg-gray-100 text-[#9ca3af]"
                } flex items-center`}
              >
                <span>{el.num}</span>
              </div>
              <div className="flex flex-col gap-y-3 px-3">
                <div className="text-sm">{el.title}</div>
                <div className="text-xs text-gray-500">{el.range}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Outline;
