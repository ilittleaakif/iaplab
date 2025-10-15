import { forwardRef } from "react";
import { OTHER_LABS, DATAS } from "../../Data/Library_Datas";
import { BookOpen, GraduationCap, HeartHandshake, BookText, BookOpenText, BookAudioIcon, HandFist } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { ExtraCard } from "../../Components/Extra_Card";
import { LibraryCard } from "./Library_Card";
import { LibraryHeading } from "../../Components/Library_Heading";
import clusmy from '/Assets/002.svg'
import RandomQuery from "../../Components/Ayah_Quote";

const LibrarySection = forwardRef((props, ref) => {
  const navigate = useNavigate();
  const OpenLink = (link) => window.open(link, "_blank");


  return (
    <div className="font-main relative text-text" ref={ref}>

      {/* Sections Container */}
      <div className="md:space-y-12 space-y-8 max-w-6xl mx-auto px-4">

        {/* Quran */}
        <RandomQuery isAyah={true} />

        {/* Semesters Cards */}
        <div className="space-y-2 sm:space-y-3">
          <LibraryHeading title={'Semesters'} icon={BookText} />
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 mx-auto">
            {DATAS.map((data, idx) => (
              <LibraryCard key={idx} title={data.semester} icon={BookOpen} onClick={() => navigate(`/semester/${data.semester}`)} />
            ))}
          </div>
        </div>


        {/* quote */}
        <RandomQuery isAyah={false} />

        {/* other Labs */}
        <div className="space-y-2 sm:space-y-3">
          <LibraryHeading title={'Other Labs'} icon={BookOpenText} />
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 mx-auto">
            {OTHER_LABS.map((data, idx) => (
              <LibraryCard accent='second' key={idx} title={data.libName} icon={BookAudioIcon} onClick={() => OpenLink(data.libUrl)} />
            ))}
          </div>
        </div>
      </div>



      {/* Extras Cards */}
      <div className="my-10 space-y-2">
        <img src={clusmy} className="w-full max-w-lg drop-shadow-2xl drop-shadow-bg mx-auto" />
      </div>

      <div className="grid max-w-7xl md:gap-6 gap-4 px-4 py-8 mx-auto grid-cols-1 md:grid-cols-3">
        <ExtraCard clickEvent={() => navigate('/Elibrary')} accent={'youtube'} icon={BookOpen} title={"E-Library"} des={"Découvre une e-librairie dédiée à l’informatique : apprends différents domaines IT, accède à des cours gratuits et trouve des ressources pour progresser dans ta carrière."} btn={"Cliquez ici"} />
        <ExtraCard Link={'https://drive.google.com/drive/folders/16Hykdvbrpv7yPeTWSG493T6JkP8fdgeS'} accent={'second'} icon={GraduationCap} title={"Cycle d'ingénieur"} des={"Vous souhaitez vous préparer au Cycle d'ingénieur ?"} btn={"Cliquez ici"} />
        <ExtraCard Link={'https://guideinfo.netlify.app/'} accent={'second'} icon={BookOpen} title={"Orientation"} des={"Tu as un DUEG ou une licence en informatique ? Tu veux connaître tous les masters et cycles d'ingénieur en informatique au Maroc ?"} btn={"Cliquez ici"} />
      </div>

    </div >
  );
})
export default LibrarySection;
