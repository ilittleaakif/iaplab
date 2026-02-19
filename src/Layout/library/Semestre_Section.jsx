import { useEffect, useMemo, memo } from "react";
import { useParams } from "react-router-dom";
import { LazyMotion, domAnimation, m } from "framer-motion";
import SubHeader from "./SubHeader";
import { GlobalLibraryDatas } from "../../Data/Library_Datas";

/* =========================
   Animation Variants
========================= */
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};


const InfoCard = memo(({ title, url, icon }) => (
  <m.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    variants={cardVariants}
    className="
      flex flex-col items-center justify-center gap-4 p-8 text-center
      rounded-sm border-2 border-border
      bg-bg/10 backdrop-blur-2xl
      text-text font-main
      cursor-pointer transition duration-300
      hover:border-accent hover:-translate-y-1
      will-change-transform
    "
  >
    <i className={`${icon} text-3xl md:text-4xl`} />
    <span className="text-lg font-semibold md:text-xl">{title}</span>
  </m.a>
));




const SemesterContent = () => {
  const { name } = useParams();

  const semester = useMemo(
    () => GlobalLibraryDatas.find((e) => e.semester === name), [name]
  );

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [name]);

  if (!semester)
    return (
      <h2 className="text-center text-bg mt-20">
        Semestre introuvable !
      </h2>
    );

  return (
    <LazyMotion features={domAnimation}>
      <div
        className="font-main min-h-screen relative overflow-hidden"
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
        <SubHeader title={semester.semester} />

        <div className="w-full sm:px-20 px-8 py-2">
          <m.section
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={containerVariants}
            className="grid grid-cols-1 gap-4 md:grid-cols-2"
          >
            {semester.modules.map((item) => (
              <InfoCard
                key={item.title}
                title={item.title}
                url={item.Url}
                icon={item.ClassIcon}
              />
            ))}
          </m.section>
        </div>
      </div>
    </LazyMotion>
  );
};

export default SemesterContent;
