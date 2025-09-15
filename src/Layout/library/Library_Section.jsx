import { forwardRef, useRef } from "react";
import { semesters, sectionsData } from "./main_datas";
import { BookOpen, GraduationCap, MessageCircleMore } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { SectionBlock, UnivCard } from "./ModulesHandler";


const LibrarySection = forwardRef((props, ref) => {
  const semesterRef = useRef({});
  const scrollToSemester = (semester) => semesterRef.current[semester]?.scrollIntoView({ behavior: "smooth", block: "start", });
  const navigate = useNavigate();

  return (
    <div className="py-10 font-main" ref={ref}>

      {/* Navbar */}
      <div className="grid grid-cols-2 md:grid-cols-4 w-fit mx-auto gap-4 my-10">
        {semesters.map((semester, idx) => (
          <button className="font-bold cursor-pointer px-5 py-2.5 border-2 border-bg text-bg shadow-[3px_3px_0_var(--bg)] active:shadow-none active:translate-[3px] transition" onClick={() => scrollToSemester(semester)} key={idx}>
            {semester}
          </button>
        ))}
      </div>


      {/* Sections */}
      <div className="w-full md:px-16 px-4 mx-auto">
        {sectionsData.map((section, idx) => (
          <SectionBlock
            key={idx}
            semester={section.semester}
            modules={section.modules}
            extras={section.extras}
            sectionRef={(el) => (semesterRef.current[section.semester] = el)}
          />
        ))}
      </div>


      {/* Extras Cards */}
      <div className="grid max-w-6xl md:gap-8 gap-4 px-4 py-12 mx-auto md:grid-cols-3">
        <UnivCard Link={'https://drive.google.com/drive/folders/16Hykdvbrpv7yPeTWSG493T6JkP8fdgeS'} accent={'second'} icon={GraduationCap} title={"Cycle d'ingénieur"} des={"Vous souhaitez vous préparer au Cycle d'ingénieur ?"} btn={"Cliquez ici"} />
        <UnivCard Link={'https://guideinfo.netlify.app/'} accent={'second'} icon={BookOpen} title={"Orientation"} des={"Tu as un DUEG ou une licence en informatique ? Tu veux connaître tous les masters et cycles d'ingénieur en informatique au Maroc ?"} btn={"Cliquez ici"} />
        <UnivCard Link={'https://chat.whatsapp.com/DwTyDHiMfbdGSarPEMBeW5'} accent={'whatsapp'} icon={MessageCircleMore} title={"Groupe WhatsApp"} des={"Rejoignez le groupe WhatsApp pour les semestres S3-S4"} btn={"Rejoignez"}
        />
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
