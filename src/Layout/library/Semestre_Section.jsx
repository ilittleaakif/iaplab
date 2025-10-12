import { useParams } from "react-router-dom";
import { useEffect } from "react";

import { DATAS } from "../../Data/Library_Datas";
import { SemesterContainer } from "./Components_Handler";

import SubHeader from "../../Components/SubHeader";

const SemesterContent = () => {
  const { name } = useParams();
  const targetSemester = DATAS.find((e) => e.semester === name);

  useEffect(() => { window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); }, []);

  if (!targetSemester)
    return (<h2 className="text-center text-bg mt-20">Semestre introuvable !</h2>);

  return (
    <div
      style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)`, }}
      className="font-main min-h-screen relative overflow-hidden"
    >

      <SubHeader title={targetSemester.semester} />
      <div className="w-full md:px-20 px-2 py-6 mx-auto">
        <SemesterContainer
          semesterData={targetSemester}
        />
      </div>
    </div>
  );
};

export default SemesterContent;
