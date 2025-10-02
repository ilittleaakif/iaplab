import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  MailIcon,
  CopyIcon,
  BookOpenIcon,
  AlertCircleIcon,
  XIcon,
} from "lucide-react";
import { DATAS } from "../../Data/Library_Datas";
import * as wizard from "../../Data/Wizard";
import SubHeader from "../../Components/SubHeader";

const SemesterDashboard = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { semester, section } = useParams();
  const targetSemester = DATAS.find((s) => s.semester === semester);

  const [previewImg, setPreviewImg] = useState(null);

  if (!targetSemester)
    return (
      <h2 className="text-center text-red-400 mt-20 text-xl font-semibold">
        Semestre introuvable !
      </h2>
    );

  // Determine data based on section
  const isMails = section === "mails";
  const isSchedules = section === "schedules";

  const mailsData = Array.isArray(targetSemester.AcMails)
    ? targetSemester.AcMails
    : [];
  const schedulesData = Array.isArray(targetSemester.Schedules)
    ? targetSemester.Schedules
    : [];

  return (
    <div className="min-h-screen relative overflow-hidden font-main">
      {/* Background */}
      <div
        className="absolute inset-0 -z-10 pointer-events-none"
        style={{ backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),repeating-linear-gradient(90deg, transparent, transparent 5px, rgba(75, 85, 99, 0.06) 5px, rgba(75, 85, 99, 0.06) 6px, transparent 6px, transparent 15px),repeating-linear-gradient(0deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px),repeating-linear-gradient(90deg, transparent, transparent 10px, rgba(107, 114, 128, 0.04) 10px, rgba(107, 114, 128, 0.04) 11px, transparent 11px, transparent 30px)`, }}
      />

      {/* Header */}
      <SubHeader title={isMails ? `${targetSemester.semester} - Emails des profs` : `${targetSemester.semester} - Emplois des temps`}/>

      {/* Optional warning for schedules */}
      {isSchedules && (
        <div className="w-full text-bg flex items-center gap-2 max-w-7xl mx-auto px-4 md:px-8 py-4 z-20 bg-red-800">
          <AlertCircleIcon />
          <span>
            ATTENTION ! Ces emplois des temps sont pour la faculté des sciences
            Semlalia !
          </span>
        </div>
      )}

      {/* Content */}
      <div className="w-full max-w-7xl mx-auto px-4 md:px-8 py-8 z-20">
        {isMails &&
          (mailsData.length === 0 ? (
            <p className="text-center text-lg text-text-soft">
              Aucun mail disponible pour ce semestre.
            </p>
          ) : (
            mailsData.map((data, idx) => (
              <div
                key={idx}
                className="bg-bg border border-border p-6 mb-6 shadow-md hover:shadow-lg transition"
              >
                <div className="flex items-center gap-2 mb-4 text-sub/80">
                  <BookOpenIcon className="w-5 h-5 text-accent" />
                  <p className="text-sm font-medium">{data.Module}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-accent">
                    <MailIcon className="w-5 h-5" />
                    <p className="font-semibold break-all">{data.Mail}</p>
                  </div>
                  <button
                    onClick={() => wizard.copyToClipboard(data.Mail)}
                    className="flex cursor-pointer items-center gap-2 px-3 py-1.5 text-sm rounded-lg bg-accent/10 text-accent font-medium hover:bg-accent hover:text-white transition"
                  >
                    <CopyIcon className="w-4 h-4" />
                    <span>Copy</span>
                  </button>
                </div>
              </div>
            ))
          ))}

        {isSchedules &&
          (schedulesData.length === 0 ? (
            <p className="text-center text-lg text-text-soft italic">
              Aucune donnée disponible...
            </p>
          ) : (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
              {schedulesData.map((data, idx) => (
                <div
                  className="group bg-bg overflow-hidden text-text border border-border shadow-md shadow-bg-soft hover:shadow-xl transition"
                  key={idx}
                >
                  <div
                    className="overflow-hidden cursor-pointer"
                    onClick={() => setPreviewImg(data.imgUrl)}
                  >
                    <img
                      src={data.imgUrl}
                      className="h-auto w-full object-cover transform group-hover:scale-105 transition duration-500"
                    />
                  </div>
                  <p className="font-medium text-sm md:text-base truncate w-full py-4 px-5 bg-text/10 backdrop-blur-md">
                    {data.title}
                  </p>
                </div>
              ))}
            </div>
          ))}
      </div>

      {/* Fullscreen modal for schedules */}
      {previewImg && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          onClick={() => setPreviewImg(null)}
        >
          <div className="relative max-w-7xl w-full" onClick={(e) => e.stopPropagation()}>
            <XIcon
              onClick={() => setPreviewImg(null)}
              className="absolute bg-bg/40 p-1 rounded-full top-2 right-2 text-text cursor-pointer hover:text-seventh transition"
              size={28}
            />
            <img src={previewImg} className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};

export default SemesterDashboard;
