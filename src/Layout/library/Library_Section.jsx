import { forwardRef, useRef } from "react";
import { SEMESTRES, OTHER_LABS } from "../../Data/Library_Datas";
import { BookOpen, LibraryBig, GraduationCap, MessageCircleMore, Calendar, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UnivCard } from "./Components_Handler";


const LibrarySection = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const OpenLink = (link) => window.open(link, "_blank");

  return (
    <div className="py-6 font-main bg-black text-text" ref={ref}>


      <div className="relative w-fit mx-auto flex items-center text-center">
        <button class="group relative flex flex-row items-center justify-center gap-2 rounded-lg px-4 py-1 mx-auto text-sm font-medium bg-[#1a1b2e] shadow-[inset_0_-6px_8px_#4f46e51a] transition duration-500 ease-out hover:shadow-[inset_0_-4px_8px_#4338ca3d]">
          <div class="absolute inset-0 block h-full w-full animate-gradient bg-gradient-to-r from-violet-500/60 via-blue-500/60 to-violet-500/60 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
          <i class="fa-classic fa-solid fa-moon text-blue-400"></i>
          <span class="inline animate-gradient whitespace-pre bg-gradient-to-r from-violet-400 via-blue-400 to-indigo-700 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%] text-center">
            New Dark Look
          </span>
        </button>
        <span className='left-1/2 -translate-x-1/2 font-hand text-white text-shadow-[0_0_10px_white] md:text-[18px] text-[12px] absolute md:-bottom-4 -bottom-2'>by Zakariax</span>
      </div>



      <div className="space-y-6 my-10 mx-auto px-4 md:px-12 max-w-7xl ">
        {Object.entries(SEMESTRES).map(([year, sems]) => (
          <div key={year} className="md:space-y-6 space-y-4">

            {/* Heading */}
            <div className="flex text-text items-center gap-3 pb-2 border-b border-border">
              <Calendar className="md:w-6 md:h-6 w-5 h-5" />
              <h2 className="md:text-xl font-bold">{year}</h2>
            </div>

            {/* Semester Cards */}
            <div className="grid grid-cols-2 md:gap-6 gap-2 mx-auto">
              {sems.map((semester, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(`/semester/${encodeURIComponent(semester)}`)}
                  className="rounded-md flex flex-col items-center justify-center md:p-8 p-4 text-center cursor-pointer bg-bg-soft active:translate-y-2 hover:-translate-y-2  transition-all "
                >
                  <GraduationCap className="w-8 h-8 md:w-12 md:h-12 mb-4 text-accent" />
                  <h3 className="md:text-lg text-text-soft text-sm font-bold ">{semester}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* other libraries */}
      <div className="md:space-y-6 space-y-2 my-10 mx-auto px-4 md:px-12 max-w-7xl text-text" >
        <div className="flex items-center gap-3 pb-2 border-b border-border">
          <Calendar className="md:w-6 md:h-6 w-5 h-5" />
          <h2 className="md:text-xl font-bold">Other Faculties</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OTHER_LABS.map((lab, idx) => (
            <div
              onClick={() => OpenLink(lab.libUrl)}
              className="rounded-md md:p-6 p-4 bg-bg-soft flex gap-3 md:flex-col items-center md:justify-center hover:text-text hover:bg-gradient-to-br hover:from-bg hover:to-bg/80 active:translate-y-1  hover:-translate-y-1 cursor-pointer transition-all">
              <LibraryBig className="w-5 h-5 md:w-8 md:h-8 text-accent" />
              <div className="font-bold text-center text-md">{lab.libName}</div>
            </div>
          ))}
        </div>
      </div>



      {/* Extras Cards */}
      <div className="grid max-w-7XL md:gap-6 gap-4 px-4 py-8 mx-auto grid-cols-1 md:grid-cols-3">
        <UnivCard Link={'https://drive.google.com/drive/folders/16Hykdvbrpv7yPeTWSG493T6JkP8fdgeS'} accent={'second'} icon={GraduationCap} title={"Cycle d'ingénieur"} des={"Vous souhaitez vous préparer au Cycle d'ingénieur ?"} btn={"Cliquez ici"} />
        <UnivCard Link={'https://guideinfo.netlify.app/'} accent={'second'} icon={BookOpen} title={"Orientation"} des={"Tu as un DUEG ou une licence en informatique ? Tu veux connaître tous les masters et cycles d'ingénieur en informatique au Maroc ?"} btn={"Cliquez ici"} />
        <UnivCard Link={'https://chat.whatsapp.com/FPp1wV6TMNg0ZKeVeHPfqS?mode=ems_copy_t'} accent={'green'} icon={MessageCircleMore} title={"Groupe WhatsApp"} des={"Rejoignez le groupe WhatsApp pour les semestres S1-S2"} btn={"Rejoignez"} />
        <UnivCard Link={'https://chat.whatsapp.com/DwTyDHiMfbdGSarPEMBeW5'} accent={'green'} icon={MessageCircleMore} title={"Groupe WhatsApp"} des={"Rejoignez le groupe WhatsApp pour les semestres S3-S4"} btn={"Rejoignez"} />
      </div>


    </div >



  );
})

export default LibrarySection;
