"use server";

import { postFetch } from "@/Helper/Fetch";

export async function Prediction(
  height: number,
  weight: number,
  shoe_size: number,
) {
  if (height <= 0 || weight <= 0 || shoe_size <= 0) {
    return {
      status: "error",
      detail: "تمام مقادیر باید بزرگتر از صفر باشند!",
    };
  }

  try {
    const res = await postFetch("predict", { height, weight, shoe_size });

    if(res.gender){
        return res
    }

    return {
      status: "error",
      detail: "لطفا دوباره تلاش کنید!",
    };
    
  } catch (e: any) {
    console.log(e.message);
    return {
      status: "error",
      detail: "مشکلی در ارتباط با سرور پیش آمد!",
    };
  }
}
