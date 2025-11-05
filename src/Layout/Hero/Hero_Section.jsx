import { useRef, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typed from "typed.js";
import { ActionBtn } from "./Action_Button";
import hero_svg from "/Assets/mid/001.svg";
import * as utils from '../../Data/utils'

function HeroSection() {
  const typedRef = useRef(null);
  const navigate = useNavigate();
  const [coverLoaded, setCoverLoaded] = useState(false);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Learn.", "Build.", "Discover.", "Grow.", "Code."],
      typeSpeed: 150,
      backSpeed: 50,
      backDelay: 3000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    const img = new Image();
    img.src = hero_svg;
    img.onload = () => setCoverLoaded(true);
  }, []);

  return (
    <main className="relative select-none pt-40 sm:pt-0 flex items-end sm:items-center justify-center min-h-screen overflow-hidden font-main">

      {/* Content Grid */}
      <div className="relative grid w-full px-4 sm:px-10 sm:grid-cols-2 grid-cols-1 items-center">

        {/* Left Content */}
        <div className="flex flex-col">

          {/* Typing text */}
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-text-soft ">
            <span>to{" "}</span>
            <span className="inline-block text-transparent bg-gradient-to-br from-text to-text-muted bg-clip-text" ref={typedRef} />
          </h1>

          <div className="w-full bg-gradient-to-r from-text via-text-muted to-transparent h-1 sm:my-3 my-1 rounded-full "></div>

          {/* Greeting text */}
          <div className="w-fit text-text-soft">
            <p className="sm:text-xl space-x-1 font-semibold text-text-soft text-lg">
              <span className="">Hello Mate!</span>
              <i className="fas fa-heart text-youtube"></i>
            </p>
            <p className="sm:text-base leading-relaxed text-xs text-text-muted animate-fadein">Welcome to the most comprehensive IAP library. Embark on your learning adventure with innovative resources and interactive experiences.</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap content-start items-center gap-2 mt-4">

            <ActionBtn
              label="Provide a suggestion"
              icon="fas fa-heart"
              Accent={'eighth'}
              clickEvent={() => navigate("/form")}
              delay=".5"
            />
            <ActionBtn
              label="Get Gemini pro"
              icon="fab fa-google"
              Accent={'accent'}
              clickEvent={() => utils.OpenLink('https://one.google.com/join/ai-student?utm_source=gemini&utm_medium=bts-campus-qrcode&utm_id=a7721bf9-2a0c-43e2-b4ab-0be4dd31d0df&g1_landing_page=5')}
              delay="1"
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
              src={hero_svg}
              alt="Collaboration illustration"
              className="animate-fadein w-full max-w-lg h-auto object-contain"
            />
          )}
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
