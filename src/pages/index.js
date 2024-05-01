import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Outline from "@/components/Outline";
import Main from "@/components/Main";
import Settings from "@/components/Settings";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="flex gap-1">
        <Sidebar />
        <div className="flex h-[calc(100vh-79.2px)] rounded-tl-2xl w-full p-5 gap-6 bg-gray-100">
          <Outline />
          <Main />
          <Settings />
        </div>
      </div>
    </div>
  );
}
