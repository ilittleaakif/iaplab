import { useNavigate, useParams } from "react-router-dom";
import { SemesterContainer } from "./Components_Handler";
import { DATAS } from "../../Data/Library_Datas";
import { ArrowLeftIcon } from "lucide-react";

const SemsterContent = () => {
  const { name } = useParams();
  const targetSemester = DATAS.find(s => s.semester === name);
  const navigate = useNavigate();
  if (!targetSemester) return <h2 className="text-center text-bg mt-20">Semestre introuvable !</h2>;

  return (
    <div className="bg-bg font-main min-h-screen relative overflow-hidden">

      <header className="w-full flex gap-4 items-center p-6 z-20 text-text">
        <ArrowLeftIcon className="cursor-pointer" onClick={() => navigate(-1)} />
        <span className="text-xl font-bold">{targetSemester.semester}</span>
      </header>

      <div className="w-full md:px-16 px-4 py-6 mx-auto z-20">
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