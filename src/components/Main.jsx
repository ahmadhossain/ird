import { TbBooks } from "react-icons/tb";
import { GiBlackBook } from "react-icons/gi";
import { PiBookOpenTextLight } from "react-icons/pi";
import { AiOutlineOpenAI } from "react-icons/ai";
import { IoCopyOutline, IoShareSocialOutline } from "react-icons/io5";
import { IoBookmarkOutline } from "react-icons/io5";
import { MdReportGmailerrorred } from "react-icons/md";
import { SlShareAlt } from "react-icons/sl";
const Main = () => {
  return (
    <div className="min-[1535px]:max-w-[50%] w-full rounded-2xl overflow-y-auto">
      <div className="min-[1280px]:flex hidden items-center bg-[#fafbfb] rounded-t-2xl px-4 py-4 text-sm text-gray-500 border-b">
        <TbBooks size={22} />
        <div>&gt; Bukhari &gt; 1</div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="min-[1280px]:flex hidden bg-white rounded-b-2xl flex gap-3 px-5 py-5">
          <div>
            <GiBlackBook size={40} color="#2b9e76" />
          </div>
          <div className="flex justify-between w-full">
            <div>
              <div className="text-lg font-medium">সহিহ বুখারী</div>
              <div className="text-xs">সর্বমোট হাদিস - ৭৫৬৩</div>
            </div>
            <div className="text-2xl font-medium">صحيح البخاري</div>
          </div>
        </div>
        <div className="bg-white rounded-2xl flex gap-4 px-4 py-5">
          <div className="w-10 h-10 flex justify-center items-center bg-[#34AB82] text-white rounded-xl">
            ১
          </div>
          <div className="flex items-center">ওহীর সূচনা অধ্যায়</div>
        </div>
        <div className="bg-white rounded-2xl p-5 flex flex-col gap-6">
          <div className="border-b pb-6 flex flex-col gap-5">
            <div className="flex gap-2">
              <div className="flex gap-3 items-center">
                <PiBookOpenTextLight size={40} color="#2b9e76" />
                <div>১/১. অধ্যায়ঃ</div>
              </div>
            </div>
            <div>
              আল্লাহ্‌র রসূল (সাল্লাল্লাহু 'আলাইহি ওয়া সাল্লাম)- এর প্রতি কীভাবে
              ওয়াহী [১] শুরু হয়েছিল।
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-8">
            এ মর্মে আল্লাহ তা’আলার বাণীঃ “নিশ্চয়ই আমি আপনার প্রতি সেরূপ ওয়াহী
            প্রেরণ করেছি যেরূপ নূহ ও তাঁর পরবর্তী নবীদের প্রতি ওয়াহী প্রেরণ
            করেছিলাম”। (সূরা আন-নিসা ৪/১৬৩)
          </p>
        </div>
        <div className="bg-white p-5 rounded-2xl">
          <div className="flex gap-3">
            <div className="w-full flex justify-between gap-2 items-center">
              <div className="flex gap-2">
                <AiOutlineOpenAI size={25} color="#2b9e76" />
                <div className="text-[#2b9e76] text-lg">১</div>
              </div>
              <div className="flex min-[1024px]:hidden bg-[#34AB82] text-sm rounded-lg font-semibold text-white px-3 py-2">
                সহিহ হাদিস
              </div>
            </div>
          </div>
          <p className="py-6 leading-9 text-lg">
            حَدَّثَنَا الْحُمَيْدِيُّ عَبْدُ اللَّهِ بْنُ الزُّبَيْرِ، قَالَ
            حَدَّثَنَا سُفْيَانُ، قَالَ حَدَّثَنَا يَحْيَى بْنُ سَعِيدٍ
            الأَنْصَارِيُّ، قَالَ أَخْبَرَنِي مُحَمَّدُ بْنُ إِبْرَاهِيمَ
            التَّيْمِيُّ، أَنَّهُ سَمِعَ عَلْقَمَةَ بْنَ وَقَّاصٍ اللَّيْثِيَّ،
            يَقُولُ سَمِعْتُ عُمَرَ بْنَ الْخَطَّابِ ـ رضى الله عنه ـ عَلَى
            الْمِنْبَرِ قَالَ سَمِعْتُ رَسُولَ اللَّهِ صلى الله عليه وسلم
            يَقُولُ ‏ "‏ إِنَّمَا الأَعْمَالُ بِالنِّيَّاتِ، وَإِنَّمَا لِكُلِّ
            امْرِئٍ مَا نَوَى، فَمَنْ كَانَتْ هِجْرَتُهُ إِلَى دُنْيَا
            يُصِيبُهَا أَوْ إِلَى امْرَأَةٍ يَنْكِحُهَا فَهِجْرَتُهُ إِلَى مَا
            هَاجَرَ إِلَيْهِ
          </p>
          <div className="text-[#2b9e76] text-sm font-medium">
            ‘আলক্বামাহ ইব্‌নু ওয়াক্কাস আল-লায়সী (রহঃ) থেকে বর্ণিত:
          </div>
          <p className="py-5 text-sm leading-8">
            আমি ‘উমর ইব্‌নুল খাত্তাব (রাঃ)-কে মিম্বারের উপর দাঁড়িয়ে বলতে শুনেছিঃ
            আমি আল্লাহর রসূল (সাল্লাল্লাহু ‘আলাইহি ওয়া সাল্লাম)-কে বলতে শুনেছিঃ
            কাজ (এর প্রাপ্য হবে) নিয়ত অনুযায়ী। আর মানুষ তার নিয়ত অনুযায়ী প্রতিফল
            পাবে। তাই যার হিজরত হবে ইহকাল লাভের অথবা কোন মহিলাকে বিবাহ করার
            উদ্দেশ্যে- তবে তার হিজরত সে উদ্দেশ্যেই হবে, যে জন্যে, সে হিজরত
            করেছে। (৫৪, ২৫২৯, ৩৮৯৮, ৫০৭০, ৬৬৮৯, ৬৯৫৩; মুসলিম ২৩/৪৫ হাঃ ১৯০৭,
            আহমাদ ১৬৮) ( আধুনিক প্রকাশনী- ১, ইসলামিক ফাউন্ডেশন ১)
          </p>
          <div className="flex min-[1024px]:justify-between justify-center  text-xs py-3">
            <div className="min-[1024px]:flex hidden items-center gap-3">
              <div className="font-semibold text-gray-800">হাদিসের মান : </div>
              <div className="bg-[#34AB82] rounded-lg font-semibold text-white px-3 py-2">
                সহিহ হাদিস
              </div>
            </div>
            <div className="flex gap-10">
              <IoCopyOutline size={25} color="gray" />
              <IoBookmarkOutline size={25} color="gray" />
              <IoShareSocialOutline size={25} color="gray" />
              <MdReportGmailerrorred size={25} color="gray" />
              <SlShareAlt size={25} color="gray" />
            </div>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
