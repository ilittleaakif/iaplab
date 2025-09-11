import { useRef, useState } from "react";
import { semesters, sectionsData } from "./Datas";
import { CalendarRange, ChevronDown, ArrowRight, BookOpen, GraduationCap, DiamondPlus } from "lucide-react";

const ModuleCard = ({ title, icon: Icon }) => {
  return (
    <div className=" text-dark border-2 border-dark hover:*:text-light rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer hover:bg-dark transition">
      <Icon className="w-8 h-8 mb-2" />
      <div className="text-lg font-bold text-center">{title}</div>
    </div>
  );
};

const ExtraCard = ({ title, icon: Icon }) => {
  return (
    <div className="bg-red-600 gap-1 text-white flex-col md:flex-row rounded-lg px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-red-400 transition">
      <Icon />
      <div className="text-lg font-bold text-center">{title}</div>
    </div>
  );
};

const SectionBlock = ({ extras, semester, modules, sectionRef }) => {
  const [showExtras, setShowExtras] = useState(false);

  return (
    <section ref={sectionRef} className="bg-white rounded-xl shadow p-6 space-y-8">

      {/* Header */}
      <div className="flex items-center gap-3 border-b pb-3">
        <CalendarRange className="text-dark" />
        <h2 className="text-xl font-bold text-dark">{semester}</h2>
      </div>

      {/* Modules */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {modules.map((mod, i) => (
          <ModuleCard key={i} title={mod.title} icon={mod.icon} />
        ))}
      </div>

      {/* Extras */}
      {extras?.length > 0 &&
        <>
          <div className="flex items-center justify-between border-b pb-3">
            <div className="flex items-center gap-3">
              <DiamondPlus />
              <h2 className="text-xl font-bold text-dark">Extras</h2>
            </div>
            <ChevronDown className={`w-6 h-6 cursor-pointer transition-transform ${showExtras ? "rotate-180" : "rotate-0"}`} onClick={() => setShowExtras(!showExtras)} />
          </div>

          {showExtras &&
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4 w-full items-center transition-all">
              {extras.map((extra, i) => (
                <ExtraCard key={i} title={extra.title} icon={extra.icon} />
              ))}
            </div>
          }
        </>
      }
    </section>
  );
};

function LibrarySection() {
  const semesterRef = useRef({});

  const scrollToSemester = (semester) => semesterRef.current[semester]?.scrollIntoView({ behavior: "smooth", block: "start", });

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 font-gortesk">

      <div className="flex flex-wrap gap-4 justify-center mb-10">
        {semesters.map((semester, idx) => (
          <button className="font-poppins cursor-pointer px-5 py-2.5 rounded-sm border border-slate-300 bg-white text-slate-700 font-medium shadow-sm hover:bg-slate-100 hover:border-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition" onClick={() => scrollToSemester(semester)} key={idx}>
            {semester}
          </button>
        ))}
      </div>

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



      <div className="max-w-6xl mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        {/* Card 1 */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <GraduationCap className="w-8 h-8 text-blue-500 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Cycle d'ingénieur</h2>
          </div>
          <p className="text-gray-600 mb-6">Vous souhaitez vous préparer au Cycle d'ingénieur ?</p>
          <button className="cursor-pointer inline-flex items-center text-blue-600 font-medium hover:underline">
            <span>Cliquez ici</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow-lg rounded-2xl p-8 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center mb-4">
            <BookOpen className="w-8 h-8 text-green-500 mr-3" />
            <h2 className="text-xl font-semibold text-gray-800">Orientation</h2>
          </div>
          <p className="text-gray-600 mb-6">Tu as un DUEG ou une licence en informatique ? Tu veux connaître tous les masters et cycles d'ingénieur en informatique au Maroc ?</p>
          <button className="cursor-pointer inline-flex items-center text-green-600 font-medium hover:underline">
            <span>Cliquez ici </span>
            <ArrowRight className="w-5 h-5 ml-2" /></button>
        </div>
      </div>

      <div className="mt-16 text-center bg-slate-800 text-white p-10 rounded-xl">
        <h3 className="text-2xl font-bold mb-2">Des idées pour de nouvelles fonctionnalités ?</h3>
        <p className="mb-6 text-slate-300">Partagez vos suggestions afin d’améliorer votre expérience</p>
        <button className="cursor-pointer px-6 py-3 bg-indigo-600 rounded-lg font-semibold hover:bg-indigo-500 transition">
          Envoyer une suggestion
        </button>
      </div>



    </div>



  );
}

export default LibrarySection;
