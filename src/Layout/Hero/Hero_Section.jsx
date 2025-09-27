import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
import SplitText from "../../Assets/SplitText";
import { ActionBtn } from "../../Components/Action_Button";
import Collab from "/Assets/Collab.webp";

function HeroSection({ libRef }) {
  const typedRef = useRef(null);
  const navigate = useNavigate();
  const scrollEvent = (target) =>
    target?.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Learn.", "Create.", "Explore.", "Build.", "Grow."],
      typeSpeed: 140,
      backSpeed: 30,
      backDelay: 3000,
      loop: true,
      cursorChar: "_",
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="relative select-none flex items-center min-h-screen bg-bg overflow-hidden font-main">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),      repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)    `, }} />


      {/* Content Grid */}
      <div className="relative z-10 grid w-full mx-auto px-6 md:mt-0 mt-32 md:px-10 md:gap-4 gap-6 md:grid-cols-2 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-1">
          <h1 className="text-[40px] md:text-7xl font-bold text-text-soft leading-tight animate-[fade-in_1s_ease-out_forwards]">
            <span>to{" "}</span>
            <span
              className="inline-block text-transparent bg-gradient-to-r from-text to-text-soft bg-clip-text"
              ref={typedRef}
            />
          </h1>

          <div className="border-t-2 border-border pt-2 md:pt-6 max-w-2xl text-text-soft">
            <p className="md:text-xl text-base font-semibold text-text animate-fadein ">
              Hello my friend! 👋
            </p>
            <SplitText
              text="Welcome to the most comprehensive IAP library. Embark on your learning adventure with innovative resources and interactive experiences."
              className="md:text-lg text-xs text-text-soft "
              delay={200}
              duration={0.5}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 5 }}
              to={{ opacity: 1, y: 0 }}
              threshold={0.1}
              rootMargin="-100px"
              textAlign="left"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col content-start items-center sm:flex-row gap-2 mt-2">
            <ActionBtn
              label="Discover E-Library"
              icon="fa-solid fa-file-circle-plus"
              clickEvent={() => navigate("/elibrary")}
              delay="0.3s"
            />
            <ActionBtn
              label="Provide a suggestion"
              icon="fa-solid fa-lightbulb"
              clickEvent={() => navigate("/suggest")}
              delay="0.9s"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <img
            src={Collab}
            className="animate-m3leg h-auto max-h-[400px] w-full max-w-md object-contain shadow-c lg:max-h-[500px] "
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
