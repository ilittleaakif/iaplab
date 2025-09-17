import { forwardRef, useRef } from "react";
import { SEMESTRES, OTHER_LABS } from "./main_datas";
import { BookOpen, LibraryBig, GraduationCap, MessageCircleMore, Calendar, CalendarDays } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UnivCard } from "./ModulesHandler";


const LibrarySection = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const OpenLink = (link) => window.open(link, "_blank");


  return (
    <div className="py-10 font-main" ref={ref}>

      <div className="md:space-y-12 space-y-8 my-10 mx-auto px-4 md:px-12 max-w-7xl">
        {Object.entries(SEMESTRES).map(([year, sems]) => (
          <div key={year} className="space-y-6">

            {/* Heading */}
            <div className="flex items-center gap-3 pb-3 border-b border-border text-bg uppercase">
              <Calendar className="w-6 h-6" />
              <h2 className="text-xl font-bold">{year}</h2>
            </div>

            {/* Semester Cards */}
            <div className="grid grid-cols-2 gap-6 mx-auto">
              {sems.map((semester, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(`/semester/${encodeURIComponent(semester)}`)}
                  className="flex flex-col items-center justify-center md:p-8 p-6 text-center bg-text border-2 border-border cursor-pointer shadow-md hover:shadow-xl  hover:bg-bg-soft  active:bg-bg hover:text-text transition-all "
                >
                  <GraduationCap className="w-8 h-8 md:w-12 md:h-12 mb-4 text-accent" />
                  <h3 className="text-lg font-bold">{semester}</h3>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>


      {/* other libraries */}
      <div className="md:space-y-6 space-y-2 my-10 mx-auto px-4 md:px-12 max-w-7xl" >
        <div className="flex items-center gap-3 pb-3 border-b border-border text-bg uppercase">
          <Calendar className="w-6 h-6" />
          <h2 className="text-xl font-bold">AUTRES FACULTES</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {OTHER_LABS.map((lab, idx) => (
            <div
              onClick={() => OpenLink(lab.libUrl)}
              className="text-bg p-6 border-2 border-border flex flex-col items-center justify-center hover:text-text hover:bg-gradient-to-br hover:from-bg hover:to-bg/80 active:bg-bg active:text-text cursor-pointer transition-all">
              <LibraryBig className="w-8 h-8 mb-2 text-accent" />
              <div className="font-bold text-center text-md">{lab.libName}</div>
            </div>
          ))}
        </div>
      </div>



      {/* Extras Cards */}
      <div className="grid max-w-6xl md:gap-8 gap-4 px-4 py-12 mx-auto md:grid-cols-3">
        <UnivCard Link={'https://drive.google.com/drive/folders/16Hykdvbrpv7yPeTWSG493T6JkP8fdgeS'} accent={'second'} icon={GraduationCap} title={"Cycle d'ingénieur"} des={"Vous souhaitez vous préparer au Cycle d'ingénieur ?"} btn={"Cliquez ici"} />
        <UnivCard Link={'https://guideinfo.netlify.app/'} accent={'second'} icon={BookOpen} title={"Orientation"} des={"Tu as un DUEG ou une licence en informatique ? Tu veux connaître tous les masters et cycles d'ingénieur en informatique au Maroc ?"} btn={"Cliquez ici"} />
        <UnivCard Link={'https://chat.whatsapp.com/FPp1wV6TMNg0ZKeVeHPfqS?mode=ems_copy_t'} accent={'whatsapp'} icon={MessageCircleMore} title={"Groupe WhatsApp"} des={"Rejoignez le groupe WhatsApp pour les semestres S1-S2"} btn={"Rejoignez"} />
        <UnivCard Link={'https://chat.whatsapp.com/DwTyDHiMfbdGSarPEMBeW5'} accent={'whatsapp'} icon={MessageCircleMore} title={"Groupe WhatsApp"} des={"Rejoignez le groupe WhatsApp pour les semestres S3-S4"} btn={"Rejoignez"} />
      </div>

      <div className="p-10 mt-16 text-center text-white bg-bg-soft mx-4">
        <h3 className="mb-2 text-2xl font-bold">Des idées pour de nouvelles fonctionnalités ?</h3>
        <p className="mb-6 text-slate-300">Partagez vos suggestions afin d’améliorer votre expérience</p>
        <button onClick={() => navigate('/suggest')} className="px-6 py-3 font-semibold transition bg-second cursor-pointer hover:translate-[4px] shadow-[4px_4px_0_var(--text)] hover:shadow-none">
          Envoyer une suggestion
        </button>
      </div>



    </div>



  );
})

export default LibrarySection;
