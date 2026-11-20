import { FaPerson, FaPersonDress } from "react-icons/fa6";

export default function Predict({
  isMale,
  confidence,
}: {
  isMale: boolean;
  confidence: number;
}) {
  return (
    <section className="py-8 px-6 bg-(--primary)/30 border border-(--primary)/50 rounded-2xl shadow-2xl flex gap-4 w-[90svw] md:w-max">
      <div className="bg-(--primary)/40 py-2 px-4 text-(--primary) rounded-4xl flex items-center">
        {isMale ? <FaPerson size={64} /> : <FaPersonDress size={64} />}
      </div>

      <div className="flex flex-col gap-4 items-center border-e border-(--primary) px-4 ">
        <p className="text-(--primary)">نتیجه پیش‌بینی</p>
        <h2 className="text-(--primary) text-[34px] font-bold">
          {isMale ? "مرد" : "زن"}
        </h2>
      </div>

      <div className="flex flex-col gap-4 items-center px-4 min-w-[25svw]">
        <p className="text-(--primary)">اطمینان مدل</p>
        <h2 className="text-(--primary) text-[34px] font-bold">
          {confidence}%
        </h2>
        <div className="border-b-4 border-(--border) rounded-xl relative w-full">
          <div
            className={`absolute left-0 top-0 border-t-4 border-(--primary) rounded-xl`}
            style={{ width: `${confidence}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
}
