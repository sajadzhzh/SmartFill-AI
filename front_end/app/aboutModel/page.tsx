import {
  BrainCircuit,
  GitBranch,
  Database,
  Code2,
  Ruler,
  Weight,
  Footprints,
  ArrowLeft,
  Info,
  ShieldCheck,
  Cpu,
} from "lucide-react";

const modelInfo = [
  {
    title: "الگوریتم",
    value: "Decision Tree",
    icon: GitBranch,
  },
  {
    title: "نوع یادگیری",
    value: "Supervised Learning",
    icon: BrainCircuit,
  },
  {
    title: "کتابخانه",
    value: "Scikit-learn",
    icon: Code2,
  },
];

const features = [
  { title: "قد", subtitle: "Height", icon: Ruler },
  { title: "وزن", subtitle: "Weight", icon: Weight },
  { title: "سایز کفش", subtitle: "Shoe Size", icon: Footprints },
];

const steps = [
  { title: "دریافت اطلاعات", description: "دریافت قد، وزن و سایز کفش" },
  { title: "پردازش داده‌ها", description: "آماده‌سازی اطلاعات ورودی" },
  { title: "طبقه‌بندی", description: "تحلیل داده‌ها توسط درخت تصمیم" },
  { title: "نمایش نتیجه", description: "ارائه پیش‌بینی و اطمینان مدل" },
];

export default function AboutModel() {
  return (
    <main dir="rtl" className="min-h-screen bg-white text-(--foreground)">
      
      <section className="relative overflow-hidden px-6 py-20">
        <div className="absolute inset-0 bg-linear-to-b from-(--primary)/10 via-white to-white" />

        <div className="relative mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-(--primary)/10 px-4 py-2 text-sm font-medium text-(--primary)">
              <BrainCircuit size={17} />
              SMARTFILL AI / MODEL OVERVIEW
            </span>

            <h1 className="text-3xl font-extrabold leading-relaxed md:text-5xl">
              مدل هوشمند ما
              <span className="block text-(--primary)">چگونه کار می‌کند؟</span>
            </h1>

            <p className="max-w-lg text-base leading-8 text-slate-500">
              با ساختار، الگوریتم و نحوه عملکرد مدل یادگیری ماشین SmartFill AI
              آشنا شوید و ببینید چگونه اطلاعات ورودی به یک پیش‌بینی تبدیل
              می‌شوند.
            </p>

            <a
              href="#process"
              className="inline-flex items-center gap-2 rounded-xl bg-(--primary) px-6 py-3 font-semibold text-white transition hover:opacity-90"
            >
              مشاهده فرآیند پیش‌بینی
              <ArrowLeft size={18} />
            </a>
          </div>

          
          <div className="relative flex min-h-72 items-center justify-center">
            <div className="absolute size-64 rounded-full bg-sky-200/40 blur-3xl" />

            <div className="relative flex size-64 items-center justify-center rounded-[3rem] border border-blue-100 bg-linear-to-br from-blue-50 to-cyan-50 shadow-xl shadow-blue-100/60">
              <BrainCircuit
                size={112}
                strokeWidth={1.2}
                className="text-(--primary)"
              />

              <div className="absolute right-5 top-8 rounded-xl border border-blue-100 bg-white p-3 shadow-lg">
                <GitBranch className="text-cyan-500" size={25} />
              </div>

              <div className="absolute bottom-8 left-5 rounded-xl border border-blue-100 bg-white p-3 shadow-lg">
                <Database className="text-(--primary)" size={25} />
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 space-y-2">
          <h2 className="text-2xl font-bold">مشخصات فنی مدل</h2>
          <p className="text-sm text-slate-500">
            فناوری‌هایی که در ساخت SmartFill AI استفاده شده‌اند
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {modelInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-blue-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-blue-50 text-(--primary)">
                  <Icon size={25} />
                </div>
                <p className="mb-2 text-sm text-slate-500">{item.title}</p>
                <h3 className="text-lg font-bold" dir="ltr">
                  {item.value}
                </h3>
              </div>
            );
          })}
        </div>
      </section>

      
      <section id="process" className="bg-slate-50 px-6 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <h2 className="text-2xl font-bold">فرآیند پیش‌بینی</h2>
            <p className="mt-3 text-sm text-slate-500">
              از ورود اطلاعات تا دریافت نتیجه، در چهار مرحله
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative rounded-2xl border border-slate-200 bg-white p-6 text-center"
              >
                <div className="mx-auto mb-5 flex size-12 items-center justify-center rounded-full bg-(--primary)/10 text-lg font-bold text-(--primary)">
                  {index + 1}
                </div>
                <h3 className="mb-3 font-bold">{step.title}</h3>
                <p className="text-sm leading-7 text-slate-500">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="mb-3 text-2xl font-bold">ویژگی‌های ورودی مدل</h2>
            <p className="mb-7 text-sm leading-7 text-slate-500">
              مدل برای انجام پیش‌بینی از سه ویژگی عددی استفاده می‌کند.
            </p>

            <div className="space-y-4">
              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50 p-4"
                  >
                    <div className="rounded-xl bg-blue-100 p-3 text-(--primary)">
                      <Icon size={23} />
                    </div>
                    <div>
                      <h3 className="font-bold">{feature.title}</h3>
                      <p className="mt-1 text-xs text-slate-400" dir="ltr">
                        {feature.subtitle}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          
          <div className="flex flex-col justify-center rounded-3xl border border-amber-200 bg-amber-50/70 p-7">
            <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
              <Info size={25} />
            </div>

            <h2 className="mb-4 text-xl font-bold">محدودیت‌های مدل</h2>

            <p className="text-sm leading-8 text-slate-600">
              خروجی SmartFill AI یک پیش‌بینی مبتنی بر داده‌های آموزشی است و ممکن
              است در برخی موارد اشتباه باشد. میزان اطمینان مدل نیز لزوماً
              نشان‌دهنده دقت واقعی آن در دنیای واقعی نیست.
            </p>

            <div className="mt-6 flex items-center gap-3 rounded-xl bg-white/80 p-4 text-sm text-slate-600">
              <ShieldCheck className="shrink-0 text-amber-600" size={22} />
              این ابزار برای تشخیص قطعی یا تصمیم‌گیری پزشکی طراحی نشده است.
            </div>
          </div>
        </div>
      </section>

      
      <section className="px-6 pb-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 rounded-3xl bg-linear-to-l from-blue-700 to-cyan-600 px-6 py-12 text-center text-white">
          <Cpu size={38} />
          <h2 className="text-2xl font-bold">حالا مدل را امتحان کنید!</h2>
          <p className="text-sm text-white/80">
            اطلاعات خود را وارد کنید و نتیجه پیش‌بینی را ببینید.
          </p>
          <a
            href="/"
            className="rounded-xl bg-white px-7 py-3 font-bold text-blue-700 transition hover:bg-blue-50"
          >
            شروع پیش‌بینی
          </a>
        </div>
      </section>
    </main>
  );
}
