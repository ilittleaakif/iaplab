import { FilePlus, GraduationCap, MessageCircle } from "lucide-react";
import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
import SplitText from "../../assets/SplitText";

function HeroSection({ libRef }) {
  const typedRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Apprendre.", "Créer.", "Découvrir.", "Étudier."],
      typeSpeed: 170,
      backSpeed: 30,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  const scrollEvent = (target) => target?.current?.scrollIntoView({ behavior: "smooth" });

  const ActionBtn = ({ icon, label, gradient, clickEvent, delay, accent }) => (
    <div
      onClick={() => clickEvent && clickEvent()}
      style={{ animationDelay: delay, '--accent': accent }}
      className={`text-sm md:text-base px-6 py-3 hover:shadow-action flex items-center justify-center gap-2 font-bold font-poppins text-text cursor-pointer transition hover:-translate-y-[2px] active:hover:translate-y-[2px] rounded-sm  ${gradient} animate-fadein opacity-0`}
    >
      <span >{label}</span>
      <i className={icon}></i>
    </div>
  );


  return (
    <div className="select-none relative flex items-center justify-center min-h-screen overflow-hidden font-gortesk bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.2)_0%,rgba(75,0,130,0.1)_25%,rgba(72,61,139,0.05)_50%,transparent_70%),linear-gradient(135deg,#0b0b1f_0%,#1c0f3a_50%,#1a0f3d_100%)]">

      {/* Hero Content */}
      <div className="relative z-10 text-center" >
        <h1 className="text-3xl md:text-7xl font-bold my-4 text-text to-text  animate-[fade-in_1s_ease-out_forwards]">
          <span>pour {" "}</span>
          <span className="inline-block text-transparent bg-gradient-to-r from-accent/80 via-accent to-second bg-clip-text animate-pulse-grow" ref={typedRef}></span>
        </h1>

        <div className="md:max-w-3xl max-w-3/4 mx-auto  font-light leading-relaxed opacity-0 text-light/85 animate-fadein">
          <p className="md:text-lg text-base font-semibold text-text">Salut cher étudiant ! 👋</p>
          <SplitText
            text="Bienvenue dans la bibliothèque IAP la plus complète. Lance-toi dans ton aventure d’apprentissage avec des ressources innovantes et des expériences interactives."
            className="md:text-lg text-xs font-semibold text-center text-text-soft"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="words"
            from={{ opacity: 0, y: 10 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
        </div>


        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-4 md:gap-6 px-10 mx-auto mt-6 md:px-0 md:w-full md:flex-row">
          <ActionBtn
            gradient="bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900"
            accent={'#1D4ED8'}
            label="Discover Lessons"
            icon="fa-solid fa-graduation-cap"
            clickEvent={() => scrollEvent(libRef)}
            delay={'.6s'}
          />
          <ActionBtn
            gradient="bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700"
            accent={'var(--second)'}
            label="Share documents"
            icon="fa-solid fa-file-circle-plus"
            clickEvent={() => navigate('/provide')}
            delay={'1s'}
          />
          <ActionBtn
            gradient="bg-gradient-to-br from-green-500 via-green-600 to-green-700"
            accent={'#15803D'}
            label="Envoyer une suggestion"
            icon="fa-solid fa-lightbulb"
            clickEvent={() => navigate('/support')}
            delay={'1.4s'}
          />

        </div>
      </div >
    </div >
  );
}

export default HeroSection;
