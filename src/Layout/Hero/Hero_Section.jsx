import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
import SplitText from "../../Assets/SplitText";
import { ActionBtn } from "../../Components/Action_Button";
import Collab from "/Assets/001.svg";

function HeroSection() {
  const typedRef = useRef(null);
  const navigate = useNavigate();
  const [coverLoaded, setCoverLoaded] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Learn.", "Create.", "Explore.", "Build.", "Grow."],
      typeSpeed: 140,
      backSpeed: 30,
      backDelay: 3000,
      loop: true,
      cursorChar: '_'
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = Collab;
    img.onload = () => setCoverLoaded(true);
  }, []);



  return (
    <section
      className="relative select-none flex items-center min-h-screen overflow-hidden font-main">

      {/* Content Grid */}
      <div className="relative z-10 grid w-full mx-auto px-6 sm:mt-0 mt-28 sm:px-10 sm:gap-4 gap-6 sm:grid-cols-2 items-center">

        {/* Left Content */}
        <div className="flex flex-col ">

          {/* Typing text */}
          <h1 className="text-[40px] lg:text-7xl md:text-4xl font-bold text-text-soft ">
            <span>to{" "}</span>
            <span
              className="inline-block text-transparent bg-gradient-to-r from-text to-text-soft bg-clip-text"
              ref={typedRef}
            />
          </h1>

          <div className="w-full bg-gradient-to-r from-text via-text-muted to-transparent h-1 sm:my-4 mb-1 rounded-full "></div>

          {/* Greeting text */}
          <div className="w-fit text-text-soft">
            <p className="sm:text-xl font-semibold text-text  ">What's up hommie! 👋</p>
            <SplitText
              text="Welcome to the most comprehensive IAP library. Embark on your learning adventure with innovative resources and interactive experiences."
              className="sm:text-[16px] text-xs text-text-muted"
              delay={200}
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
        <div className="flex justify-center items-center relative w-full">
          {!coverLoaded && (
            <div className="w-full max-w-lg h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse" />
          )}
          {coverLoaded && (
            <img
              src={Collab}
              alt="Collaboration illustration"
              className="animate-fadein drop-shadow-2xl drop-shadow-white w-full max-w-lg h-auto object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
