import { forwardRef } from "react";
import { OTHER_LABS, DATAS, AcMails } from "../../Data/Library_Datas";
import { BookOpen, LibraryBig, GraduationCap, UsersRound, HeartHandshake, BookText, BookOpenText, AtSign, Calendar } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { UnivCard } from "./Components_Handler";


const LibrarySection = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const OpenLink = (link) => window.open(link, "_blank");

  return (
    <div className="py-6 font-main bg-black text-text" ref={ref}>



      {/* <div className="relative w-fit mx-auto flex items-center text-center">
        <button class="group relative flex flex-row items-center justify-center gap-2 rounded-lg px-4 py-1 mx-auto text-sm font-medium bg-[#1a1b2e] shadow-[inset_0_-6px_8px_#4f46e51a] transition duration-500 ease-out hover:shadow-[inset_0_-4px_8px_#4338ca3d]">
          <div class="absolute inset-0 block h-full w-full animate-background bg-gradient-to-r from-orange-500/60 via-yellow-500/60 to-orange-500/60 bg-[length:var(--bg-size)_100%] [border-radius:inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] p-[1px] ![mask-composite:subtract]"></div>
          <i class="fa-classic fa-solid fa-moon text-orange-400"></i>
          <span class="font-arabic inline animate-background whitespace-pre bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-700 bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent [--bg-size:300%] text-center">
            جمعة مباركة
          </span>
        </button>
      </div> */}



      <div className="md:space-y-6 space-y-4 max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="flex text-text items-center gap-3 pb-2 border-b border-border">
          <BookText className="md:w-6 md:h-6 w-5 h-5" />
          <h2 className="md:text-xl font-bold">Courses</h2>
        </div>

        {/* Semester Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-6 gap-3 mx-auto">
          {DATAS.map((data, idx) => (
            <div
              key={idx}
              onClick={() => navigate(`/semester/${encodeURIComponent(data.semester)}`)}
              className="flex md:flex-col flex-row gap-3 rounded-lg bg-bg items-center justify-center md:p-6 p-4 text-center cursor-pointer border-2 border-accent active:translate-y-2 hover:-translate-y-2  transition-all "
            >
              <GraduationCap className="w-7 h-7 md:w-10 md:h-10 text-accent" />
              <h3 className="md:text-lg text-text-soft text-sm font-bold ">{data.semester}</h3>
            </div>
          ))}
        </div>
      </div>


      {/* other libraries */}
      <div className="md:space-y-6 space-y-4 my-10 mx-auto px-4 max-w-7xl text-text" >
        <div className="flex items-center gap-3 pb-2 border-b border-border">
          <BookOpenText className="md:w-6 md:h-6 w-5 h-5" />
          <h2 className="md:text-xl font-bold">Other Labs</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
          {OTHER_LABS.map((lab, idx) => (
            <div key={idx}
              onClick={() => OpenLink(lab.libUrl)}
              className="rounded-lg bg-bg  border-2 border-sub md:p-6 p-4 flex gap-3 md:flex-col items-center md:justify-center  active:translate-y-1  hover:-translate-y-1 cursor-pointer transition-all">
              <LibraryBig className="w-5 h-5 md:w-8 md:h-8 text-sub" />
              <div className="font-bold text-center text-md">{lab.libName}</div>
            </div>
          ))}
        </div>
      </div>



      {/* Profs Mails */}
      <div className="md:space-y-6 space-y-4 my-10 mx-auto px-4 max-w-7xl text-text" >
        <div className="flex items-center gap-3 pb-2 border-b border-border">
          <AtSign className="md:w-6 md:h-6 w-5 h-5" />
          <h2 className="md:text-xl font-bold">Academic Mails</h2>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {AcMails.map((data, idx) => (
            <div key={idx}
              onClick={() => navigate(`/Acmails/${encodeURIComponent(data.semester)}`)}
              className="flex md:flex-col flex-row gap-3 rounded-lg bg-bg items-center justify-center md:p-6 p-4 text-center cursor-pointer border-2 border-second active:translate-y-2 hover:-translate-y-2  transition-all "
              >
              <Calendar className="w-7 h-7 md:w-10 md:h-10 text-second" />
              <div className="font-bold text-center text-sm md:text-md">{data.semester}</div>
            </div>
          ))}
        </div>

      </div>


      {/* WhaGroups */}
      <div className="md:space-y-6 space-y-4 my-10 mx-auto px-4 max-w-7xl text-text" >
        <div className="flex items-center gap-3 pb-2 border-b border-border">
          <UsersRound className="md:w-6 md:h-6 w-5 h-5" />
          <h2 className="md:text-xl font-bold"> WhatsApp Groupes</h2>
        </div>

        <div className="grid md:grid-cols-2 grid-cols-1  gap-4">
          {DATAS.map((data, idx) => (
            data.whatGroup &&
            <div key={idx}
              onClick={() => OpenLink(data.whatGroup.link)}
              className="rounded-lg  bg-bg flex-row border-2 border-[#128C7E] md:p-6 p-4 flex gap-3  items-center md:justify-center  active:translate-y-1  hover:-translate-y-1 hover:shadow-[0_0_10px_#128C7E] cursor-pointer transition-all">
              <i class="fa-brands fa- fa-whatsapp text-[#128C7E] text-xl"></i>
              <div className="font-bold text-center text-md">{data.whatGroup.title}</div>
            </div>
          ))}
        </div>
      </div>






      {/* Extras Cards */}
      <div className="mx-auto  *:drop-shadow-[0_0_8px] *:drop-shadow-sub text-sub max-w-4/5 justify-center pt-4 border-text-soft mt-32 flex items-center gap-2 border-t">
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
