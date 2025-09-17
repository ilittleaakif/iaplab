import { useNavigate, useParams } from "react-router-dom";
import { SemesterContainer } from "./ModulesHandler";
import { SECTION_DATA } from "./main_datas";
import { ArrowLeftIcon, LibraryBig } from "lucide-react";

const SemsterContent = () => {
  const { name } = useParams();
  const targetSemester = SECTION_DATA.find(s => s.semester === name);
  const navigate = useNavigate();
  if (!targetSemester) return <h2 className="text-center text-bg mt-20">Semestre introuvable !</h2>;

  return (



    <div className="font-main min-h-screen  ">
      <header className="w-full flex text-text gap-4 items-center p-6 bg-bg">
        <ArrowLeftIcon className="cursor-pointer" onClick={() => navigate(-1)} />
        <span className="uppercase text-xl font-bold">{targetSemester.semester}</span>
      </header>

      <div className="w-full md:px-16 px-4 py-6 mx-auto">
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