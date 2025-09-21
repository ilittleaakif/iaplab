import { Laptop, Globe, Smartphone, Database, Cloud, ShieldCheck, Cpu, Bot } from "lucide-react";
import CodingIll from '/Assets/codingGuy.svg';

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
      <div className="flex flex-col items-center my-10">
        <img src={CodingIll} className="md:w-60 w-4/5" />
        <span className="font-main text-[#588865] font-bold"> Coming soon...</span>
      </div>
      <div className="grid grid-cols-1 w-full max-w-7xl  md:grid-cols-3 gap-6">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="border-2 border-[#3364c5] shadow-[#3364c57e] p-6 text-center hover:shadow-[0_0_20px] hover:-translate-y-1 *:transition-all hover:*:text-[#3364C5] transition cursor-pointer rounded-none"
          >
            <cat.icon className="w-10 h-10 mx-auto mb-4 text-[#3364C5]" />
            <h3 className="text-text text-lg font-bold">{cat.titleAr}</h3>
            <p className="text-text-soft font-main">{cat.titleEn}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

