import { useNavigate, useParams } from "react-router-dom";
import { SemesterContainer } from "./Components_Handler";
import { DATAS } from "../../Data/Library_Datas";
import { ArrowLeftIcon, AtSign, Calendar, UsersRoundIcon } from "lucide-react";
import { useEffect } from "react";
import { cn } from "@sglara/cn";

const SemsterContent = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, []);

  const navigate = useNavigate();
  const OpenLink = (link) => window.open(link, "_blank");

  const { name } = useParams();
  const targetSemester = DATAS.find((s) => s.semester === name);
  const InactiveSemester = targetSemester.semester.includes('2') || targetSemester.semester.includes('4');
  if (!targetSemester) return <h2 className="text-center text-bg mt-20">Semestre introuvable !</h2>;

  const Card = ({ ClickEvent, Link = null, title, icon: Icon, ClassIcon, accent }) => {
    return (
      <div

        onClick={InactiveSemester ? undefined : Link ? () => OpenLink(Link) : ClickEvent}
        className={cn(
          "font-main border-2 border-border text-text flex items-center gap-3 rounded-xs md:p-5 p-3 cursor-pointer transition bg-gradient-to-br from-bg-card to-bg",
          InactiveSemester
            ? "opacity-50 cursor-not-allowed pointer-events-none"
            : "hover:-translate-y-1 active:translate-y-1"
        )}
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
    <div className="bg-bg font-main min-h-screen relative overflow-hidden">

      <header className="w-full flex gap-4 items-center p-6 z-20 text-text">
        <ArrowLeftIcon className="cursor-pointer transition-colors hover:text-accent" onClick={() => navigate(-1)} />
        <span className="text-xl font-bold">{targetSemester.semester}</span>
      </header>

      <div className="w-full md:px-20 px-4 py-6 mx-auto z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4">
          <Card ClickEvent={() => navigate(`/Schedules/${encodeURIComponent(targetSemester.semester)}`)} title={'Les emploies des temps'} icon={Calendar} accent={'fifth'} />
          <Card ClickEvent={() => navigate(`/Acmails/${encodeURIComponent(targetSemester.semester)}`)} title={'Les mails academics'} icon={AtSign} accent={'fourth'} />
          <Card ClickEvent={() => OpenLink(targetSemester.whatGroup.link)} title={'Groupes de whatsapp'} icon={UsersRoundIcon} accent={''} />
        </div>
      </div>

      <div className="w-full md:px-20 px-4 py-6 mx-auto z-20">
        <SemesterContainer
          semester={targetSemester.semester}
          modules={targetSemester.modules}
          extras={targetSemester.extras}
          youtube={targetSemester.youtube}
        />
      </div>
    </div>
  )
}

export default SemsterContent;