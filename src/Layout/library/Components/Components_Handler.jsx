import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100 },
  },
};

const InfoCard = ({ title, url, icon }) => (
  <motion.a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    variants={cardVariants}
    className="
      flex flex-col items-center justify-center gap-4 p-8 text-center
      rounded-md border-2 border-border
      bg-bg/10 backdrop-blur-2xl
      text-text font-main
      cursor-pointer transition duration-300 hover:border-accent
    "
  >
    <i className={`${icon} text-3xl md:text-4xl`} />
    <span className="text-lg font-semibold md:text-xl">{title}</span>
  </motion.a>
);

export const SemesterContainer = ({ semesterData, sectionRef }) => {
  if (!semesterData) return null;

  return (
    <motion.section
      ref={sectionRef}
      className="w-full mx-auto font-main text-text"
      // 3. Trigger Entry Animation when in view
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }} // Runs once when 20% visible
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {semesterData.map((item, idx) => (
          <InfoCard
            key={idx}
            title={item.title}
            url={item.Url}
            icon={item.ClassIcon}
          />
        ))}
      </div>
    </motion.section>
  );
};
