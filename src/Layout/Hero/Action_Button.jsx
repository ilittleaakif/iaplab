import { motion } from "motion/react"

const fadeInUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1, y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      delay,
    },
  },
});

export const ActionBtn = ({ icon, label, clickEvent, delay, Accent }) => (
  <motion.button
    variants={fadeInUp(delay)}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    onClick={() => clickEvent && clickEvent()}
    style={{ '--local': `var(--${Accent})` }}
    className={`w-full sm:w-fit mx-auto sm:mx-0  px-6 py-2.5 
        flex items-center justify-center rounded-full
        gap-2 font-bold cursor-pointer transition-all duration-500
        hover:shadow-c  whitespace-nowrap  hover:-translate-y-0.5
        ${Accent ? 'bg-[var(--local)] text-white' : 'bg-bg-card text-text-soft'}`}
  >
    <span>{label}</span>
    <i className={icon}></i>
  </motion.button>
);
