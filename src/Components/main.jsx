import React, { memo, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { LazyMotion, domAnimation, m } from "framer-motion";
import { Extra_cards_data, GlobalLibraryDatas } from "../Data/Library_Datas";
import pic from "/Assets/mid/001.svg";
import ExtraCard from "./ExtraCard";

/* ================= ANIMATIONS ================= */
const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

/* ================= SEMESTER BUTTON ================= */
const SemCard = memo(({ txt, onClick }) => (
  <button
    onClick={onClick}
    className="
      flex items-center justify-center sm:p-10 p-6
      transition duration-200
      hover:text-[#FBA329]
      text-text active:opacity-60
      cursor-pointer select-none
      will-change-transform
      tap-highlight-transparent w-full
    "
  >
    <span className="font-main text-6xl sm:text-7xl font-extrabold">
      {txt}
    </span>
  </button>
));

/* ================= MAIN PAGE ================= */
const MainPage = () => {
  const navigate = useNavigate();

  const goToSemester = useCallback(
    (semester) => navigate(`/semester/${semester}`),
    [navigate]
  );

  return (
    <LazyMotion features={domAnimation}>
      <section
        className="flex relative pt-14 min-h-screen flex-col items-center justify-center select-none"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
            radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
            radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
            radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
            #000000
          `,
        }}
      >
        {/* HERO */}
        <img
          src={pic}
          alt="Library illustration"
          className="w-full max-w-sm pointer-events-none animate-float"
          loading="eager"
        />

        <p className="mt-2 mb-2 text-4xl sm:text-5xl font-curs text-shadow-[0_0_30px_#FBA329] text-[#FBA329] text-center">
          رَمَضَــــــانٌ كَــــرِيمٌ 
        </p>

        <span className="block font-arabic text-center text-shadow-[0_0_8px_white] text-white/90">
          إِيـآبْتِيمْ يَتَمَنَّى لَكُمْ <span className="text-[#FBA329]">رَمَضَــــانًا</span> كَــــرِيمًا
        </span>

        {/* SEMESTERS */}
        <m.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="pt-10 w-full"
        >
          <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 max-w-3xl">
            {GlobalLibraryDatas.map((data) => (
              <m.div key={data.semester} variants={scaleIn}>
                <SemCard
                  txt={data.abbr}
                  onClick={() => goToSemester(data.semester)}
                />
              </m.div>
            ))}
          </div>
        </m.div>

        {/* EXTRA CARDS */}
        <m.nav
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="grid sm:grid-cols-2 mx-auto gap-4 max-w-4xl px-4 mt-14 mb-16 w-full"
        >
          {Extra_cards_data.map((data) => (
            <m.div key={data.title} variants={scaleIn}>
              <ExtraCard
                Link={data.link}
                title={data.title}
                des={data.des}
                icon={data.icon}
              />
            </m.div>
          ))}
        </m.nav>

        {/* FOOTER */}
        <footer className="pt-10 pb-8">
          <p className="font-cute text-text opacity-90 text-center">
            IAPteam © 2026
          </p>
        </footer>
      </section>
    </LazyMotion>
  );
};

export default MainPage;
