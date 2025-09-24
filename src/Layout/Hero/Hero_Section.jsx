import { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
import SplitText from "../../Assets/SplitText";
import { ActionBtn } from "../../Components/Action_Button";

function HeroSection({ libRef }) {
  const typedRef = useRef(null);
  const navigate = useNavigate();
  const scrollEvent = (target) => target?.current?.scrollIntoView({ behavior: "smooth" });

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Learn.", "Create.", "Discover.", "Explore.", "Build.", "Grow."],
      typeSpeed: 180,
      backSpeed: 20,
      backDelay: 4000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="select-none relative flex bg-black items-center justify-center min-h-screen overflow-hidden font-main ">
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99, 102, 241, 0.25), transparent 70%), #000000", }} />



      {/* Hero Content */}
      <div className="relative z-10 text-center" >
        <h1 className="text-[34px] md:text-7xl font-bold md:my-4 my-3 text-text animate-[fade-in_1s_ease-out_forwards]">
          <span>to {" "}</span>
          <span className="inline-block  text-transparent bg-gradient-to-r from-accent to-second bg-clip-text animate-pulse-grow" ref={typedRef}></span>
        </h1>

        {/* Greeting */}
        <div className="md:max-w-3xl max-w-3/4 mx-auto  font-light leading-relaxed opacity-0 text-light/85 animate-fadein">
          <p className="md:text-xl  text-md font-semibold text-text">Hello my freind! 👋</p>
          <SplitText
            text="Welcome to the most comprehensive IAP library. Embark on your learning adventure with innovative resources and interactive experiences."
            className="md:text-lg text-xs text-center text-text-soft"
            delay={250}
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
        <div className="flex flex-col justify-center gap-4 px-10 mx-auto mt-6 md:px-0 md:w-full md:flex-row">
          <ActionBtn
            // gradient="bg-gradient-to-br from-blue-500 via-blue-700 to-blue-900"
            accent={'#1D4ED8'}
            label="Discover the lessons"
            icon="fa-solid fa-graduation-cap"
            clickEvent={() => scrollEvent(libRef)}
            delay={'.6s'}
          />
          <ActionBtn
            // gradient="bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700"
            accent={'var(--second)'}
            label="Discover E-Library"
            icon="fa-solid fa-file-circle-plus"
            clickEvent={() => navigate('/elibrary')}
            delay={'1s'}
          />
          <ActionBtn
            // gradient="bg-gradient-to-br from-green-500 via-green-600 to-green-700"
            accent={'#15803D'}
            label="Provide a suggestion"
            icon="fa-solid fa-lightbulb"
            clickEvent={() => navigate('/suggest')}
            delay={'1.4s'}
          />

        </div>


        {/* Announce */}
        <div className="relative mt-6 animate-fadein w-fit mx-auto flex items-center text-center">
          <button class="group relative flex flex-row items-center justify-center gap-2 rounded-full px-4 py-1 mx-auto text-sm font-medium  bg-[#1a1b2e] ">
            <div class="absolute inset-0 block h-full w-full animate-background bg-gradient-to-r from-accent  to-second bg-[length:var(--bg-size)_100%] rounded-full [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
            <span class="font-main inline text-[10px] md:text-sm animate-background whitespace-pre bg-gradient-to-r from-third to-seventh bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%] text-center">
              New structure!
            </span>
          </button>
        </div>

      </div >
    </div >
  );
}

export default HeroSection;