import { Sparkles } from "lucide-react";
import HeroForm from "./Form";

export default function Hero() {
  return (
    <section className="hero w-full h-svh absolute -top-15">
      <div className="w-full flex flex-col gap-4 items-center mt-50">
        <div className="bg-(--primary)/25 flex gap-2 py-2 px-4 rounded-4xl border border-(--primary)/30 text-(--heading)">
          <Sparkles className="text-(--primary)" fill="#2563EB" />
          هوش مصنوعی، ساده و سریع
        </div>

        <h1 className="text-[38px] font-bold text-(--heading)">
          پیش‌بینی هوشمند جنسیت
        </h1>
        <p className="text-[20px] text-(--heading)">
          با وارد کردن سه ویژگی، نتیجه را در چند لحظه مشاهده کنید.
        </p>

        <HeroForm />
      </div>

      <div className="w-full absolute h-[10svh] bg-linear-to-t from-(--background) to-transparent top-[90svh]"></div>
    </section>
  );
}
