import Predict from "@/Components/Predict/Predict";
import {
  RulerDimensionLine,
  Sparkles,
  SportShoe,
  User2,
  WeightTilde,
} from "lucide-react";

export default function HeroForm() {
  return (
    <>
      <div className="py-8 px-6 bg-(--surface) border border-(--border) rounded-2xl shadow-2xl flex flex-col gap-4 w-[90svw] md:w-max">
        <div className="flex gap-1 items-center">
          <User2 className="text-(--primary)" fill="#2563EB" size={28} />
          <p className="text-(--heading) font-bold text-[18px]">
            اطلاعات ورودی
          </p>
        </div>

        <form className="flex-col flex gap-4 items-center">
          <div className="flex-col md:flex-row flex gap-4 items-center">
            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="height"
                className="flex gap-1 items-center text-(--heading)"
              >
                <RulerDimensionLine className="rotate-90" /> قد (سانتی متر)
              </label>
              <input
                type="text"
                name="height"
                id="height"
                className="px-2 py-1 border border-(--border) rounded focus:bg-(--soft-blue)"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="weight"
                className="flex gap-1 items-center text-(--heading)"
              >
                <WeightTilde /> وزن (کیلوگرم)
              </label>
              <input
                type="text"
                name="weight"
                id="weight"
                className="px-2 py-1 border border-(--border) rounded focus:bg-(--soft-blue)"
              />
            </div>

            <div className="flex flex-col gap-2 w-full">
              <label
                htmlFor="shoe_size"
                className="flex gap-1 items-center text-(--heading)"
              >
                <SportShoe /> سایز کفش
              </label>
              <input
                type="text"
                name="shoe_size"
                id="shoe_size"
                className="px-2 py-1 border border-(--border) rounded focus:bg-(--soft-blue)"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-(--primary) flex gap-2 text-(--background) justify-center rounded-xl cursor-pointer focus:bg-(--primary-light) hover:shadow-xl"
          >
            <Sparkles className="text-(--background)" fill="#EFF6FF" /> تحلیل و
            پیش‌بینی
          </button>
        </form>
      </div>

      <Predict isMale={true} confidence={50}/>
    </>
  );
}
