import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { GlobalLibraryDatas } from '../Data/Library_Datas';
import music from '/Assets/mid/music.svg';

const backgroundStyle = {
  background: 'radial-gradient(ellipse at center, #3d2914 0%, #2a1810 30%, #1a0f0a 60%, #0d0806 100%)',
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const SemCard = ({ txt, onClick }) => (
  <button
    onClick={onClick}
    className="
      flex items-center justify-center p-10
      transition duration-200
      hover:text-[#DF862D] text-text active:opacity-60 cursor-pointer
    "
  >
    <span className="font-main text-5xl sm:text-7xl font-extrabold">
      {txt}
    </span>
  </button>
);

const MaintenancePage = () => {
  const navigate = useNavigate();

  return (
    <section
      className="flex min-h-screen flex-col items-center justify-center px-4"
      style={backgroundStyle}
    >
      <img
        src={music}
        alt="Music illustration"
        className="w-full max-w-md sm:max-w-lg"
      />

      <p className="mt-2 text-base sm:text-xl font-cute text-[#9c774e] text-center">
        tidying up behind the scenes. Back soon {'<'}3
      </p>
      <span className="block text-center font-main text-white/90">
          Keep reading!
        </span>

      <motion.div className="pt-8 space-y-3">
        <div className="mx-auto grid grid-cols-2 sm:grid-cols-4 gap-2">
          {GlobalLibraryDatas.map((data) => (
            <motion.div
              key={data.semester}
              variants={scaleIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              <SemCard
                txt={data.abbr}
                onClick={() =>
                  navigate(`/semester/${data.semester}`)
                }
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default MaintenancePage;
