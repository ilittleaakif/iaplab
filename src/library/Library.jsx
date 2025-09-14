import { forwardRef, useRef, useState } from "react";
import { semesters, sectionsData } from "./Datas";
import { CalendarRange, ChevronDown, ArrowRight, BookOpen, GraduationCap, DiamondPlus, MessageCircleMore } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OpenLink = (link) => window.open(link, "_blank");

const ModuleCard = ({ title, icon: Icon, Link }) => {
  return (
    <div onClick={() => OpenLink(Link)} className="text-bg active:*:text-text active:bg-bg border-2 border-border hover:*:text-text rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-bg transition">
      <Icon className="w-8 h-8 mb-2" />
      <div className="font-bold text-center text-md">{title}</div>
    </div>
  );
};

const ExtraCard = ({ title, icon: Icon, Link }) => {
  return (
    <div onClick={() => OpenLink(Link)} className="flex items-center justify-between px-6 py-4 transition rounded-xl cursor-pointer text-text bg-youtube active:*:text-text active:bg-youtube/90">
      <p className="font-semibold text-center md:text-lg">{title}</p>
      <Icon />
    </div>
  );
};

const SectionBlock = ({ extras, semester, modules, sectionRef }) => {
  const [showExtras, setShowExtras] = useState(false);

  return (
    <section ref={sectionRef} className="p-6 space-y-8 bg-white shadow rounded-xl">

      {/* Header */}
      <div className="flex items-center gap-3 pb-3 border-b text-bg">
        <CalendarRange/>
        <h2 className="text-xl font-bold ">{semester}</h2>
      </div>

      {/* Modules */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {modules.map((mod, i) => (
          <ModuleCard key={i} title={mod.title} icon={mod.icon} Link={mod.Url} />
        ))}
      </div>

      {/* Extras */}
      {extras?.length > 0 &&
        <>
          <div className="flex items-center justify-between pb-3 border-b">
            <div className="flex items-center gap-3">
              <DiamondPlus />
              <h2 className="text-xl font-bold text-dark">Extras</h2>
            </div>
            <ChevronDown className={`w-6 h-6 cursor-pointer transition-transform ${showExtras ? "rotate-180" : "rotate-0"}`} onClick={() => setShowExtras(!showExtras)} />
          </div>

          {showExtras &&
            <div className="grid items-center w-full grid-cols-1 gap-4 transition-all md:grid-cols-2">
              {extras.map((extra, i) => (
                <ExtraCard key={i} Link={extra.Url} title={extra.title} icon={extra.icon} />
              ))}
            </div>
          }
        </>
      }
    </section>
  );
};

const UnivCard = ({ icon: Icon, title, des, btn, accent, Link }) => {
  return (
    <div onClick={() => OpenLink(Link)} className="flex flex-col justify-between p-8 transition-shadow shadow-lg bg-text rounded-2xl hover:shadow-xl ">
      <div className="flex items-center mb-4">
        <Icon className={`md:w-8 md:h-8 w-6 h-6 mr-3`} style={{ color: `var(--${accent})` }} />
        <h2 className="text-lg font-semibold md:text-xl text-bg">{title}</h2>
      </div>
      <p className="mb-6 text-bg-soft">{des}</p>
      <button
        style={{ color: `var(--${accent})` }}
        className={`cursor-pointer inline-flex items-center  font-medium hover:underline`}>
        <span>{btn}</span>
        <ArrowRight className="w-5 h-5 ml-2" />
      </button>
    </div>
  )
}

const LibrarySection = forwardRef((props, ref) => {
  const semesterRef = useRef({});
  const scrollToSemester = (semester) => semesterRef.current[semester]?.scrollIntoView({ behavior: "smooth", block: "start", });
  const navigate = useNavigate();



  return (
    <div className="min-h-screen px-4 py-10 bg-slate-50 font-gortesk" ref={ref}>

      {/* Navbar */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {semesters.map((semester, idx) => (
          <button className="font-poppins cursor-pointer px-5 py-2.5 rounded-full border border-slate-300 bg-white text-slate-700 font-medium shadow-sm hover:bg-slate-100 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" onClick={() => scrollToSemester(semester)} key={idx}>
            {semester}
          </button>
        ))}
      </div>


      {/* Sections */}
      <div className="max-w-6xl mx-auto space-y-10">
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
      <div className="grid max-w-6xl gap-8 px-4 py-12 mx-auto md:grid-cols-2">
        <UnivCard Link={'https://drive.google.com/drive/folders/16Hykdvbrpv7yPeTWSG493T6JkP8fdgeS'} accent={'second'} icon={GraduationCap} title={"Cycle d'ingénieur"} des={"Vous souhaitez vous préparer au Cycle d'ingénieur ?"} btn={"Cliquez ici"} />
        <UnivCard Link={'https://guideinfo.netlify.app/'} accent={'second'} icon={BookOpen} title={"Orientation"} des={"Tu as un DUEG ou une licence en informatique ? Tu veux connaître tous les masters et cycles d'ingénieur en informatique au Maroc ?"} btn={"Cliquez ici"} />
        <UnivCard Link={'https://chat.whatsapp.com/DwTyDHiMfbdGSarPEMBeW5'} accent={'whatsapp'} icon={MessageCircleMore} title={"Groupe WhatsApp"} des={"Rejoignez le groupe WhatsApp pour les semestres S3-S4"} btn={"Rejoignez"}
        />
      </div>

      <div className="p-10 mt-16 text-center text-white bg-slate-800 rounded-xl">
        <h3 className="mb-2 text-2xl font-bold">Des idées pour de nouvelles fonctionnalités ?</h3>
        <p className="mb-6 text-slate-300">Partagez vos suggestions afin d’améliorer votre expérience</p>
        <button onClick={() => navigate('/suggest')} className="px-6 py-3 font-semibold transition bg-indigo-600 rounded-lg cursor-pointer hover:bg-indigo-500">
          Envoyer une suggestion
        </button>
      </div>



    </div>



  );
})

export default LibrarySection;
