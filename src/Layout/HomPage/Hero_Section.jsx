import { useEffect, useState } from "react";
import hero_svg from "/Assets/mid/001.svg";

function HeroSection() {
  const [coverLoaded, setCoverLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = hero_svg;
    img.onload = () => setCoverLoaded(true);
  }, []);

  return (
    <section className="relative select-none px-4 flex flex-col items-center justify-center pt-40 overflow-hidden font-main">

      <div className="w-fit max-w-2xl text-center font-cute text-text-soft">
        <p className="sm:text-6xl text-4xl space-x-1 font-bold text-text-soft">
          <span >Hello Mate!</span>
          <i className="fas fa-heart text-[#E86F7B]"></i>
        </p>
        <p className="sm:text-xl text-text-soft animate-fadein">
          Step into the <span className="relative px-1 marker markera">IAP</span> library—whe
          re learning is fun, curiosity is welcome, and every page starts a new <span className="relative marker px-1 markerb">adventure</span>!
        </p>
      </div>


      {
        !coverLoaded ?
          (<div className="w-full max-w-lg h-[200px] sm:h-[300px] lg:h-[450px] rounded-2xl bg-gradient-to-r from-gray-300 to-gray-200 animate-pulse" />)
          :
          (<img src={hero_svg} className="px-10 w-full max-w-xl h-auto object-contain" />)
      }

    </section>
  );
}

export default HeroSection;
