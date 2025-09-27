import { useParams } from "react-router-dom";
import { DATAS } from "../../Data/Library_Datas";
import { DownloadIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";
import SubHeader from "../../Components/SubHeader";


const SchedulesSection = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);


  const { semester } = useParams();
  const targetSemester = DATAS.find((s) => s.semester === semester);
  const [previewImg, setPreviewImg] = useState(null);
  const schedules = Array.isArray(targetSemester.Schedules) ? targetSemester.Schedules : [];


  if (!targetSemester) return (<h2 className="text-center text-red-400 mt-20 text-xl font-semibold">Introuvable !</h2>);
  return (
    <div className="min-h-screen relative overflow-hidden font-main">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: `  repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),  repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),  repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),  repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)`, }} />



      {/* Header */}
      <SubHeader title={`${targetSemester.semester} - Emploies Des temps`} />


      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 z-20">
        {schedules.length === 0 ? (
          <p className="text-center text-lg text-text-soft italic">Aucune donnée disponible...</p>
        ) : (
          <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
            {schedules.map((data, idx) => (
              <div className="group bg-bg overflow-hidden text-text border border-border shadow-md shadow-bg-soft hover:shadow-xl transition" key={idx}>
                <div className="overflow-hidden cursor-pointer" onClick={() => setPreviewImg(data.imgUrl)}>
                  <img
                    src={data.imgUrl}
                    className="h-auto w-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <p className="font-medium text-sm md:text-base truncate w-full py-4 px-5 bg-text/10 backdrop-blur-md">{data.title}</p>

              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Modal */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImg(null)}
        >
          <div className="relative max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            <XIcon
              onClick={() => setPreviewImg(null)}
              className="absolute bg-bg/40 p-1 rounded-full top-2 right-2 text-text cursor-pointer hover:text-seventh transition" size={28} />
            <img src={previewImg} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SchedulesSection;
