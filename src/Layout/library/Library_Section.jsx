import { Extra_cards_data, OtherLabsDatas, GlobalLibraryDatas } from "../../Data/Library_Datas";
import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

import LibraryHeading from "./Components/Library_Heading";
import RandomQuery from "../../Components/Ayah_Quote";
import ExtraCard from "./Components/Extra_Card";
import LibraryCard from "./Components/Library_Card";
import clusmy from "/Assets/mid/002.svg";

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.5,
      delay,
    },
  },
});

const fadeIn = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
};

const LibrarySection = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const OpenLink = (link) => window.open(link, "_blank");

  return (
    <div className="font-main relative text-text" ref={ref}>
      {/* Sections Container */}
      <section className="md:space-y-12 space-y-8 max-w-6xl mx-auto px-4">

        {/* Quran */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <RandomQuery isAyah={true} />
        </motion.div>

        {/* Semesters Cards */}
        <div className="space-y-2 sm:space-y-3">
          <LibraryHeading title={"Semesters"} />
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mx-auto">
            {GlobalLibraryDatas.map((data, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp(idx / 2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <LibraryCard
                  title={data.semester}
                  icon="fa-solid fa-book-open"
                  onClick={() => navigate(`/semester/${data.semester}`)}
                />
              </motion.div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <RandomQuery isAyah={false} />
        </motion.div>

        {/* Other Labs */}
        <div className="space-y-2 sm:space-y-3">
          <LibraryHeading title={"Other Labs"} />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mx-auto">
            {OtherLabsDatas.map((data, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp(idx / 2)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
              >
                <LibraryCard
                  accent="second"
                  title={data.libName}
                  icon="fa-solid fa-book"
                  onClick={() => OpenLink(data.libUrl)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Extras Cards */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="my-10"
      >
        <img
          src={clusmy}
          className="w-full max-w-xl mx-auto"
        />
      </motion.div>

      {/* Extra Cards Grid */}
      <nav className="grid mx-auto grid-cols-1 gap-4 max-w-7xl px-4">
        {Extra_cards_data.map((data, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp(idx / 2)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ExtraCard Link={data.link} title={data.title} des={data.des} icon={data.icon} />
          </motion.div>
        ))}
      </nav>
    </div>
  );
});

export default LibrarySection;
