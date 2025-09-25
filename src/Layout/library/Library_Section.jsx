import { forwardRef } from "react";
import { OTHER_LABS, DATAS } from "../../Data/Library_Datas";
import { BookOpen, GraduationCap, UsersRound, HeartHandshake, BookText, BookOpenText, AtSign, Calendar, HardDrive, BookAudioIcon, CalendarDaysIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ExtraCard } from "../../Components/Extra_Card";
import { LibraryCard } from "../../Components/Library_Card";
import { LibraryHeading } from "../../Components/Library_Heading";
import * as Wizard from '../../Data/Wizard'
import woman from '/Assets/woman.svg'
import SplitText from "../../Assets/SplitText";

const LibrarySection = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const OpenLink = (link) => window.open(link, "_blank");

  return (
    <div className=" font-main relative bg-bg text-text" ref={ref}>

      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: `  repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),  repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),  repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),  repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)`, }} />

      <div className="animate-fadein text-center md:text-base text-xs px-5 w-fit md:mx-auto mx-4 text-text-soft font-hand border-b mb-8">
        <span>"May your days be bright as these pages, and your thoughts as free as sunlight."</span>
      </div>


      {/* Sections Container */}
      <div className="md:space-y-12 z-10 space-y-8 max-w-7xl mx-auto px-4">


        {/* Semesters Cards */}
        <div className="space-y-2 md:space-y-3">
          <LibraryHeading title={'Semesters'} icon={BookText} />
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 mx-auto">
            {DATAS.map((data, idx) => (
              <LibraryCard key={idx} title={data.semester} icon={GraduationCap} onClick={() => navigate(`/semester/${encodeURIComponent(data.semester)}`)} />
            ))}
          </div>
        </div>

        {/* <img src={Students} className="w-full shadow-c max-w-7xl mx-auto" /> */}


        {/* other libraries */}
        <div className="space-y-2 md:space-y-3">
          <LibraryHeading title={'Other Labs'} icon={BookOpenText} />
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 mx-auto">
            {OTHER_LABS.map((data, idx) => (
              <LibraryCard accent='second' key={idx} title={data.libName} icon={BookAudioIcon} onClick={() => OpenLink(data.libUrl)} />
            ))}
          </div>
        </div>

      </div>



      {/* Extras Cards */}
      <img src={woman} className="w-1/2 max-w-56 mx-auto mt-24" />
      <div className="mx-auto text-text-soft max-w-4/5 justify-center pt-4 border-text-soft  flex items-center gap-2 border-t">
        <h1>Student HelpUp</h1>
        <HeartHandshake size={17} />
      </div>


      <div className="grid max-w-7xl md:gap-6 gap-4 px-4 py-8 mx-auto grid-cols-1 md:grid-cols-3">
        <div className="gap-2 flex flex-col items-center">
          <ExtraCard clickEvent={() => navigate('/Elibrary')} accent={'youtube'} icon={BookOpen} title={"E-Library"} des={"Découvre une e-librairie dédiée à l’informatique : apprends différents domaines IT, accède à des cours gratuits et trouve des ressources pour progresser dans ta carrière."} btn={"Cliquez ici"} />
        </div>
        <div className="gap-2 flex flex-col items-center">
          <ExtraCard Link={'https://drive.google.com/drive/folders/16Hykdvbrpv7yPeTWSG493T6JkP8fdgeS'} accent={'second'} icon={GraduationCap} title={"Cycle d'ingénieur"} des={"Vous souhaitez vous préparer au Cycle d'ingénieur ?"} btn={"Cliquez ici"} />
        </div>
        <div className="gap-2 flex flex-col items-center">
          <ExtraCard Link={'https://guideinfo.netlify.app/'} accent={'second'} icon={BookOpen} title={"Orientation"} des={"Tu as un DUEG ou une licence en informatique ? Tu veux connaître tous les masters et cycles d'ingénieur en informatique au Maroc ?"} btn={"Cliquez ici"} />
        </div>
      </div>

    </div >



  );
})

export default LibrarySection;
