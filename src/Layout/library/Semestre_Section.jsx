import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { GlobalLibraryDatas } from "../../Data/Library_Datas";
import { SemesterContainer } from "./Components/Components_Handler";
import SubHeader from "../../Components/SubHeader";

const SemesterContent = () => {
  const { name } = useParams();
  const targetSemester = GlobalLibraryDatas.find((e) => e.semester === name);

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }, []);

  if (!targetSemester)
    return (<h2 className="text-center text-bg mt-20">Semestre introuvable !</h2>);

  return (
    <div
      style={{
        background: `
          radial-gradient(ellipse 120% 80% at 70% 20%, rgba(255, 20, 147, 0.15), transparent 50%),
          radial-gradient(ellipse 100% 60% at 30% 10%, rgba(0, 255, 255, 0.12), transparent 60%),
          radial-gradient(ellipse 90% 70% at 50% 0%, rgba(138, 43, 226, 0.18), transparent 65%),
          radial-gradient(ellipse 110% 50% at 80% 30%, rgba(255, 215, 0, 0.08), transparent 40%),
          #000000
        `,
      }} 
      className="font-main min-h-screen relative overflow-hidden"
    >
      <SubHeader title={targetSemester.semester} />
      <div className="w-full md:px-20 px-2 py-6 ">
        <SemesterContainer semesterData={targetSemester.modules} />
      </div>
    </div>
  );
};

export default SemesterContent;
