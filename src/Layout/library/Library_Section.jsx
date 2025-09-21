import { forwardRef } from "react";
import { OTHER_LABS, DATAS, AcMails } from "../../Data/Library_Datas";
import { BookOpen, LibraryBig, GraduationCap, UsersRound, HeartHandshake, BookText, BookOpenText, AtSign, Calendar, HardDrive, BookAudioIcon, CalendarDaysIcon } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UnivCard } from "./Components_Handler";
import { LibraryCard } from "../../Components/Library_Card";
import { LibraryHeading } from "../../Components/Library_Heading";


const LibrarySection = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const OpenLink = (link) => window.open(link, "_blank");

  return (
    <div className="py-6 font-main bg-black text-text" ref={ref}>

      {/* Sections Container */}
      <div className="md:space-y-12 space-y-8 max-w-7xl mx-auto px-4">



        {/* Semesters Cards */}
        <div className="space-y-2 md:space-y-3">
          <LibraryHeading title={'Courses'} icon={BookText} />
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 mx-auto">
            {DATAS.map((data, idx) => (
              <LibraryCard accent='accent' key={idx} title={data.semester} icon={GraduationCap} onClick={() => navigate(`/semester/${encodeURIComponent(data.semester)}`)} />
            ))}
          </div>
        </div>

        {/* other libraries */}
        <div className="space-y-2 md:space-y-3">
          <LibraryHeading title={'Other Labs'} icon={BookOpenText} />
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-4 gap-2 mx-auto">
            {OTHER_LABS.map((data, idx) => (
              <LibraryCard accent='second' key={idx} title={data.libName} icon={BookAudioIcon} onClick={() => OpenLink(data.libUrl)} />
            ))}
          </div>
        </div>



        {/* Profs Mails */}
        <div className="space-y-2 md:space-y-3">
          <LibraryHeading title={'Academic Mails'} icon={AtSign} />
          <div className="grid grid-cols-2 md:gap-4 gap-2 mx-auto">
            {AcMails.map((data, idx) => (
              <LibraryCard accent='third' key={idx} title={data.semester} icon={Calendar} onClick={() => navigate(`/Acmails/${encodeURIComponent(data.semester)}`)} />
            ))}
          </div>
        </div>



        {/* WhaGroups */}
        <div className="space-y-2 md:space-y-3">
          <LibraryHeading title={'WhatsApp Groupes'} icon={UsersRound} />
          <div className="grid grid-cols-2 md:gap-4 gap-2 mx-auto">
            {DATAS.map((data, idx) => (
              data.whatGroup &&
              <LibraryCard key={idx} title={data.whatGroup.title} iconClass={'fa-brands fa-whatsapp md:text-2xl text-xl text-whatsapp'} onClick={() => OpenLink(data.whatGroup.link)} accent='whatsapp' />
            ))}
          </div>
        </div>

        <div className="space-y-2 md:space-y-3">
          <LibraryHeading title={'Schedules'} icon={CalendarDaysIcon} />
          <p className="text-fifth animate-pulse text-center font-mono tracking-tighter">Coming Soon ...</p>
          {/* <div className="grid grid-cols-2 md:gap-4 gap-2 mx-auto"> */}
          {/* </div> */}
        </div>

      </div>


      {/* Extras Cards */}
      <div className="mx-auto *:drop-shadow-[0_0_8px] *:drop-shadow-sub text-third max-w-4/5 justify-center pt-4 border-text-soft mt-32 flex items-center gap-2 border-t">
        <h1>Student HelpUp</h1>
        <HeartHandshake size={17} />
      </div>


      <div className="grid max-w-7xl md:gap-6 gap-4 px-4 py-8 mx-auto grid-cols-1 md:grid-cols-3">
        <div className="gap-2 flex flex-col items-center">
          <UnivCard clickEvent={() => navigate('/Elibrary')} accent={'youtube'} icon={BookOpen} title={"E-Library"} des={"Découvre une e-librairie dédiée à l’informatique : apprends différents domaines IT, accède à des cours gratuits et trouve des ressources pour progresser dans ta carrière."} btn={"Cliquez ici"} />
        </div>
        <div className="gap-2 flex flex-col items-center">
          <UnivCard Link={'https://drive.google.com/drive/folders/16Hykdvbrpv7yPeTWSG493T6JkP8fdgeS'} accent={'second'} icon={GraduationCap} title={"Cycle d'ingénieur"} des={"Vous souhaitez vous préparer au Cycle d'ingénieur ?"} btn={"Cliquez ici"} />
        </div>
        <div className="gap-2 flex flex-col items-center">
          <UnivCard Link={'https://guideinfo.netlify.app/'} accent={'second'} icon={BookOpen} title={"Orientation"} des={"Tu as un DUEG ou une licence en informatique ? Tu veux connaître tous les masters et cycles d'ingénieur en informatique au Maroc ?"} btn={"Cliquez ici"} />
        </div>
      </div>

    </div >



  );
})

export default LibrarySection;
