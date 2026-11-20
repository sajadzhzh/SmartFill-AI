
"use client";

import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const path = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full px-5 py-2 flex justify-between items-center fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/60"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Link href={"/"}>
        <Image
          src={logo}
          alt="Smart_Fill_AI"
          width={500}
          height={500}
          className="w-30"
        />
      </Link>

      <div className="hidden md:flex gap-8">
        <Link
          href={"/"}
          className={
            path === "/"
              ? "text-[18px] text-(--primary) border-b-2"
              : "text-[18px] hover:text-(--heading) border-b-2 border-transparent"
          }
        >
          خانه
        </Link>

        <Link
          href={"/aboutModel"}
          className={
            path === "/aboutModel"
              ? "text-[18px] text-(--primary) border-b-2"
              : "text-[18px] hover:text-(--heading) border-b-2 border-transparent"
          }
        >
          درباره مدل
        </Link>
      </div>

      <div className="py-2 px-4 bg-green-300/50 border border-green-300 rounded-2xl flex items-center gap-2">
        <div className="size-2 rounded-full bg-green-500 animate-pulse" />
        <p className="text-green-500">مدل آنلاین</p>
      </div>
    </header>
  );
}
