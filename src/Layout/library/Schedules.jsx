import { useNavigate, useParams } from "react-router-dom";
import { DATAS } from "../../Data/Library_Datas";
import { ArrowLeftIcon, DownloadIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";


const SchedulesSection = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const handleDownload = (url, filename) => {
    const link = document.createElement("a");
    link.href = url;       // the image/file URL
    link.download = filename; // the name for the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const { semester } = useParams();
  const targetSemester = DATAS.find((s) => s.semester === semester);
  const navigate = useNavigate();
  const [previewImg, setPreviewImg] = useState(null);
  if (!targetSemester) return (<h2 className="text-center text-red-400 mt-20 text-xl font-semibold">Introuvable !</h2>);
  const schedules = Array.isArray(targetSemester.Schedules) ? targetSemester.Schedules : [];

  return (
    <div className="min-h-screen relative overflow-hidden font-main">
      <div className="absolute inset-0 -z-10" style={{ background: "radial-gradient(circle at top, #1c1c1c, #000000)", }} />

      {/* Header */}
      <header className="w-full flex items-center gap-3 p-6 z-20 text-text sticky top-0">
        <ArrowLeftIcon className="cursor-pointer hover:text-accent transition" onClick={() => navigate(-1)} />
        <span className="text-xl md:text-xl">{targetSemester.semester}</span>
      </header>

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
                <div className="flex items-center justify-between w-full py-4 px-5 bg-black/30 backdrop-blur-md">
                  <span className="font-medium text-sm md:text-base truncate">{data.title}</span>
                  <DownloadIcon
                    onClick={() => handleDownload(data.imgUrl, `${data.title}.jpg`)}
                    className="text-text-soft cursor-pointer hover:text-eighth transition" />
                </div>
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
