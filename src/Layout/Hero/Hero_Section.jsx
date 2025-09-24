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
      strings: ["Learn.", "Create.", "Explore.", "Build.", "Grow."],
      typeSpeed: 180,
      backSpeed: 20,
      backDelay: 4000,
      loop: true,
      cursorChar: '_'
    });
    return () => typed.destroy();
  }, []);

  return (
    <div className="select-none border-2  relative flex bg-black items-center justify-center min-h-screen overflow-hidden font-main ">
      <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(125% 125% at 50% 100%, #000000 40%, #010133 100%)", }} />
      {/* Your Content/Components */}
      {/* <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(6, 182, 212, 0.25), transparent 70%), #000000", }} /> */}
      {/* <div className="absolute inset-0 z-0" style={{background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255, 80, 120, 0.25), transparent 70%), #000000",}}/> */}
      {/* <div className="absolute inset-0 z-0" style={{ background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(139, 92, 246, 0.25), transparent 70%), #000000", }} /> */}
      {/* <div className="absolute inset-0 z-0" style={{ background: `   radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),   radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),   radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),   radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),   #000 `, }} /> */}



      {/* Hero Content */}
      <div className="relative z-10 text-center" >
        <h1 className=" inline-block text-[38px] md:text-[80px] font-bold text-text animate-[fade-in_1s_ease-out_forwards]">
          <span>to{" "}</span>
          <span className="inline-block text-transparent bg-gradient-to-r from-second to-seventh bg-clip-text animate-pulse-grow" ref={typedRef}
          ></span>
        </h1>


        {/* Greeting */}
        <div className="md:max-w-3xl border-t-2 md:pt-3 pt-2 border-border max-w-3/4 mx-auto  font-light leading-relaxed opacity-0 text-light/85 animate-fadein">
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
            accent={'accent'}
            label="Discover the lessons"
            icon="fa-solid fa-graduation-cap"
            clickEvent={() => scrollEvent(libRef)}
            delay={'.6s'}
          />
          <ActionBtn
            // gradient="bg-gradient-to-br from-violet-500 via-violet-600 to-violet-700"
            accent={'second'}
            label="Discover E-Library"
            icon="fa-solid fa-file-circle-plus"
            clickEvent={() => navigate('/elibrary')}
            delay={'1s'}
          />
          <ActionBtn
            // gradient="bg-gradient-to-br from-green-500 via-green-600 to-green-700"
            accent={'seventh'}
            label="Provide a suggestion"
            icon="fa-solid fa-lightbulb"
            clickEvent={() => navigate('/suggest')}
            delay={'1.4s'}
          />

        </div>


        {/* Announce */}
        {/* <div className="relative mt-6 animate-fadein w-fit mx-auto flex items-center text-center">
          <button class="group relative flex flex-row items-center justify-center gap-2 rounded-full px-4 py-1 mx-auto text-sm font-medium  bg-[#1a1b2e] ">
            <div class="absolute inset-0 block h-full w-full animate-background bg-gradient-to-r from-accent  to-second bg-[length:var(--bg-size)_100%] rounded-full [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
            <span class="font-main inline text-[10px] md:text-sm animate-background whitespace-pre bg-gradient-to-r from-third to-seventh bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%] text-center">
              New structure!
            </span>
          </button>
        </div> */}

      </div >
    </div >
  );
}

export default HeroSection;