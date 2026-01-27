import { Extra_cards_data, OtherLabsDatas, GlobalLibraryDatas } from "../../Data/Library_Datas";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { ActionBtn } from "../../Components/Action_Button";

import LibraryHeading from "../library/Components/Library_Heading";
import RandomQuery from "../../Components/Ayah_Quote";
import ExtraCard from "./Extra_Card";
import itPic from "/Assets/mid/003.svg";

const SemCard = ({ txt, onClick }) => {
  return (
    <div
      className="flex items-center justify-center p-10 cursor-pointer"
      onClick={onClick}
    >
      <span className="text-7xl font-main font-extrabold">{txt}</span>
    </div>
  )
}


const fadeIn = (delay = 0) => ({
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: "easeOut",
    },
  },
});

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const LibrarySection = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const OpenLink = (link) => window.open(link, "_blank");

  return (
    <div className="font-main relative text-text md:space-y-16 space-y-12 max-w-6xl mx-auto px-4" ref={ref}>

      {/* Quran Quote */}
      <RandomQuery isAyah={true} />


      {/* Lab Discovery Section */}
      <motion.div className="space-y-2 sm:space-y-3">
        <LibraryHeading title={"Semesters"} />
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mx-auto">
          {GlobalLibraryDatas.map((data, idx) => (
            <motion.div
              key={idx}
              variants={fadeIn(idx / 2)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <SemCard
                txt={data.abbr}
                onClick={() => navigate(`/semester/${data.semester}`)}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>


      {/* Quote */}
      <motion.div
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <RandomQuery isAyah={false} />
      </motion.div>

      {/* Lab Discovery Section */}
      <motion.section
        variants={fadeIn(0.3)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col md:flex-row items-center justify-center "
      >
        <motion.img
          src={itPic}
          className="max-w-xs w-full drop-shadow-xl"
          variants={scaleIn}
        />

        <motion.div variants={fadeIn(0.4)} className="font-cute space-y-2">
          <p className="sm:text-5xl text-4xl font-bold">
            Acces to the <span className="marker  markerc">powerfull</span> It ressources.
          </p>
          <p className="sm:text-xl">
            Access courses, docs, drives, and more.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="font-cute flex items-center gap-2 rounded-full bg-[#8B865C] text-white px-6 py-2 shadow-md cursor-pointer"
          >
            <span>discover</span>
            <i className="far fa-file"></i>
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Support Section */}
      <motion.div
        variants={fadeIn(0.2)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="my-16 text-center"
      >
        <p className="font-logo font-extrabold text-seventh sm:text-2xl text-lg">
          Your support means a lot to us ♥
        </p>
        <div className="w-fit mx-auto mt-4">
          <ActionBtn
            icon="fa-solid fa-heart"
            label="Provide a suggestion"
            clickEvent={() => OpenLink("https://www.buymeacoffee.com/ziwir")}
            delay={0.2}
            Accent="sixth"
          />
        </div>
      </motion.div>

      {/* Extra Cards */}
      <nav className="grid grid-cols-2 mx-auto gap-4 max-w-4xl px-4 mb-16">
        {Extra_cards_data.map((data, idx) => (
          <motion.div
            key={idx}
            variants={fadeIn(idx * 0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ExtraCard
              Link={data.link}
              title={data.title}
              des={data.des}
              icon={data.icon}
            />
          </motion.div>
        ))}
      </nav>
    </div >
  );
});

export default LibrarySection;