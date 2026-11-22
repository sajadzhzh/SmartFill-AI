"use client";

import { Prediction } from "@/Actions/Predict";
import Predict from "@/Components/Predict/Predict";
import {
  RulerDimensionLine,
  Sparkles,
  SportShoe,
  User2,
  WeightTilde,
} from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast";

interface Response {
  gender: string;
  confidence: number;
}

export default function HeroForm() {
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [shoe_size, setShoe_size] = useState(0);
  const [req, setReq] = useState<Response | null>(null);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (height <= 0 && weight <= 0 && shoe_size <= 0) {
      toast.error("تمام مقادیر باید بزرگتر از صفر باشند!");
      return;
    }
    if (height <= 0) {
      toast.error("قد باید بزرگتر از صفر باشد!");
      return;
    }
    if (weight <= 0) {
      toast.error("وزن باید بزرگتر از صفر باشد!");
      return;
    }
    if (shoe_size <= 0) {
      toast.error("سایز کفش باید بزرگتر از صفر باشد!");
      return;
    }

    const request = await Prediction(height, weight, shoe_size);

    if (request?.status) {
      toast.error(request.detail);
      return;
    }

    setReq({ gender: request.gender, confidence: request.confidence });
  };

  return (
    <>
      <div className="py-8 px-6 bg-(--surface) border border-(--border) rounded-2xl shadow-2xl flex flex-col gap-4 w-[90svw] md:w-max z-10">
        <div className="flex gap-1 items-center">
          <User2 className="text-(--primary)" fill="#2563EB" size={28} />
          <p className="text-(--heading) font-bold text-[18px]">
            اطلاعات ورودی
          </p>
        </div>

        <form
          className="flex-col flex gap-4 items-center w-full"
          method="POST"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="flex-col md:flex-row flex gap-4 items-center w-full">
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
                className="px-2 py-1 border border-(--border) rounded focus:bg-(--soft-blue) w-full"
                onChange={(e) => setHeight(Number(e.target.value))}
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
                className="px-2 py-1 border border-(--border) rounded focus:bg-(--soft-blue) w-full"
                onChange={(e) => setWeight(Number(e.target.value))}
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
                className="px-2 py-1 border border-(--border) rounded focus:bg-(--soft-blue) w-full"
                onChange={(e) => setShoe_size(Number(e.target.value))}
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

      {req&& (
        <Predict isMale={req?.gender == "Male" ? true : false} confidence={req.confidence} />
      )}
    </>
  );
}
