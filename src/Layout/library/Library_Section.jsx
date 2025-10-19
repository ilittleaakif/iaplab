import { forwardRef } from "react";
import { OTHER_LABS, DATAS } from "../../Data/Library_Datas";
import { useNavigate } from "react-router-dom";
import { ExtraCard } from "../../Components/Extra_Card";
import { LibraryCard } from "./Library_Card";
import clusmy from "/Assets/002.svg";
import RandomQuery from "../../Components/Ayah_Quote";
import { motion } from "motion/react";
import LibraryHeading from "./Library_Heading";

const fadeInUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
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
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="grid max-w-7xl md:gap-6 gap-4 px-4 py-8 mx-auto grid-cols-1 md:grid-cols-3"
      >
        <ExtraCard
          clickEvent={() => navigate("/Elibrary")}
          accent={"youtube"}
          iconClass="fa-solid fa-book-open"
          title={"E-Library"}
          des={
            "Découvre une e-librairie dédiée à l’informatique : apprends différents domaines IT, accède à des cours gratuits et trouve des ressources pour progresser dans ta carrière."
          }
          btn={"Cliquez ici"}
        />
        <ExtraCard
          Link={
            "https://drive.google.com/drive/folders/16Hykdvbrpv7yPeTWSG493T6JkP8fdgeS"
          }
          accent={"second"}
          iconClass="fa-solid fa-graduation-cap"
          title={"Cycle d'ingénieur"}
          des={"Vous souhaitez vous préparer au Cycle d'ingénieur ?"}
          btn={"Cliquez ici"}
        />
        <ExtraCard
          Link={"https://guideinfo.netlify.app/"}
          accent={"second"}
          iconClass="fa-solid fa-compass"
          title={"Orientation"}
          des={
            "Tu as un DUEG ou une licence en informatique ? Tu veux connaître tous les masters et cycles d'ingénieur en informatique au Maroc ?"
          }
          btn={"Cliquez ici"}
        />
      </motion.div>
    </div>
  );
});

export default LibrarySection;
