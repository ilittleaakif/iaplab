import { useNavigate, useParams } from "react-router-dom";
import { Schedules } from "../../Data/Library_Datas";
import { ArrowLeftIcon, DownloadIcon, XIcon } from "lucide-react";
import { useEffect, useState } from "react";

const SchedulesSection = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { semester } = useParams();
  const targetSemester = Schedules.find((s) => s.semester === semester);
  const navigate = useNavigate();
  const [previewImg, setPreviewImg] = useState(null); // track clicked image

  if (!targetSemester)
    return (
      <h2 className="text-center text-red-400 mt-20 text-xl font-semibold">
        Introuvable !
      </h2>
    );

  const schedules = Array.isArray(targetSemester.Datas)
    ? targetSemester.Datas
    : [];

  return (
    <div className="min-h-screen relative overflow-hidden font-main">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: "radial-gradient(circle at top, #1c1c1c, #000000)",
        }}
      />

      {/* Header */}
      <header className="w-full flex items-center gap-3 p-6 z-20 text-text border-b border-border/40 bg-black/30 backdrop-blur-md sticky top-0">
        <ArrowLeftIcon
          className="cursor-pointer hover:text-blue-400 transition-transform duration-200 hover:-translate-x-1"
          onClick={() => navigate(-1)}
        />
        <span className="text-xl md:text-2xl font-bold tracking-wide">
          {targetSemester.semester}
        </span>
      </header>

      {/* Content */}
      <div className="w-full max-w-5xl mx-auto px-4 md:px-8 py-8 z-20">
        {schedules.length === 0 ? (
          <p className="text-center text-lg text-text-soft italic">
            Aucune donnée disponible...
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {schedules.map((data, idx) => (
              <div
                key={idx}
                className="group bg-bg rounded-2xl overflow-hidden text-text border border-border shadow-md hover:shadow-xl transition duration-300"
              >
                <div
                  className="overflow-hidden cursor-pointer"
                  onClick={() => setPreviewImg(data.imgUrl)} // open modal only on image
                >
                  <img
                    src={data.imgUrl}
                    alt={data.title}
                    className="h-auto w-full object-cover transform group-hover:scale-105 transition duration-500"
                  />
                </div>
                <div className="flex items-center justify-between w-full py-4 px-5 bg-black/30 backdrop-blur-md">
                  <span className="font-medium text-sm md:text-base truncate">
                    {data.title}
                  </span>
                  <DownloadIcon className="text-text-soft" /> {/* decorative only */}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Fullscreen Image Modal */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImg(null)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()} // prevent close when clicking inside
          >
            <button
              className="absolute top-2 right-2 text-white hover:text-red-400 transition"
              onClick={() => setPreviewImg(null)}
            >
              <XIcon size={28} />
            </button>
            <img
              src={previewImg}
              alt="Preview"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default SchedulesSection;
