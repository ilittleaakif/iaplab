import { forwardRef } from "react";
import { OTHER_LABS, DATAS } from "../../Data/Library_Datas";
import { useNavigate } from "react-router-dom";
import { ExtraCard } from "../../Components/Extra_Card";
import { LibraryCard } from "./Library_Card";
import clusmy from "/Assets/002.svg";
import RandomQuery from "../../Components/Ayah_Quote";
import { motion } from "motion/react";
import LibraryHeading from "./Library_Heading";
import { Extra_cards_data } from "../../Data/Library_Datas";

const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 1, ease: "easeOut" }
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } },
};

const LibrarySection = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const OpenLink = (link) => window.open(link, "_blank");

  return (
    <div className="font-main relative text-text" ref={ref}>
      {/* Sections Container */}
      <div className="md:space-y-12 space-y-8 max-w-6xl mx-auto px-4">
        {/* Quran */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <RandomQuery isAyah={true} />
        </motion.div>

        {/* Semesters Cards */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-2 sm:space-y-3"
        >
          <LibraryHeading title={"Semesters"} icon={'fas fa-book'} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mx-auto">
            {DATAS.map((data, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <LibraryCard
                  title={data.semester}
                  iconClass="fa-solid fa-book-open"
                  onClick={() => navigate(`/semester/${data.semester}`)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quote */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <RandomQuery isAyah={false} />
        </motion.div>

        {/* Other Labs */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-2 sm:space-y-3"
        >
          <LibraryHeading title={"Other Labs"} icon="fa-solid fa-graduation-cap" />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mx-auto">
            {OTHER_LABS.map((data, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <LibraryCard
                  accent="second"
                  title={data.libName}
                  iconClass="fa-solid fa-music"
                  onClick={() => OpenLink(data.libUrl)}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Extras Cards */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="my-10 space-y-2"
      >
        <img
          src={clusmy}
          className="w-full max-w-lg drop-shadow-2xl drop-shadow-bg mx-auto"
        />
      </motion.div>


      {/* Extra Cards Grid */}
      <div className="grid mx-auto grid-cols-1 md:grid-cols-3 gap-2 items-start max-w-7xl px-4">
        {Extra_cards_data.map((data, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ExtraCard title={data.title} des={data.des} icon={data.icon} />
          </motion.div>
        ))}
      </div>
    </div>
  );
});

export default LibrarySection;
