import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
import SplitText from "../../Assets/SplitText";
import { ActionBtn } from "../../Components/Action_Button";
import Collab from "/Assets/001.png";

function HeroSection({ libRef }) {
  const typedRef = useRef(null);
  const navigate = useNavigate();
  const scrollEvent = (target) => target?.current?.scrollIntoView({ behavior: "smooth" });

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
    <section
      style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),      repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),      repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),      repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)`, }}
      className="relative select-none flex items-center min-h-screen overflow-hidden font-main">

      {/* Content Grid */}
      <div className="relative z-10 grid w-full mx-auto px-6 md:mt-0 mt-28 md:px-10 md:gap-4 gap-6 md:grid-cols-2 items-center">

        {/* Left Content */}
        <div className="flex flex-col gap-1">

          {/* Typing text */}
          <h1 className="text-[40px] md:text-7xl font-bold text-text-soft leading-tight">
            <span>to{" "}</span>
            <span
              className="inline-block text-transparent bg-gradient-to-r from-text to-text-soft bg-clip-text"
              ref={typedRef}
            />
          </h1>

          {/* Greeting text */}
          <div className="border-t-2 border-border pt-2 md:pt-6 max-w-2xl text-text-soft">
            <p className="md:text-xl text-base font-semibold text-text animate-fadein ">
              Hello my friend! 👋
            </p>
            <SplitText
              text="Welcome to the most comprehensive IAP library. Embark on your learning adventure with innovative resources and interactive experiences."
              className="md:text-lg text-xs text-text-soft"
              delay={100}
              duration={1}
              ease="power3.out"
              splitType="words"
              from={{ opacity: 0, y: 10 }}
              to={{ opacity: 1, y: 0 }}
              textAlign="left"
            />
          </div>

          {/* Buttons */}
          <div className="flex flex-col content-start items-center sm:flex-row gap-2 mt-2">

            <ActionBtn
              label="Discover E-Library"
              icon="fa-solid fa-file-circle-plus"
              clickEvent={() => navigate("/elibrary")}
              delay="0.5s"
            />
            <ActionBtn
              label="Provide a suggestion"
              icon="fa-solid fa-lightbulb"
              clickEvent={() => navigate("/form/suggest")}
              delay="0.8s"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center">
          <img
            src={Collab}
            className="animate-m3leg h-auto max-h-[4500px] w-full max-w-lg object-contain  "
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
