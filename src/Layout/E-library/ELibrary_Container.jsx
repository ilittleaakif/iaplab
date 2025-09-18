import { Laptop, Globe, Smartphone, Database, Cloud, ShieldCheck, Cpu, Bot } from "lucide-react";


const categories = [
  { titleAr: "تطوير البرمجيات", titleEn: "Software Development", icon: Laptop },
  { titleAr: "تطوير الويب", titleEn: "Web Development", icon: Globe },
  { titleAr: "تطبيقات الهاتف", titleEn: "Mobile Apps", icon: Smartphone },
  { titleAr: "قواعد البيانات", titleEn: "Databases", icon: Database },
  { titleAr: "الحوسبة السحابية", titleEn: "Cloud Computing", icon: Cloud },
  { titleAr: "الأمن السيبراني", titleEn: "Cyber Security", icon: ShieldCheck },
  { titleAr: "هندسة الحاسوب", titleEn: "Computer Engineering", icon: Cpu },
  { titleAr: "الذكاء الاصطناعي", titleEn: "Artificial Intelligence", icon: Bot },
];

export default function ITFieldsCards() {
  return (
    <div className="min-h-screen gap-4 flex items-center justify-center flex-col text-text bg-bg font-arabic p-10">
      <div className="flex flex-col items-center ">

        <span className="font-main text-sub font-bold">Under Development ...</span>
      </div>
      <div className="grid grid-cols-1 w-full max-w-7xl  md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="border border-second  p-6 text-center hover:shadow-[0_0_40px] hover:-translate-y-1 *:transition-all hover:*:text-second shadow-second/60 transition cursor-pointer rounded-none"
          >
            <cat.icon className="w-10 h-10 mx-auto mb-4 text-second" />
            <h3 className="text-text text-lg font-bold">{cat.titleAr}</h3>
            <p className="text-text-soft">{cat.titleEn}</p>
          </div>
        ))}
      </div>
      <h1 className="font-main my-6 text-xl">Mading with <span className="  text-sub font-bold text-shadow-[0_0_20px_gold]">ZakariaX</span></h1>
    </div>
  );
}

<div className="min-h-screen w-full bg-[#020617] relative">
  {/* Magenta Orb Grid Background */}
  
     {/* Your Content/Components */}
</div>