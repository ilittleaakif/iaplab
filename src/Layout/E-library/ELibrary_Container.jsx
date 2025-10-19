import CodingIll from '/Assets/coder.webp';

const categories = [
  { titleAr: "تطوير البرمجيات", titleEn: "Software Development", icon: "fa-solid fa-laptop" },
  { titleAr: "تطوير الويب", titleEn: "Web Development", icon: "fa-solid fa-globe" },
  { titleAr: "تطبيقات الهاتف", titleEn: "Mobile Apps", icon: "fa-solid fa-mobile-screen" },
  { titleAr: "قواعد البيانات", titleEn: "Databases", icon: "fa-solid fa-database" },
  { titleAr: "الحوسبة السحابية", titleEn: "Cloud Computing", icon: "fa-solid fa-cloud" },
  { titleAr: "الأمن السيبراني", titleEn: "Cyber Security", icon: "fa-solid fa-shield-halved" },
  { titleAr: "هندسة الحاسوب", titleEn: "Computer Engineering", icon: "fa-solid fa-microchip" },
  { titleAr: "الذكاء الاصطناعي", titleEn: "Artificial Intelligence", icon: "fa-solid fa-robot" },
];

export default function ITFieldsCards() {
  return (
    <div className="min-h-screen gap-4 flex items-center justify-center flex-col text-text bg-bg font-main px-4">
      <div className="flex flex-col items-center my-10">
        <img src={CodingIll} className="md:w-60 w-4/5" />
        <span className="font-main text-accent font-bold">Coming soon...</span>
      </div>

      <div className="grid grid-cols-1 w-full max-w-7xl md:grid-cols-3 gap-4">
        {categories.map((cat, idx) => (
          <div
            key={idx}
            className="border-2 flex md:gap-2 items-center justify-between md:flex-col flex-row border-border p-6 text-center hover:shadow-c hover:-translate-y-1 duration-500  transition cursor-pointer rounded-xl"
          >
            <i className={`${cat.icon} text-[#3364C5] text-3xl`}></i>
            <div>
              <h3 className="text-text text-lg font-bold font-arabic">{cat.titleAr}</h3>
              <p className="text-text-soft font-main">{cat.titleEn}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
