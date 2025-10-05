import { useNavigate, useParams } from "react-router-dom";
import { SemesterContainer } from "./Components_Handler";
import { DATAS } from "../../Data/Library_Datas";
import { AtSign, Calendar, UsersRoundIcon } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@sglara/cn";
import SubHeader from "../../Components/SubHeader";

const SemsterContent = () => {
  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); }, []);

  const navigate = useNavigate();
  const OpenLink = (link) => window.open(link, "_blank");

  const { name } = useParams();
  const targetSemester = DATAS.find((e) => e.semester === name);
  const InactiveSemester = targetSemester.semester.includes('2') || targetSemester.semester.includes('4');
  if (!targetSemester) return <h2 className="text-center text-bg mt-20">Semestre introuvable !</h2>;

  const Card = ({ ClickEvent, Link = null, title, icon: Icon, ClassIcon }) => {
    return (
      <div
        onClick={InactiveSemester ? undefined : Link ? () => OpenLink(Link) : ClickEvent}
        className={cn(
          "font-main border-2 font-semibold border-border hover:border-border-dark text-text flex items-center gap-3 md:p-5 p-3 cursor-pointer transition",
          InactiveSemester && "opacity-50 cursor-not-allowed pointer-events-none")}
      >
        {
          ClassIcon ?
            <i className={ClassIcon}></i>
            :
            <Icon className="md:h-7 md:w-7 h-4 w-4 text-fourth " />
        }
        <p className="md:text-lg text-sm">{title}</p>
      </div>
    )
  }

  return (
    <div className="bgbg font-main min-h-screen relative overflow-hidden">
      <div className="absolute pointer-events-none inset-0 z-0" style={{ backgroundImage: "repeating-linear-gradient(0deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 4px), repeating-linear-gradient(90deg, rgba(0,0,0,0.02) 0px, rgba(0,0,0,0.02) 1px, transparent 1px, transparent 4px)", }} />


      <SubHeader title={targetSemester.semester} />

      

      <div className="w-full md:px-20 px-4 py-6 mx-auto z-10">
        <SemesterContainer
          semester={targetSemester.semester}
          modules={targetSemester.modules}
          extras={targetSemester.extras}
          youtube={targetSemester.youtube}
          pictures={targetSemester.pictures}
        />
      </div>
    </div>
  )
}

export default SemsterContent;