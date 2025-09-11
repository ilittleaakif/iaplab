import { FilePlus, GraduationCap, MessageCircle } from "lucide-react";
import { useRef, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Typed from "typed.js";

function HeroSection({ libRef }) {
  const typedRef = useRef(null);

  const navigate = useNavigate();

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Apprendre.", "Créer.", "Découvrir.", "Étudier."],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      cursorChar: '_',

    });
    return () => typed.destroy();
  }, []);

  const scrollEvent = (target) => target?.current?.scrollIntoView({ behavior: "smooth" });

  const ActionBtn = ({ icon: Icon, label, gradient, clickEvent, delay, accent }) => (
    <div
      onClick={() => clickEvent && clickEvent()}
      style={{ animationDelay: delay, '--accent': accent }}
      className={`px-6 py-3 hover:shadow-action  rounded-xl flex items-center justify-center gap-2 font-semibold font-ibm text-white cursor-pointer transition-all transform hover:-translate-y-1  ${gradient} animate-fadein opacity-0`}
    >
      <span>{label}</span>
      <Icon className={'h-5 w-5'} />
    </div>
  );


  return (
    <div className="relative flex items-center justify-center min-h-screen overflow-hidden font-gortesk bg-[radial-gradient(circle_at_center,rgba(138,43,226,0.15)_0%,rgba(75,0,130,0.1)_25%,rgba(72,61,139,0.05)_50%,transparent_70%),linear-gradient(135deg,#0b0b1f_0%,#1c0f3a_50%,#1a0f3d_100%)]">

      {/* Hero Content */}
      <div className="relative z-10 text-center" >
        <h1 className="text-4xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-[fade-in_1s_ease-out_forwards]">
          <span>Ici pour {" "}</span>
          <span className="inline-block text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-green-400 bg-clip-text animate-pulse-grow" ref={typedRef}
          ></span>
        </h1>

        <div className="md:max-w-3xl mt-8 max-w-3/4 mx-auto md:text-lg font-light leading-relaxed opacity-0 text-light/85 animate-fadein">
          <p className="text-lg font-semibold">Salut cher étudiant ! 👋</p>
          <p >Bienvenue dans la bibliothèque IAP la plus complète. Lance-toi dans ton aventure d’apprentissage avec des ressources innovantes et des expériences interactives.</p>
        </div>


        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-6 px-10 mx-auto mt-6 md:px-0 md:w-full md:flex-row">
          <ActionBtn
            gradient="bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900"
            accent={'#1D4ED8'}
            label="Discover Lessons"
            icon={GraduationCap}
            clickEvent={() => scrollEvent(libRef)}
            delay={'.5s'}
          />
          <ActionBtn
            gradient="bg-gradient-to-br from-yellow-500 via-yellow-600 to-yellow-700"
            accent={'#FFD700'}
            label="Share documents"
            icon={FilePlus}
            clickEvent={() => navigate('/provide')}
            delay={'.9s'}
          />
          <ActionBtn
            gradient="bg-gradient-to-br from-green-500 via-green-600 to-green-700"
            accent={'#15803D'}
            label="Get Support"
            icon={MessageCircle}
            clickEvent={() => navigate('/support')}
            delay={'1.3s'}
          />
        </div>
      </div >
    </div >
  );
}

export default HeroSection;
