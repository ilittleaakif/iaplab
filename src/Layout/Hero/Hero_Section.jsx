import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
import { ActionBtn } from "../../Components/Action_Button";
import Collab from "/Assets/001.svg";
import * as utils from '../../Data/utils'

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
      className="relative select-none flex items-center justify-center min-h-screen overflow-hidden font-main">

      {/* Content Grid */}
      <div className="relative grid w-full px-6 sm:mt-0 mt-28 sm:px-10 sm:gap-4 gap-6 sm:grid-cols-2 items-center">

        {/* Left Content */}
        <div className="flex flex-col ">

          {/* Typing text */}
          <h1 className="text-[44px] md:text-4xl lg:text-7xl font-bold text-text ">
            <span>to{" "}</span>
            <span
              className="inline-block text-transparent bg-gradient-to-r from-text to-text-soft bg-clip-text"
              ref={typedRef}
            />
          </h1>

          <div className="w-full bg-gradient-to-r from-text via-text-muted to-transparent h-1 sm:my-2 mb-1 rounded-full "></div>

          {/* Greeting text */}
          <div className="w-fit text-text-soft">
            <p className="sm:text-xl space-x-1 font-semibold text-text text-lg">
              <span>What's up Mate!</span>
              <i className="fas fa-heart text-rose-500"></i>
            </p>
            <p className="sm:text-[16px] text-xs text-text-muted animate-fadein">Welcome to the most comprehensive IAP library. Embark on your learning adventure with innovative resources and interactive experiences.</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col flex-wrap content-start items-center sm:flex-row gap-2 mt-2">

            <ActionBtn
              label="Discover E-Library"
              icon="fas fa-laptop-code"
              clickEvent={() => navigate("/elibrary")}
              delay="0.5s"
              Accent={'ninth'}
            />
            <ActionBtn
              label="Provide a suggestion"
              icon="fas fa-heart"
              Accent={'eighth'}
              clickEvent={() => navigate("/form/suggest")}
              delay="0.8s"
            />
             <ActionBtn
              label="Gemini pro"
              icon="fab fa-google"
              Accent={'third'}
            clickEvent={() => utils.OpenLink('https://one.google.com/join/ai-student?utm_source=gemini&utm_medium=bts-campus-qrcode&utm_id=a7721bf9-2a0c-43e2-b4ab-0be4dd31d0df&g1_landing_page=5')}
              delay="1.1s"
            />
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center items-center relative w-full">
          {!coverLoaded && (
            <div className="w-full max-w-lg h-[250px] sm:h-[350px] lg:h-[450px] rounded-2xl bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse" />
          )}
          {coverLoaded && (
            <img
              src={Collab}
              alt="Collaboration illustration"
              className="animate-fadein  w-full max-w-lg h-auto object-contain"
            />
          )}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
