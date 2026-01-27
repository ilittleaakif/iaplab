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
    className={`ActnBtnHover relative w-full sm:w-fit mx-auto sm:mx-0  px-4 py-2
        flex items-center justify-center rounded-sm 
        gap-2.5 font-extrabold cursor-pointer transition-all duration-500
        whitespace-nowrap
        ${Accent && 'border-2 border-border-dark hover:border-[var(--local)] text-text-soft hover:text-[var(--local)]'}`}
  >
    <span>{label}</span>
    <i className={icon}></i>
  </motion.button>
);
